import {LocalizedProfileData} from './profile.js';
import {Project} from './projectItem.js';
import {WorkExperience} from './workHistory.js';
import {EducationHistory} from './educationHistory.js';
import {CertificationItem} from './certificationItem.js';
import {StrongPoint} from './strongPoint.js';

export interface StandardPDFOptions {
  lang: string;
  profileData: LocalizedProfileData;
  localizedProjects: Project[];
  localizedExperience: WorkExperience[];
  localizedEducation: EducationHistory[];
  localizedCertifications: CertificationItem[];
  localizedStrongPoints: StrongPoint[];
  includeProjects: boolean;
  includeExperience: boolean;
  includeCertifications: boolean;
  includeEducation: boolean;
}
