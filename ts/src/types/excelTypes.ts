export interface ExcelGenerationOptions {
  lang: 'en' | 'ja';
}

export const CATEGORY_COLORS: Record<string, {fill: string; font: string}> = {
  Language: {fill: 'FFE8F5E9', font: 'FF1B5E20'},
  Frontend: {fill: 'FFE3F2FD', font: 'FF0D47A1'},
  Backend: {fill: 'FFFFF3E0', font: 'FFE65100'},
  API: {fill: 'FFF3E5F5', font: 'FF4A148C'},
  'State Management': {fill: 'FFE0F2F1', font: 'FF004D40'},
  ORM: {fill: 'FFFBE9E7', font: 'FFBF360C'},
  Testing: {fill: 'FFFFFDE7', font: 'FFF57F17'},
  CSS: {fill: 'FFFCE4EC', font: 'FF880E4F'},
  Database: {fill: 'FFF1F8E9', font: 'FF33691E'},
  Cloud: {fill: 'FFE8EAF6', font: 'FF1A237E'},
  Others: {fill: 'FFFAFAFA', font: 'FF424242'},
};
