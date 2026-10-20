---
name: building-components
description: "Build or update React UI components in this repository. Use when creating components, reusable page sections, cards, galleries, carousels, or interactive UI for this Next.js site."
argument-hint: "Describe the component or UI change"
user-invocable: true
---

# Building Components

Build accessible, responsive components that fit this repository's Next.js App Router site for a Hebrew event-production business.

## Before changing code

1. Inspect the closest existing component and its usage in `app/`.
2. Check `app/globals.css` for existing variables, class naming, breakpoints, and layout patterns before adding styles.
3. Check the relevant types and content in `data/` before introducing or changing component props.
4. Keep the change scoped to the requested component and the files needed to integrate it.

## Implementation

1. Put shared UI in `components/` using a kebab-case `.tsx` filename and a named PascalCase component export.
2. Use TypeScript and explicit prop types. Keep simple prop types inline; introduce a named type when it improves clarity or is shared. Use `import type` for type-only imports and `@/` for project-root imports.
3. In the App Router, keep components server-rendered by default. Add `"use client"` only when browser APIs, event handlers, state, effects, or other client-only behavior are required. Keep the client boundary as narrow as practical.
4. Use the existing global CSS in `app/globals.css`. Follow its variables and kebab-case class names; avoid adding a styling framework or component-scoped styling system. Make layouts responsive and account for right-to-left direction.
5. Preserve the site's Hebrew and RTL experience (`lang="he"` and `dir="rtl"` are set in the root layout). Use `next/link` for internal navigation.
6. Use semantic HTML, a logical heading hierarchy, descriptive accessible names for controls and navigation, and appropriate image alt text. Decorative images should have empty alt text. Ensure interactive controls work with a keyboard.
7. Store reusable or page-level content in the existing typed `data/` modules where appropriate rather than embedding duplicate content in markup. Follow the current data shape unless the task requires a coordinated type and data change.
8. For effects and event listeners, clean up subscriptions, listeners, and timers. Honor reduced-motion preferences for motion-heavy UI.
9. Follow established image practices in nearby components. Prefer `next/image` when appropriate; if using a plain `<img>` to match an existing gallery or event-image pattern, keep any lint suppression narrowly scoped.

## Integrate and verify

1. Wire the component into its intended page or parent and pass data through typed props.
2. Review the result at mobile and desktop breakpoints, including RTL layout and interactive states.
3. Run `npm run lint` and `npm run build` after code changes. This repository does not currently define a dedicated test script.
4. Report the files changed and checks run; surface any validation failures explicitly.
