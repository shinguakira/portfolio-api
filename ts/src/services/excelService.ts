import ExcelJS from 'exceljs';
import {
  profile,
  workExperiences_en,
  workExperiences_ja,
  projects,
  skills,
  otherSkills,
  educationHistory,
  contact,
  certifications,
  strongPoint,
} from '../constants/index.js';
import {CATEGORY_COLORS, ExcelGenerationOptions} from '../types/excelTypes.js';
import {SkillItem} from '../types/skillItem.js';

// ── Helpers ──────────────────────────────────────────────────────────────────

function applyHeaderStyle(row: ExcelJS.Row, fillArgb: string): void {
  row.eachCell((cell) => {
    cell.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: fillArgb}};
    cell.font = {bold: true, color: {argb: 'FFFFFFFF'}, size: 11};
    cell.alignment = {vertical: 'middle', horizontal: 'center', wrapText: true};
    cell.border = {
      bottom: {style: 'thin', color: {argb: 'FFB0BEC5'}},
    };
  });
  row.height = 22;
}

function addHyperlink(cell: ExcelJS.Cell, url: string, display?: string): void {
  if (!url || url.trim() === '') {
    cell.value = 'N/A';
    cell.font = {color: {argb: 'FFB0BEC5'}, italic: true};
    return;
  }
  const fullUrl = url.startsWith('http') ? url : `https://example.com${url}`;
  cell.value = {text: display ?? url, hyperlink: fullUrl};
  cell.font = {color: {argb: 'FF1565C0'}, underline: true};
}

function groupSkillsByCategory(
  skillItems: SkillItem[]
): Record<string, SkillItem[]> {
  return skillItems.reduce<Record<string, SkillItem[]>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});
}

// ── Sheet builders ────────────────────────────────────────────────────────────

function buildProfileSheet(wb: ExcelJS.Workbook, lang: 'en' | 'ja'): void {
  const ws = wb.addWorksheet('Profile', {
    properties: {tabColor: {argb: 'FF1565C0'}},
  });

  ws.columns = [
    {key: 'field', width: 22},
    {key: 'en', width: 45},
    {key: 'ja', width: 45},
  ];

  // Title row
  const titleRow = ws.addRow(['Portfolio — Profile', '', '']);
  ws.mergeCells(`A1:C1`);
  titleRow.getCell(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: {argb: 'FF1565C0'},
  };
  titleRow.getCell(1).font = {bold: true, color: {argb: 'FFFFFFFF'}, size: 14};
  titleRow.getCell(1).alignment = {horizontal: 'center', vertical: 'middle'};
  titleRow.height = 30;

  // Column headers
  const headerRow = ws.addRow(['Field', 'Value (EN)', 'Value (JA)']);
  applyHeaderStyle(headerRow, 'FF1976D2');

  const labelFill: ExcelJS.Fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: {argb: 'FFE3F2FD'},
  };
  const labelFont: Partial<ExcelJS.Font> = {bold: true, color: {argb: 'FF0D47A1'}};

  const addRow = (field: string, enVal: string, jaVal: string) => {
    const r = ws.addRow([field, enVal, jaVal]);
    r.getCell(1).fill = labelFill;
    r.getCell(1).font = labelFont;
    r.getCell(2).alignment = {wrapText: true, vertical: 'top'};
    r.getCell(3).alignment = {wrapText: true, vertical: 'top'};
    r.height = 18;
  };

  addRow('Name', profile.name, profile.name);
  addRow('Title', profile.en.title, profile.ja.title);
  addRow('Location', profile.location, profile.location);
  addRow('Summary', profile.en.summary, profile.ja.summary);
  addRow('Bio', profile.en.bio, profile.ja.bio);
  addRow(
    'GitHub',
    profile.socialLinks.find((l) => l.platform === 'GitHub')?.url ?? '',
    profile.socialLinks.find((l) => l.platform === 'GitHub')?.url ?? ''
  );
  addRow('Email', contact.email, contact.email);
  addRow('Phone', contact.phone, contact.phone);
  addRow('Address', contact.address, contact.address);

  // Auto row heights for long text
  ws.getRow(5).height = 60; // Summary
  ws.getRow(6).height = 40; // Bio
}

