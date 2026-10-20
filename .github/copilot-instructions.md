# Project Guidelines

## Structure and Architecture

- This is a Hebrew event-planning website built with Next.js 15, React 19, and the App Router. Preserve the existing separation of responsibilities:
  - `app/` contains the application layout and pages: the home page, contact page, and dynamic event pages.
  - `components/` contains shared UI components; `data/` contains event and testimonial types and data.
  - `app/globals.css` contains the site styles.
- Use server components by default. Add `"use client"` only to components that need browser interaction or React state/effects.
- Keep event content and structure compatible with the `Event` type and data in `data/events.ts`; testimonial content is managed in `data/testimonials.ts`.
- Preserve the Hebrew language and right-to-left settings (`lang="he"` and `dir="rtl"` in `app/layout.tsx`) and maintain accessibility, including semantic labels and buttons.

## Code Style

- Use TypeScript with strict mode, explicit types where needed, and the `@/` alias for imports from the project root.
- Follow the existing design conventions in `app/globals.css`; the project does not use a dedicated UI component library or CSS framework.
- Make content, layouts, and interactions responsive and RTL-aware. Use `next/link` for internal navigation.
- Write all code comments in English.

## Contact Form

- `app/contact/contact-form.tsx` is a client component that submits to `app/api/contact/route.ts`. Keep field names, validation, and responses compatible on both sides.
- Email credentials and other environment variables are configured in `.env.local` based on `.env.example`; access them only on the server and never expose secrets in client code.
- Changes to rate limiting, spam filtering, or validation must preserve the existing API protections.

## Verification

- Run `npm run lint` and `npm run build` after code changes. The project currently has no dedicated test script.
- Use `npm run dev` for local development and `npm run start` to run a production build.