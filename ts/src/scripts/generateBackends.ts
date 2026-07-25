/**
 * Generate the Go / Rust / Haskell backend data files from the TypeScript
 * source of truth (TS is canonical; the other implementations are clones).
 *
 * Currently covers skills (Skills + OtherSkills) and projects (JA + EN).
 * Run from the ts/ workspace: `npm run gen:backends`.
 */
import {writeFileSync} from 'fs';
import {skills, otherSkills, enabledSkills, projects} from '../constants/index.js';

// JSON.stringify yields a double-quoted, escaped literal (\n, \", non-ASCII
// left as literal UTF-8) that is valid in Go, Rust and Haskell string syntax.
const q = (s: string): string => JSON.stringify(s);

type Skill = {
  name: string;
  category: string;
  years: string;
  proficiency?: string;
  picture?: string;
  pictureColor?: string;
};
type Proj = {
  technologies: string[];
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
};

const mainSkills = enabledSkills(skills) as Skill[];
const other = enabledSkills(otherSkills) as Skill[];
const projJa: Proj[] = projects.map((p) => ({technologies: p.technologies, ...p.ja}));
const projEn: Proj[] = projects.map((p) => ({technologies: p.technologies, ...p.en}));

// ─── Go ──────────────────────────────────────────────────────────────────────
const goSkill = (s: Skill): string =>
  `\t{Name: ${q(s.name)}, Years: ${q(s.years)}, Category: ${q(s.category)}, ` +
  `Proficiency: ${q(s.proficiency ?? '')}, Picture: ${q(s.picture ?? '')}, ` +
  `PictureColor: ${q(s.pictureColor ?? '')}},`;
const goProj = (p: Proj): string =>
  `\t{\n\t\tTitle:        ${q(p.title)},\n\t\tDescription:  ${q(p.description)},\n` +
  `\t\tImage:        ${q(p.image)},\n\t\tTechnologies: []string{${p.technologies
    .map(q)
    .join(', ')}},\n\t\tGithubURL:    ${q(p.githubUrl)},\n\t\tLiveURL:      ${q(
    p.liveUrl
  )},\n\t},`;
const goSkillFile =
  `package data\n\nimport "github.com/shinguakira/portfolio-api-go/model"\n\n` +
  `var Skills = []model.SkillItem{\n${mainSkills.map(goSkill).join('\n')}\n}\n\n` +
  `var OtherSkills = []model.SkillItem{\n${other.map(goSkill).join('\n')}\n}\n`;
const goProjFile =
  `package data\n\nimport "github.com/shinguakira/portfolio-api-go/model"\n\n` +
  `var ProjectsJA = []model.Project{\n${projJa.map(goProj).join('\n')}\n}\n\n` +
  `var ProjectsEN = []model.Project{\n${projEn.map(goProj).join('\n')}\n}\n`;

// ─── Rust ────────────────────────────────────────────────────────────────────
const rOpt = (v?: string): string => (v == null ? 'None' : `Some(${q(v)}.to_string())`);
const rustSkill = (s: Skill): string =>
  `        SkillItem { name: ${q(s.name)}.to_string(), years: ${q(
    s.years
  )}.to_string(), category: ${q(s.category)}.to_string(), proficiency: ${rOpt(
    s.proficiency
  )}, picture: ${rOpt(s.picture)}, picture_color: ${rOpt(s.pictureColor)} },`;
const rustProj = (p: Proj): string =>
  `        Project {\n            title: ${q(p.title)}.to_string(),\n` +
  `            description: ${q(p.description)}.to_string(),\n` +
  `            image: ${q(p.image)}.to_string(),\n` +
  `            technologies: vec![${p.technologies
    .map((t) => `${q(t)}.to_string()`)
    .join(', ')}],\n` +
  `            github_url: ${q(p.githubUrl)}.to_string(),\n` +
  `            live_url: ${q(p.liveUrl)}.to_string(),\n        },`;
const rustSkillFile =
  `use lazy_static::lazy_static;\nuse crate::model::skill::SkillItem;\n\nlazy_static! {\n` +
  `    pub static ref SKILLS: Vec<SkillItem> = vec![\n${mainSkills
    .map(rustSkill)
    .join('\n')}\n    ];\n` +
  `    pub static ref OTHER_SKILLS: Vec<SkillItem> = vec![\n${other
    .map(rustSkill)
    .join('\n')}\n    ];\n}\n`;
const rustProjFile =
  `use lazy_static::lazy_static;\nuse crate::model::project::Project;\n\nlazy_static! {\n` +
  `    pub static ref PROJECTS_JA: Vec<Project> = vec![\n${projJa
    .map(rustProj)
    .join('\n')}\n    ];\n` +
  `    pub static ref PROJECTS_EN: Vec<Project> = vec![\n${projEn
    .map(rustProj)
    .join('\n')}\n    ];\n}\n`;

// ─── Haskell ─────────────────────────────────────────────────────────────────
const hOpt = (v?: string): string => (v == null ? 'Nothing' : `Just ${q(v)}`);
const hsSkill = (s: Skill): string =>
  `SkillItem\n      { skName         = ${q(s.name)}\n` +
  `      , skCategory     = ${q(s.category)}\n      , skYears        = ${q(s.years)}\n` +
  `      , skProficiency  = ${hOpt(s.proficiency)}\n      , skPicture      = ${hOpt(
    s.picture
  )}\n      , skPictureColor = ${hOpt(s.pictureColor)}\n      }`;
const hsProj = (p: Proj): string =>
  `Project\n      { projTitle        = ${q(p.title)}\n` +
  `      , projDescription  = ${q(p.description)}\n      , projImage        = ${q(
    p.image
  )}\n      , projTechnologies = [${p.technologies.map(q).join(', ')}]\n` +
  `      , projGithubUrl    = ${q(p.githubUrl)}\n      , projLiveUrl      = ${q(
    p.liveUrl
  )}\n      }`;
const hsList = (items: string[]): string => `  [ ${items.join('\n  , ')}\n  ]`;
const hsSkillFile =
  `module Data.Skill where\n\nimport Data.Text (Text)\nimport Model.Skill (SkillItem(..))\n\n` +
  `skills :: [SkillItem]\nskills =\n${hsList(mainSkills.map(hsSkill))}\n\n` +
  `otherSkills :: [SkillItem]\notherSkills =\n${hsList(other.map(hsSkill))}\n`;
const hsProjFile =
  `{-# LANGUAGE OverloadedStrings #-}\n\nmodule Data.Project where\n\n` +
  `import Model.Project (Project(..))\n\n` +
  `projectsJA :: [Project]\nprojectsJA =\n${hsList(projJa.map(hsProj))}\n\n` +
  `projectsEN :: [Project]\nprojectsEN =\n${hsList(projEn.map(hsProj))}\n`;

const files: [string, string][] = [
  ['../go/data/skill.go', goSkillFile],
  ['../go/data/project.go', goProjFile],
  ['../rust/src/data/skill.rs', rustSkillFile],
  ['../rust/src/data/project.rs', rustProjFile],
  ['../haskell/src/Data/Skill.hs', hsSkillFile],
  ['../haskell/src/Data/Project.hs', hsProjFile],
];
for (const [path, content] of files) {
  writeFileSync(path, content);
  process.stdout.write(`wrote ${path}\n`);
}
process.stdout.write(
  `skills: ${mainSkills.length}+${other.length}, projects: ${projJa.length}\n`
);