function buildSkillsSheet(wb: ExcelJS.Workbook): void {
  const ws = wb.addWorksheet('Skills', {
    properties: {tabColor: {argb: 'FF1B5E20'}},
    views: [{state: 'frozen', ySplit: 1}],
  });

  ws.columns = [
    {header: '#', key: 'num', width: 5},
    {header: 'Skill Name', key: 'name', width: 30},
    {header: 'Category', key: 'category', width: 20},
    {header: 'Experience', key: 'years', width: 20},
    {header: 'Proficiency', key: 'proficiency', width: 20},
  ];

  applyHeaderStyle(ws.getRow(1), 'FF1B5E20');

  const allSkills = [...skills, ...otherSkills];
  let i = 1;
  for (const skill of allSkills) {
    const row = ws.addRow({
      num: i++,
      name: skill.name,
      category: skill.category,
      years: skill.years,
      proficiency: skill.proficiency,
    });

    const colors = CATEGORY_COLORS[skill.category] ?? {
      fill: 'FFFAFAFA',
      font: 'FF424242',
    };
    const fill: ExcelJS.Fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: colors.fill},
    };
    row.eachCell((cell) => {
      cell.fill = fill;
    });
    row.getCell(2).font = {color: {argb: colors.font}, bold: true};
    row.getCell(3).font = {color: {argb: colors.font}};
    row.height = 18;
  }

  ws.autoFilter = {from: 'A1', to: 'E1'};

  // Summary table below main data
  const summaryStartRow = allSkills.length + 3;
  const grouped = groupSkillsByCategory(allSkills);

  const summaryHeader = ws.getRow(summaryStartRow);
  summaryHeader.getCell(1).value = 'Category';
  summaryHeader.getCell(2).value = 'Count';
  summaryHeader.getCell(3).value = 'Skills';
  applyHeaderStyle(summaryHeader, 'FF37474F');

  let sr = summaryStartRow + 1;
  for (const [cat, items] of Object.entries(grouped)) {
    const r = ws.getRow(sr++);
    r.getCell(1).value = cat;
    r.getCell(2).value = items.length;
    r.getCell(3).value = items.map((s) => s.name).join(', ');
    r.getCell(3).alignment = {wrapText: true};
    r.height = 18;
    const colors = CATEGORY_COLORS[cat] ?? {fill: 'FFFAFAFA', font: 'FF424242'};
    const fill: ExcelJS.Fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: colors.fill},
    };
    r.getCell(1).fill = fill;
    r.getCell(2).fill = fill;
    r.getCell(3).fill = fill;
  }
}

function buildExperienceSheet(
  wb: ExcelJS.Workbook,
  lang: 'en' | 'ja'
): void {
  const ws = wb.addWorksheet('Experience', {
    properties: {tabColor: {argb: 'FF4CAF50'}},
    views: [{state: 'frozen', ySplit: 1}],
  });

  ws.columns = [
    {header: '#', key: 'num', width: 5},
    {header: 'Company', key: 'company', width: 25},
    {header: 'Period', key: 'period', width: 22},
    {header: 'Team Size', key: 'teamSize', width: 12},
    {header: 'Man-Months', key: 'manMonth', width: 14},
    {header: 'Role', key: 'role', width: 30},
    {header: 'Project Overview', key: 'overview', width: 40},
    {header: 'Description', key: 'description', width: 50},
    {header: 'Achievements', key: 'archivement', width: 50},
    {header: 'Technologies', key: 'technologies', width: 60},
  ];

  applyHeaderStyle(ws.getRow(1), 'FF1B5E20');

  const experiences = lang === 'en' ? workExperiences_en : workExperiences_ja;
  experiences.forEach((exp, idx) => {
    const row = ws.addRow({
      num: idx + 1,
      company: exp.company,
      period: exp.period,
      teamSize: exp.teamSize ?? '',
      manMonth: exp.manMonth,
      role: exp.role,
      overview: exp.projectOverview,
      description: exp.description.join('; '),
      archivement: exp.archivement.join('; '),
      technologies: exp.technologies.join(', '),
    });

    const isEven = (idx + 1) % 2 === 0;
    const fillArgb = isEven ? 'FFF1F8E9' : 'FFFFFFFF';
    const fill: ExcelJS.Fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: fillArgb},
    };
    row.eachCell((cell) => {
      cell.fill = fill;
      cell.alignment = {wrapText: true, vertical: 'top'};
    });
    row.height = 40;
  });

  ws.autoFilter = {from: 'A1', to: 'J1'};

  // Tech frequency table
  const freqStart = experiences.length + 3;
  const techCount: Record<string, number> = {};
  for (const exp of experiences) {
    for (const tech of exp.technologies) {
      techCount[tech] = (techCount[tech] ?? 0) + 1;
    }
  }
  const sorted = Object.entries(techCount).sort((a, b) => b[1] - a[1]);

  const freqHeader = ws.getRow(freqStart);
  freqHeader.getCell(1).value = 'Technology';
  freqHeader.getCell(2).value = 'Usage Count';
  applyHeaderStyle(freqHeader, 'FF37474F');

  sorted.forEach(([tech, count], i) => {
    const r = ws.getRow(freqStart + 1 + i);
    r.getCell(1).value = tech;
    r.getCell(2).value = count;
    r.height = 16;
    if ((i + 1) % 2 === 0) {
      const fill: ExcelJS.Fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: 'FFF1F8E9'},
      };
      r.getCell(1).fill = fill;
      r.getCell(2).fill = fill;
    }
  });
}

