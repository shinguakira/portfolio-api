/**
 * Generate the Go / Rust / Haskell backend data files from the TypeScript
 * source of truth (TS is canonical; the other implementations are clones).
 *
 * Covers: skills, projects, work experience, education, certifications,
 * changelogs, FAQs, strong points, profile, contact, links.
 * Run from the ts/ workspace: `npm run gen:backends`.
 * After running, `gofmt -w` / `rustfmt` are recommended for the Go/Rust files.
 */
import {writeFileSync} from 'fs';
import {
  skillDefsForCodegen,
  enabledSkills,
  projects,
  profile,
  workExperiences_ja,
  workExperiences_en,
  educationHistory,
  contact,
  certifications,
  changelogs,
  faqs,
  links,
  strongPoint,
} from '../constants/index.js';

// JSON.stringify yields a double-quoted, escaped literal (\n, \", non-ASCII left
// as literal UTF-8) that is valid Go/Rust/Haskell string syntax.
const q = (s: string): string => JSON.stringify(s);
const num = (n: number): string => String(n);

// ─── localized views mirroring the controllers ───────────────────────────────
// Skill `years` may be an `@since:YYYY-MM` marker rather than a fixed string.
// It is emitted verbatim and each backend's hand-written duration helper
// resolves it per request, so no clone ever freezes a computed duration.
const mainSkills = enabledSkills(skillDefsForCodegen.skills);
const other = enabledSkills(skillDefsForCodegen.otherSkills);
const projJa = projects.map((p) => ({technologies: p.technologies, ...p.ja}));
const projEn = projects.map((p) => ({technologies: p.technologies, ...p.en}));
const profJa = {
  name: profile.name,
  location: profile.location,
  avatarUrl: profile.avatarUrl,
  socialLinks: profile.socialLinks,
  ...profile.ja,
};
const profEn = {
  name: profile.name,
  location: profile.location,
  avatarUrl: profile.avatarUrl,
  socialLinks: profile.socialLinks,
  ...profile.en,
};
const eduJa = educationHistory.map((e) => ({
  startYear: e.startYear,
  endYear: e.endYear,
  ...e.ja,
}));
const eduEn = educationHistory.map((e) => ({
  startYear: e.startYear,
  endYear: e.endYear,
  ...e.en,
}));
const certJa = certifications.map((c) => ({
  id: c.id,
  name: c.ja.name,
  organization: c.organization,
  date: c.date,
  verifyLink: c.verifyLink,
}));
const certEn = certifications.map((c) => ({
  id: c.id,
  name: c.en.name,
  organization: c.organization,
  date: c.date,
  verifyLink: c.verifyLink,
}));
type Ch = {type: string; description: string};
const clJa = changelogs.map((c) => ({
  version: c.version,
  date: c.date,
  changes: c.changes.map((ch): Ch => ({type: ch.type, description: ch.ja.description})),
}));
const clEn = changelogs.map((c) => ({
  version: c.version,
  date: c.date,
  changes: c.changes.map((ch): Ch => ({type: ch.type, description: ch.en.description})),
}));
const faqJa = faqs.map((f) => ({
  question: f.ja.question,
  answer: f.ja.answer,
  size: f.size,
  category: f.category,
}));
const faqEn = faqs.map((f) => ({
  question: f.en.question,
  answer: f.en.answer,
  size: f.size,
  category: f.category,
}));
const spJa = strongPoint.map((s) => ({size: s.size, ...s.ja}));
const spEn = strongPoint.map((s) => ({size: s.size, ...s.en}));

/* eslint-disable @typescript-eslint/no-explicit-any */
type Any = any;

