import {LocalizedProfileData} from './profile.js';
import {Project} from './projectItem.js';
import {WorkExperience} from './workHistory.js';
import {EducationHistory} from './educationHistory.js';
import {CertificationItem} from './certificationItem.js';
import {StrongPoint} from './strongPoint.js';

export interface BasePDFOptions {
  lang: string;
  profileData: LocalizedProfileData;
}

export interface StandardPDFOptions extends BasePDFOptions {
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

export interface CompactPDFOptions extends BasePDFOptions {
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

export interface ExecutivePDFOptions extends BasePDFOptions {
  localizedExperience: WorkExperience[];
}

export interface TechnicalPDFOptions extends BasePDFOptions {
  localizedProjects: Project[];
}

export interface AcademicPDFOptions extends BasePDFOptions {
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

export interface ModernPDFOptions extends BasePDFOptions {
  _localizedProjects: Project[];
  localizedExperience: WorkExperience[];
  _localizedCertifications: CertificationItem[];
}