function buildProjectsSheet(wb: ExcelJS.Workbook, lang: 'en' | 'ja'): void {
  const ws = wb.addWorksheet('Projects', {
    properties: {tabColor: {argb: 'FF4527A0'}},
    views: [{state: 'frozen', ySplit: 1}],
  });

  ws.columns = [
    {header: '#', key: 'num', width: 5},
    {header: 'Title', key: 'title', width: 35},
    {header: 'Description', key: 'description', width: 55},
    {header: 'Technologies', key: 'technologies', width: 50},
    {header: 'GitHub URL', key: 'github', width: 40},
    {header: 'Live URL', key: 'live', width: 40},
  ];

  applyHeaderStyle(ws.getRow(1), 'FF4527A0');

  const localizedProjects = projects.map((p) => ({
    ...( lang === 'en' ? p.en : p.ja),
    technologies: p.technologies,
  }));

  localizedProjects.forEach((proj, idx) => {
    const row = ws.addRow({
      num: idx + 1,
      title: proj.title,
      description: proj.description,
      technologies: proj.technologies.join(', '),
    });

    row.getCell(2).font = {bold: true, color: {argb: 'FF4527A0'}};
    row.getCell(3).alignment = {wrapText: true, vertical: 'top'};
    row.getCell(4).alignment = {wrapText: true, vertical: 'top'};

    addHyperlink(row.getCell(5), proj.githubUrl);
    addHyperlink(row.getCell(6), proj.liveUrl);

    const isEven = (idx + 1) % 2 === 0;
    const bgArgb = isEven ? 'FFEDE7F6' : 'FFFFFFFF';
    const fill: ExcelJS.Fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: bgArgb},
    };
    row.eachCell((cell, colNum) => {
      if (colNum <= 4) cell.fill = fill;
    });
    row.height = 35;
  });

  ws.autoFilter = {from: 'A1', to: 'F1'};
}

function buildEducationSheet(wb: ExcelJS.Workbook): void {
  const ws = wb.addWorksheet('Education', {
    properties: {tabColor: {argb: 'FFB71C1C'}},
    views: [{state: 'frozen', ySplit: 1}],
  });

  ws.columns = [
    {header: '#', key: 'num', width: 5},
    {header: 'School (EN)', key: 'schoolEn', width: 40},
    {header: 'Department (EN)', key: 'deptEn', width: 40},
    {header: 'School (JA)', key: 'schoolJa', width: 35},
    {header: 'Department (JA)', key: 'deptJa', width: 35},
    {header: 'Start Year', key: 'start', width: 12},
    {header: 'End Year', key: 'end', width: 12},
    {header: 'Description (EN)', key: 'descEn', width: 55},
    {header: 'Description (JA)', key: 'descJa', width: 55},
  ];

  applyHeaderStyle(ws.getRow(1), 'FFB71C1C');

  educationHistory.forEach((edu, idx) => {
    const row = ws.addRow({
      num: idx + 1,
      schoolEn: edu.en.school,
      deptEn: edu.en.department,
      schoolJa: edu.ja.school,
      deptJa: edu.ja.department,
      start: edu.startYear,
      end: edu.endYear,
      descEn: edu.en.description,
      descJa: edu.ja.description,
    });

    row.eachCell((cell) => {
      cell.alignment = {wrapText: true, vertical: 'top'};
    });
    row.getCell(2).font = {bold: true};
    row.height = 45;

    const isEven = (idx + 1) % 2 === 0;
    if (isEven) {
      const fill: ExcelJS.Fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: 'FFFFEBEE'},
      };
      row.eachCell((cell) => {
        cell.fill = fill;
      });
    }
  });
}