// ─── Go ──────────────────────────────────────────────────────────────────────
{
  const arr = (a: string[]): string => `[]string{${a.map(q).join(', ')}}`;
  const sk = (s: Any): string =>
    `\t{Name: ${q(s.name)}, Years: ${q(s.years)}, Category: ${q(s.category)}, ` +
    `Proficiency: ${q(s.proficiency ?? '')}, Picture: ${q(s.picture ?? '')}, ` +
    `PictureColor: ${q(s.pictureColor ?? '')}},`;
  const pr = (p: Any): string =>
    `\t{\n\t\tTitle: ${q(p.title)},\n\t\tDescription: ${q(p.description)},\n` +
    `\t\tImage: ${q(p.image)},\n\t\tTechnologies: ${arr(p.technologies)},\n` +
    `\t\tGithubURL: ${q(p.githubUrl)},\n\t\tLiveURL: ${q(p.liveUrl)},\n\t},`;
  const ex = (e: Any): string =>
    `\t{\n\t\tCompany: ${q(e.company)},\n\t\tProjectOverview: ${q(e.projectOverview)},\n` +
    `\t\tPeriod: ${q(e.period)},\n\t\tTeamSize: ${q(e.teamSize)},\n\t\tRole: ${q(e.role)},\n` +
    `\t\tManMonth: ${q(e.manMonth)},\n\t\tDescription: ${arr(e.description)},\n` +
    `\t\tArchivement: ${arr(e.archivement)},\n\t\tTechnologies: ${arr(e.technologies)},\n\t},`;
  const ed = (e: Any): string =>
    `\t{StartYear: ${q(e.startYear)}, EndYear: ${q(e.endYear)}, School: ${q(e.school)}, ` +
    `Department: ${q(e.department)}, Description: ${q(e.description)}},`;
  const ct = (c: Any): string =>
    `\t{ID: ${num(c.id)}, Name: ${q(c.name)}, Organization: ${q(c.organization)}, ` +
    `Date: ${q(c.date)}, VerifyLink: ${q(c.verifyLink)}},`;
  const cl = (c: Any): string =>
    `\t{\n\t\tVersion: ${q(c.version)},\n\t\tDate: ${q(c.date)},\n\t\tChanges: []model.ChangelogChange{\n` +
    c.changes
      .map((h: Ch) => `\t\t\t{Type: ${q(h.type)}, Description: ${q(h.description)}},`)
      .join('\n') +
    `\n\t\t},\n\t},`;
  const fq = (f: Any): string =>
    `\t{Question: ${q(f.question)}, Answer: ${q(f.answer)}, Size: ${q(f.size)}, Category: ${q(
      f.category
    )}},`;
  const sp = (s: Any): string =>
    `\t{Size: ${q(s.size)}, Question: ${q(s.question)}, Answer: ${q(s.answer)}},`;
  const prof = (p: Any): string =>
    `model.ProfileResponse{\n\tName: ${q(p.name)},\n\tLocation: ${q(p.location)},\n` +
    `\tAvatarURL: ${q(p.avatarUrl)},\n\tSocialLinks: []model.SocialLink{\n` +
    p.socialLinks
      .map(
        (l: Any) => `\t\t{Platform: ${q(l.platform)}, URL: ${q(l.url)}, Icon: ${q(l.icon)}},`
      )
      .join('\n') +
    `\n\t},\n\tTitle: ${q(p.title)},\n\tSummary: ${q(p.summary)},\n\tBio: ${q(p.bio)},\n}`;
  const hdr = 'package data\n\nimport "github.com/shinguakira/portfolio-api-go/model"\n\n';
  const list = (name: string, typ: string, items: string[]): string =>
    `var ${name} = []model.${typ}{\n${items.join('\n')}\n}\n`;
  writeFileSync(
    '../go/data/skill.go',
    hdr + list('skillDefs', 'SkillItem', mainSkills.map(sk)) + '\n' + list('otherSkillDefs', 'SkillItem', other.map(sk))
  );
  writeFileSync(
    '../go/data/project.go',
    hdr + list('ProjectsJA', 'Project', projJa.map(pr)) + '\n' + list('ProjectsEN', 'Project', projEn.map(pr))
  );
  writeFileSync(
    '../go/data/experience.go',
    hdr +
      list('WorkExperiencesJA', 'WorkExperience', workExperiences_ja.map(ex)) +
      '\n' +
      list('WorkExperiencesEN', 'WorkExperience', workExperiences_en.map(ex))
  );
  writeFileSync(
    '../go/data/education.go',
    hdr + list('EducationJA', 'EducationHistory', eduJa.map(ed)) + '\n' + list('EducationEN', 'EducationHistory', eduEn.map(ed))
  );
  writeFileSync(
    '../go/data/certification.go',
    hdr + list('CertificationsJA', 'CertificationItem', certJa.map(ct)) + '\n' + list('CertificationsEN', 'CertificationItem', certEn.map(ct))
  );
  writeFileSync(
    '../go/data/changelog.go',
    hdr + list('ChangelogsJA', 'ChangelogItem', clJa.map(cl)) + '\n' + list('ChangelogsEN', 'ChangelogItem', clEn.map(cl))
  );
  writeFileSync(
    '../go/data/faq.go',
    hdr + list('FaqsJA', 'Faq', faqJa.map(fq)) + '\n' + list('FaqsEN', 'Faq', faqEn.map(fq))
  );
  writeFileSync(
    '../go/data/strong_point.go',
    hdr + list('StrongPointsJA', 'StrongPoint', spJa.map(sp)) + '\n' + list('StrongPointsEN', 'StrongPoint', spEn.map(sp))
  );
  writeFileSync(
    '../go/data/profile.go',
    hdr + `var ProfileJA = ${prof(profJa)}\n\nvar ProfileEN = ${prof(profEn)}\n`
  );
  writeFileSync(
    '../go/data/contact.go',
    hdr +
      `var ContactData = model.Contact{\n\tEmail: ${q(contact.email)},\n\tPhone: ${q(
        contact.phone
      )},\n\tAddress: ${q(contact.address)},\n\tSocialMedia: model.SocialMedia{Github: ${q(
        contact.socialMedia.github
      )}},\n\tPreferredMethod: ${q(contact.preferredMethod)},\n\tAvailableFor: ${arr(
        contact.availableFor
      )},\n\tResponse: model.ContactResponse{TimeFrame: ${q(
        contact.response.timeFrame
      )}, Languages: ${arr(contact.response.languages)}},\n}\n`
  );
  writeFileSync(
    '../go/data/links.go',
    hdr +
      `var LinksData = model.Links{\n\tCreadlyLink: ${q(
        links.creadlyLink
      )},\n\tRestaurantAroundStationLink: ${q(
        links.restaurantAroundStationLink
      )},\n\tAdvancedSearchYoutubeLink: ${q(links.advancedSearchYoutubeLink)},\n}\n`
  );
}

