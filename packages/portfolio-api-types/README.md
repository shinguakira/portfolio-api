# @shinguakira/portfolio-api-types

TypeScript types for Portfolio API responses.

## Installation

```bash
npm install @shinguakira/portfolio-api-types
```

## Usage

```typescript
import type {
  ApiResponse,
  ProfileResponse,
  ExperienceResponse,
  ProjectsResponse,
  SkillsResponse,
  EducationResponse,
  CertificationsResponse,
  FaqResponse,
  StrongPointsResponse,
  ChangelogResponse,
  ContactResponse,
  LinksResponse,
} from '@shinguakira/portfolio-api-types';

// Example: Fetch profile with type safety
async function fetchProfile(
  lang: 'en' | 'ja'
): Promise<ProfileResponse | null> {
  const response = await fetch(`/api/profile?lang=${lang}`);
  const result: ApiResponse<ProfileResponse> = await response.json();
  return result.data ?? null;
}

// Example: Fetch projects
async function fetchProjects(lang: 'en' | 'ja'): Promise<ProjectsResponse> {
  const response = await fetch(`/api/projects?lang=${lang}`);
  const result: ApiResponse<ProjectsResponse> = await response.json();
  return result.data ?? [];
}
```

## Available Types

### Response Types

| Type                     | Endpoint                  | Description                            |
| ------------------------ | ------------------------- | -------------------------------------- |
| `ProfileResponse`        | `GET /api/profile`        | Profile data with name, title, summary |
| `ExperienceResponse`     | `GET /api/experience`     | Work experience array                  |
| `ProjectsResponse`       | `GET /api/projects`       | Projects array                         |
| `SkillsResponse`         | `GET /api/skills`         | Skills array                           |
| `EducationResponse`      | `GET /api/education`      | Education history array                |
| `CertificationsResponse` | `GET /api/certifications` | Certifications array                   |
| `FaqResponse`            | `GET /api/faq`            | FAQ items array                        |
| `StrongPointsResponse`   | `GET /api/strong-points`  | Strong points array                    |
| `ChangelogResponse`      | `GET /api/changelog`      | Changelog entries array                |
| `ContactResponse`        | `GET /api/contact`        | Contact information                    |
| `LinksResponse`          | `GET /api/links`          | External links                         |

### Base Types

- `WorkExperience` - Single work experience item
- `Project` - Single project item
- `SkillItem` - Single skill item
- `EducationHistory` - Single education item
- `CertificationItem` - Single certification item
- `Faq` - Single FAQ item
- `StrongPoint` - Single strong point item
- `ChangelogItem` - Single changelog entry
- `Contact` - Contact information
- `Links` - External links
- `SocialLink` - Social media link
- `LocalizedProfileData` - Localized profile content

### Generic Wrapper

```typescript
interface ApiResponse<T> {
  message: string;
  data?: T | null;
}
```

## API Endpoints

All endpoints support `?lang=ja` or `?lang=en` query parameter for localization (defaults to Japanese).

## License

MIT