function buildCertificationsSheet(wb: ExcelJS.Workbook): void {
  const ws = wb.addWorksheet('Certifications', {
    properties: {tabColor: {argb: 'FFE65100'}},
    views: [{state: 'frozen', ySplit: 1}],
  });

  ws.columns = [
    {header: '#', key: 'num', width: 5},
    {header: 'Certification (EN)', key: 'nameEn', width: 50},
    {header: 'Certification (JA)', key: 'nameJa', width: 45},
    {header: 'Organization', key: 'org', width: 20},
    {header: 'Date', key: 'date', width: 14},
    {header: 'Verify Link', key: 'verify', width: 45},
  ];

  applyHeaderStyle(ws.getRow(1), 'FFE65100');

  certifications.forEach((cert, idx) => {
    const row = ws.addRow({
      num: cert.id,
      nameEn: cert.en.name,
      nameJa: cert.ja.name,
      org: cert.organization,
      date: cert.date,
    });

    addHyperlink(row.getCell(6), cert.verifyLink, cert.en.name);

    const isEven = (idx + 1) % 2 === 0;
    if (isEven) {
      const fill: ExcelJS.Fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: 'FFFFF3E0'},
      };
      ['1', '2', '3', '4', '5'].forEach((_, ci) => {
        row.getCell(ci + 1).fill = fill;
      });
    }
    row.height = 18;
  });

  ws.autoFilter = {from: 'A1', to: 'F1'};

  // Org summary
  const orgMap: Record<string, number> = {};
  for (const cert of certifications) {
    orgMap[cert.organization] = (orgMap[cert.organization] ?? 0) + 1;
  }
  const summaryStart = certifications.length + 3;
  const orgHeader = ws.getRow(summaryStart);
  orgHeader.getCell(8).value = 'Organization';
  orgHeader.getCell(9).value = 'Count';
  applyHeaderStyle(orgHeader, 'FF37474F');

  Object.entries(orgMap)
    .sort((a, b) => b[1] - a[1])
    .forEach(([org, count], i) => {
      const r = ws.getRow(summaryStart + 1 + i);
      r.getCell(8).value = org;
      r.getCell(9).value = count;
      r.height = 16;
    });
}

function buildStrongPointsSheet(wb: ExcelJS.Workbook): void {
  const ws = wb.addWorksheet('Strong Points', {
    properties: {tabColor: {argb: 'FF00695C'}},
    views: [{state: 'frozen', ySplit: 1}],
  });

  ws.columns = [
    {header: '#', key: 'num', width: 5},
    {header: 'Size', key: 'size', width: 10},
    {header: 'Question (EN)', key: 'questionEn', width: 40},
    {header: 'Answer (EN)', key: 'answerEn', width: 70},
    {header: 'Question (JA)', key: 'questionJa', width: 40},
    {header: 'Answer (JA)', key: 'answerJa', width: 70},
  ];

  applyHeaderStyle(ws.getRow(1), 'FF00695C');

  const sizeColors: Record<string, string> = {
    large: 'FFE0F7FA',
    medium: 'FFF1F8E9',
    small: 'FFFFFFFF',
  };

  strongPoint.forEach((sp, idx) => {
    const row = ws.addRow({
      num: idx + 1,
      size: sp.size,
      questionEn: sp.en.question,
      answerEn: sp.en.answer.trim(),
      questionJa: sp.ja.question,
      answerJa: sp.ja.answer.trim(),
    });

    const fillArgb = sizeColors[sp.size] ?? 'FFFFFFFF';
    const fill: ExcelJS.Fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {argb: fillArgb},
    };
    row.eachCell((cell) => {
      cell.fill = fill;
      cell.alignment = {wrapText: true, vertical: 'top'};
    });
    row.getCell(3).font = {bold: true};
    row.getCell(5).font = {bold: true};
    row.height = 80;
  });
}

// ── Main export ───────────────────────────────────────────────────────────────

export const generatePortfolioExcel = async (
  options: ExcelGenerationOptions
): Promise<Buffer> => {
  const {lang} = options;

  const wb = new ExcelJS.Workbook();
  wb.creator = profile.name;
  wb.created = new Date();
  wb.modified = new Date();

  buildProfileSheet(wb, lang);
  buildSkillsSheet(wb);
  buildExperienceSheet(wb, lang);
  buildProjectsSheet(wb, lang);
  buildEducationSheet(wb);
  buildCertificationsSheet(wb);
  buildStrongPointsSheet(wb);

  const buffer = await wb.xlsx.writeBuffer();
  return Buffer.from(buffer);
};