// ─── Rust ────────────────────────────────────────────────────────────────────
{
  const s = (v: string): string => `${q(v)}.to_string()`;
  const opt = (v?: string): string => (v == null ? 'None' : `Some(${s(v)})`);
  const arr = (a: string[]): string => `vec![${a.map(s).join(', ')}]`;
  const sk = (x: Any): string =>
    `        SkillItem { name: ${s(x.name)}, years: ${s(x.years)}, category: ${s(
      x.category
    )}, proficiency: ${opt(x.proficiency)}, picture: ${opt(x.picture)}, picture_color: ${opt(
      x.pictureColor
    )} },`;
  const pr = (p: Any): string =>
    `        Project {\n            title: ${s(p.title)},\n            description: ${s(
      p.description
    )},\n            image: ${s(p.image)},\n            technologies: ${arr(
      p.technologies
    )},\n            github_url: ${s(p.githubUrl)},\n            live_url: ${s(
      p.liveUrl
    )},\n        },`;
  const ex = (e: Any): string =>
    `        WorkExperience {\n            company: ${s(e.company)},\n            project_overview: ${s(
      e.projectOverview
    )},\n            period: ${s(e.period)},\n            team_size: ${s(
      e.teamSize
    )},\n            role: ${s(e.role)},\n            man_month: ${s(
      e.manMonth
    )},\n            description: ${arr(e.description)},\n            archivement: ${arr(
      e.archivement
    )},\n            technologies: ${arr(e.technologies)},\n        },`;
  const ed = (e: Any): string =>
    `        EducationHistory { start_year: ${s(e.startYear)}, end_year: ${s(
      e.endYear
    )}, school: ${s(e.school)}, department: ${s(e.department)}, description: ${s(
      e.description
    )} },`;
  const ct = (c: Any): string =>
    `        CertificationItem { id: ${num(c.id)}, name: ${s(c.name)}, organization: ${s(
      c.organization
    )}, date: ${s(c.date)}, verify_link: ${s(c.verifyLink)} },`;
  const cl = (c: Any): string =>
    `        ChangelogItem {\n            version: ${s(c.version)},\n            date: ${s(
      c.date
    )},\n            changes: vec![\n` +
    c.changes
      .map(
        (h: Ch) =>
          `                ChangelogChange { change_type: ${s(h.type)}, description: ${s(
            h.description
          )} },`
      )
      .join('\n') +
    `\n            ],\n        },`;
  const fq = (f: Any): string =>
    `        Faq { question: ${s(f.question)}, answer: ${s(f.answer)}, size: ${s(
      f.size
    )}, category: ${s(f.category)} },`;
  const sp = (x: Any): string =>
    `        StrongPoint { size: ${s(x.size)}, question: ${s(x.question)}, answer: ${s(
      x.answer
    )} },`;
  const prof = (p: Any): string =>
    `ProfileResponse {\n        name: ${s(p.name)},\n        location: ${s(
      p.location
    )},\n        avatar_url: ${s(p.avatarUrl)},\n        social_links: vec![\n` +
    p.socialLinks
      .map(
        (l: Any) =>
          `            SocialLink { platform: ${s(l.platform)}, url: ${s(l.url)}, icon: ${s(
            l.icon
          )} },`
      )
      .join('\n') +
    `\n        ],\n        title: ${s(p.title)},\n        summary: ${s(
      p.summary
    )},\n        bio: ${s(p.bio)},\n    }`;
  const ls = (name: string, typ: string, items: string[]): string =>
    `    pub static ref ${name}: Vec<${typ}> = vec![\n${items.join('\n')}\n    ];\n`;
  const file = (imports: string, body: string): string =>
    `use lazy_static::lazy_static;\n${imports}\n\nlazy_static! {\n${body}}\n`;
  writeFileSync(
    '../rust/src/data/skill.rs',
    file('use crate::model::skill::SkillItem;', ls('SKILL_DEFS', 'SkillItem', mainSkills.map(sk)) + ls('OTHER_SKILL_DEFS', 'SkillItem', other.map(sk)))
  );
  writeFileSync(
    '../rust/src/data/project.rs',
    file('use crate::model::project::Project;', ls('PROJECTS_JA', 'Project', projJa.map(pr)) + ls('PROJECTS_EN', 'Project', projEn.map(pr)))
  );
  writeFileSync(
    '../rust/src/data/experience.rs',
    file('use crate::model::experience::WorkExperience;', ls('WORK_EXPERIENCES_JA', 'WorkExperience', workExperiences_ja.map(ex)) + ls('WORK_EXPERIENCES_EN', 'WorkExperience', workExperiences_en.map(ex)))
  );
  writeFileSync(
    '../rust/src/data/education.rs',
    file('use crate::model::education::EducationHistory;', ls('EDUCATION_JA', 'EducationHistory', eduJa.map(ed)) + ls('EDUCATION_EN', 'EducationHistory', eduEn.map(ed)))
  );
  writeFileSync(
    '../rust/src/data/certification.rs',
    file('use crate::model::certification::CertificationItem;', ls('CERTIFICATIONS_JA', 'CertificationItem', certJa.map(ct)) + ls('CERTIFICATIONS_EN', 'CertificationItem', certEn.map(ct)))
  );
  writeFileSync(
    '../rust/src/data/changelog.rs',
    file('use crate::model::changelog::{ChangelogItem, ChangelogChange};', ls('CHANGELOGS_JA', 'ChangelogItem', clJa.map(cl)) + ls('CHANGELOGS_EN', 'ChangelogItem', clEn.map(cl)))
  );
  writeFileSync(
    '../rust/src/data/faq.rs',
    file('use crate::model::faq::Faq;', ls('FAQS_JA', 'Faq', faqJa.map(fq)) + ls('FAQS_EN', 'Faq', faqEn.map(fq)))
  );
  writeFileSync(
    '../rust/src/data/strong_point.rs',
    file('use crate::model::strong_point::StrongPoint;', ls('STRONG_POINTS_JA', 'StrongPoint', spJa.map(sp)) + ls('STRONG_POINTS_EN', 'StrongPoint', spEn.map(sp)))
  );
  writeFileSync(
    '../rust/src/data/profile.rs',
    file(
      'use crate::model::profile::{ProfileResponse, SocialLink};',
      `    pub static ref PROFILE_JA: ProfileResponse = ${prof(profJa)};\n    pub static ref PROFILE_EN: ProfileResponse = ${prof(profEn)};\n`
    )
  );
  writeFileSync(
    '../rust/src/data/contact.rs',
    file(
      'use crate::model::contact::{Contact, SocialMedia, ContactResponseInfo};',
      `    pub static ref CONTACT_DATA: Contact = Contact {\n        email: ${s(
        contact.email
      )},\n        phone: ${s(contact.phone)},\n        address: ${s(
        contact.address
      )},\n        social_media: SocialMedia { github: ${s(
        contact.socialMedia.github
      )} },\n        preferred_method: ${s(
        contact.preferredMethod
      )},\n        available_for: ${arr(
        contact.availableFor
      )},\n        response: ContactResponseInfo { time_frame: ${s(
        contact.response.timeFrame
      )}, languages: ${arr(contact.response.languages)} },\n    };\n`
    )
  );
  writeFileSync(
    '../rust/src/data/links.rs',
    file(
      'use crate::model::links::Links;',
      `    pub static ref LINKS_DATA: Links = Links {\n        creadly_link: ${s(
        links.creadlyLink
      )},\n        restaurant_around_station_link: ${s(
        links.restaurantAroundStationLink
      )},\n        advanced_search_youtube_link: ${s(
        links.advancedSearchYoutubeLink
      )},\n    };\n`
    )
  );
}

