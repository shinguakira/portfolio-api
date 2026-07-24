export type SkillItem = {
  name: string;
  category: string;
  years: string;
  proficiency?: string; // onBusiness or self-study
  picture?: string; // url for skill picture
  pictureColor?: string; // color for skill picture
  // Internal filter flag. `false` excludes the skill from API responses;
  // undefined/`true` keeps it. Stripped before responses so the payload shape
  // stays identical for consumers (they never see this field).
  enabled?: boolean;
};
