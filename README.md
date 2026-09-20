# Suryakala Beesetti — Portfolio

React 19 + Vite + TypeScript + Tailwind 4. Clean, professional, recruiter-friendly design — dark by default
with a polished light mode toggle.

## Quick start

```bash
npm install
npm run dev
```

## Customize

| What | Where |
| --- | --- |
| Name, bio, projects, skills, experience, education, certs | `src/data/portfolio.ts` |
| Colors, fonts, corner radius | design tokens (`@theme`) at the top of `src/index.css` — see the `--color-accent` comment to swap the accent color |
| Default theme (dark/light) | `src/context/ThemeContext.tsx` and the pre-paint script in `index.html` |
| Resume PDF | drop the file in `public/` and update `profile.resumeUrl` |
| Contact form (EmailJS) | see the comment block above `emailjsConfig` in `src/data/portfolio.ts` |
| Favicon | `public/favicon.svg` |
| Project links (GitHub / live demo) | `githubUrl` / `demoUrl` on each entry in `projects` (`src/data/portfolio.ts`) — the "Live Demo" button only renders when `demoUrl` is set |
| Project card summary | `description` on each project — keep it to 1-2 sentences; the card clamps it to 3 lines so all project cards stay equal height |

`public/404.html` is a static fallback page served automatically by hosts that support it (Vercel, Netlify,
GitHub Pages) when a route doesn't match.

---

<details>
<summary>Original Vite template notes</summary>

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`. See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list.

</details>