// ─── Haskell ─────────────────────────────────────────────────────────────────
{
  const opt = (v?: string): string => (v == null ? 'Nothing' : `Just ${q(v)}`);
  const arr = (a: string[]): string => `[${a.map(q).join(', ')}]`;
  const rec = (typ: string, fields: [string, string][]): string =>
    `${typ}\n      { ` +
    fields.map(([k, v]) => `${k} = ${v}`).join('\n      , ') +
    `\n      }`;
  const list = (items: string[]): string => `  [ ${items.join('\n  , ')}\n  ]`;
  const decl = (name: string, typ: string, items: string[]): string =>
    `${name} :: [${typ}]\n${name} =\n${list(items)}\n`;

  const sk = (x: Any): string =>
    rec('SkillItem', [
      ['skName', q(x.name)],
      ['skCategory', q(x.category)],
      ['skYears', q(x.years)],
      ['skProficiency', opt(x.proficiency)],
      ['skPicture', opt(x.picture)],
      ['skPictureColor', opt(x.pictureColor)],
    ]);
  const pr = (p: Any): string =>
    rec('Project', [
      ['projTitle', q(p.title)],
      ['projDescription', q(p.description)],
      ['projImage', q(p.image)],
      ['projTechnologies', arr(p.technologies)],
      ['projGithubUrl', q(p.githubUrl)],
      ['projLiveUrl', q(p.liveUrl)],
    ]);
  const ex = (e: Any): string =>
    rec('WorkExperience', [
      ['weCompany', q(e.company)],
      ['weProjectOverview', q(e.projectOverview)],
      ['wePeriod', q(e.period)],
      ['weTeamSize', q(e.teamSize)],
      ['weRole', q(e.role)],
      ['weManMonth', q(e.manMonth)],
      ['weDescription', arr(e.description)],
      ['weArchivement', arr(e.archivement)],
      ['weTechnologies', arr(e.technologies)],
    ]);
  const ed = (e: Any): string =>
    rec('EducationHistory', [
      ['eduStartYear', q(e.startYear)],
      ['eduEndYear', q(e.endYear)],
      ['eduSchool', q(e.school)],
      ['eduDepartment', q(e.department)],
      ['eduDescription', q(e.description)],
    ]);
  const ct = (c: Any): string =>
    rec('CertificationItem', [
      ['certId', num(c.id)],
      ['certName', q(c.name)],
      ['certOrganization', q(c.organization)],
      ['certDate', q(c.date)],
      ['certVerifyLink', q(c.verifyLink)],
    ]);
  const chg = (h: Ch): string =>
    `ChangelogChange { ccType = ${q(h.type)}, ccDescription = ${q(h.description)} }`;
  const cl = (c: Any): string =>
    rec('ChangelogItem', [
      ['clVersion', q(c.version)],
      ['clDate', q(c.date)],
      ['clChanges', `[ ${c.changes.map(chg).join('\n          , ')} ]`],
    ]);
  const fq = (f: Any): string =>
    rec('Faq', [
      ['faqQuestion', q(f.question)],
      ['faqAnswer', q(f.answer)],
      ['faqSize', q(f.size)],
      ['faqCategory', q(f.category)],
    ]);
  const sp = (x: Any): string =>
    rec('StrongPoint', [
      ['spSize', q(x.size)],
      ['spQuestion', q(x.question)],
      ['spAnswer', q(x.answer)],
    ]);
  const socialLink = (l: Any): string =>
    `SocialLink { slPlatform = ${q(l.platform)}, slUrl = ${q(l.url)}, slIcon = ${q(l.icon)} }`;
  const prof = (name: string, p: Any): string =>
    `${name} :: ProfileResponse\n${name} =\n  ` +
    rec('ProfileResponse', [
      ['prName', q(p.name)],
      ['prLocation', q(p.location)],
      ['prAvatarUrl', q(p.avatarUrl)],
      ['prSocialLinks', `[ ${p.socialLinks.map(socialLink).join('\n      , ')} ]`],
      ['prTitle', q(p.title)],
      ['prSummary', q(p.summary)],
      ['prBio', q(p.bio)],
    ]) +
    '\n';

  writeFileSync(
    '../haskell/src/Data/Skill.hs',
    `module Data.Skill where\n\nimport Data.Text (Text)\nimport Model.Skill (SkillItem(..))\n\n` +
      decl('skillDefs', 'SkillItem', mainSkills.map(sk)) +
      '\n' +
      decl('otherSkillDefs', 'SkillItem', other.map(sk))
  );
  writeFileSync(
    '../haskell/src/Data/Project.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Project where\n\nimport Model.Project (Project(..))\n\n` +
      decl('projectsJA', 'Project', projJa.map(pr)) +
      '\n' +
      decl('projectsEN', 'Project', projEn.map(pr))
  );
  writeFileSync(
    '../haskell/src/Data/Experience.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Experience where\n\nimport Model.Experience (WorkExperience(..))\n\n` +
      decl('workExperiencesJA', 'WorkExperience', workExperiences_ja.map(ex)) +
      '\n' +
      decl('workExperiencesEN', 'WorkExperience', workExperiences_en.map(ex))
  );
  writeFileSync(
    '../haskell/src/Data/Education.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Education where\n\nimport Model.Education (EducationHistory(..))\n\n` +
      decl('educationJA', 'EducationHistory', eduJa.map(ed)) +
      '\n' +
      decl('educationEN', 'EducationHistory', eduEn.map(ed))
  );
  writeFileSync(
    '../haskell/src/Data/Certification.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Certification where\n\nimport Model.Certification (CertificationItem(..))\n\n` +
      decl('certificationsJA', 'CertificationItem', certJa.map(ct)) +
      '\n' +
      decl('certificationsEN', 'CertificationItem', certEn.map(ct))
  );
  writeFileSync(
    '../haskell/src/Data/Changelog.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Changelog where\n\nimport Model.Changelog (ChangelogItem(..), ChangelogChange(..))\n\n` +
      decl('changelogsJA', 'ChangelogItem', clJa.map(cl)) +
      '\n' +
      decl('changelogsEN', 'ChangelogItem', clEn.map(cl))
  );
  writeFileSync(
    '../haskell/src/Data/Faq.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Faq where\n\nimport Model.Faq (Faq(..))\n\n` +
      decl('faqsJA', 'Faq', faqJa.map(fq)) +
      '\n' +
      decl('faqsEN', 'Faq', faqEn.map(fq))
  );
  writeFileSync(
    '../haskell/src/Data/StrongPoint.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.StrongPoint where\n\nimport Model.StrongPoint (StrongPoint(..))\n\n` +
      decl('strongPointsJA', 'StrongPoint', spJa.map(sp)) +
      '\n' +
      decl('strongPointsEN', 'StrongPoint', spEn.map(sp))
  );
  writeFileSync(
    '../haskell/src/Data/Profile.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Profile where\n\nimport Model.Profile (ProfileResponse(..), SocialLink(..))\n\n` +
      prof('profileJA', profJa) +
      '\n' +
      prof('profileEN', profEn)
  );
  writeFileSync(
    '../haskell/src/Data/Contact.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Contact where\n\nimport Model.Contact (Contact(..), SocialMedia(..), ContactResponseInfo(..))\n\n` +
      `contactData :: Contact\ncontactData =\n  ` +
      rec('Contact', [
        ['ctEmail', q(contact.email)],
        ['ctPhone', q(contact.phone)],
        ['ctAddress', q(contact.address)],
        [
          'ctSocialMedia',
          `SocialMedia { smLinkedin = "", smGithub = ${q(contact.socialMedia.github)} }`,
        ],
        ['ctPreferredMethod', q(contact.preferredMethod)],
        ['ctAvailableFor', arr(contact.availableFor)],
        [
          'ctResponse',
          `ContactResponseInfo { criTimeFrame = ${q(
            contact.response.timeFrame
          )}, criLanguages = ${arr(contact.response.languages)} }`,
        ],
      ]) +
      '\n'
  );
  writeFileSync(
    '../haskell/src/Data/Links.hs',
    `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Links where\n\nimport Model.Links (Links(..))\n\n` +
      `linksData :: Links\nlinksData =\n  ` +
      rec('Links', [
        ['lnCreadlyLink', q(links.creadlyLink)],
        ['lnRestaurantAroundStationLink', q(links.restaurantAroundStationLink)],
        ['lnAdvancedSearchYoutubeLink', q(links.advancedSearchYoutubeLink)],
      ]) +
      '\n'
  );
}

process.stdout.write(
  `generated: skills ${mainSkills.length}+${other.length}, projects ${projJa.length}, ` +
    `experience ${workExperiences_ja.length}, education ${eduJa.length}, certs ${certJa.length}, ` +
    `changelogs ${clJa.length}, faqs ${faqJa.length}, strongPoints ${spJa.length}\n`
);
