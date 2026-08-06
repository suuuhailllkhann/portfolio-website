# Suhail — Data Scientist & Machine Learning Engineer

A professional, recruiter-focused personal portfolio for Suhail. The site presents experience across healthcare analytics, machine learning, data engineering, and AWS, with a dedicated case study for the Healthcare Readmission Prediction System.

## Technology stack

- Next.js App Router with TypeScript strict mode
- React Server Components by default
- Tailwind CSS 4 and custom CSS design tokens
- vinext for Cloudflare-compatible output and Sites hosting
- Vercel-compatible static assets and metadata

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Quality checks and production build

```bash
npm run lint
npm run typecheck
npm run build
```

The production output is generated in `dist/`.

## Deployment to Vercel

1. Push this repository to GitHub.
2. Import the repository at Vercel and keep the detected Next.js settings.
3. Deploy the `main` branch.
4. In the Vercel project, open **Settings → Domains**, add the custom domain, and follow the displayed DNS instructions.

No environment variables or secrets are required.

## Updating content

- Edit external URLs and the canonical domain in `config/site.ts`.
- Edit profile, experience, education, skills, articles, certification, and featured project content in `data/profile.ts`.
- Update homepage section composition in `app/page.tsx`.
- Add verified case-study findings in `app/projects/healthcare-readmission-prediction/page.tsx`.

All claims are intentionally centralized and conservatively worded. Planned writing and pending project artifacts are labeled clearly.

## Replacing the resume

Place the final PDF at:

```text
public/resume/suhail-resume.pdf
```

Keep this filename so existing navigation, hero, contact, and footer links continue to work.

## Project structure

```text
app/                Routes, global styles, SEO routes
components/         Reusable navigation and portfolio sections
config/site.ts      URLs and site-wide metadata
data/profile.ts     Editable professional content
public/             Social preview, favicon, and resume
```

## Accessibility

The site uses semantic sections, correct heading hierarchy, a skip link, keyboard-accessible controls, visible focus states, descriptive labels, high-contrast design tokens, and reduced-motion support. Dark and light themes are available without requiring a third-party library.

## Performance

The implementation favors server components, has no animation library, uses optimized local font loading, and includes only the small client-side scripts required for navigation and theme preference. Layouts reserve stable space and avoid decorative image payloads outside the social sharing card.

## Analytics

Vercel Analytics can be added later by installing `@vercel/analytics` and mounting its `Analytics` component in `app/layout.tsx`. No tracking, cookies, session recording, or advertising scripts are included.
