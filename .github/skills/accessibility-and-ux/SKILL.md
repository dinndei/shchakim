---
name: accessibility-and-ux
description: "Improve accessibility, responsive UX, and RTL usability for this Next.js event site. Use when refining keyboard support, semantic structure, focus states, contrast, forms, or mobile-first interactions."
argument-hint: "Describe the accessibility or UX issue"
user-invocable: true
---

# Accessibility and UX

Improve the accessibility and usability of this Hebrew, RTL-first event website while keeping the design polished and conversion-focused.

## Before changing code

1. Check the nearest existing page or component that matches the behavior or layout.
2. Review `app/globals.css` to follow the site's spacing, typography, and breakpoint patterns.
3. Confirm whether the component is server-rendered or client-rendered before adding interactivity.
4. Keep the change localized to the feature or screen being improved.

## Implementation

1. Keep the experience fully RTL-aware: preserve `dir="rtl"`, Hebrew text flow, logical focus order, and mirror alignment where needed.
2. Prefer semantic HTML: `header`, `nav`, `main`, `section`, `article`, `button`, `label`, `form`, and descriptive headings.
3. Ensure interactive controls have accessible names, visible focus styles, proper contrast, and keyboard support.
4. Use `aria-*` only when needed to clarify meaning; do not add redundant labels or decorative attributes.
5. Make layouts responsive across mobile, tablet, and desktop breakpoints. Avoid content that depends on hover-only affordances.
6. Preserve reduced-motion preferences for animations and transitions. Favor subtle, purposeful motion over heavy effects.
7. Keep forms understandable: clear labels, inline validation, error messaging, disabled states, and submit feedback that is easy to follow in Hebrew.
8. Make navigation and CTA patterns obvious, especially on marketing pages where conversion and clarity matter.

## Integrate and verify

1. Update the relevant page or parent component and pass data through typed props where needed.
2. Review the screen at mobile and desktop widths, including RTL orientation and keyboard navigation.
3. Run `npm run lint` and `npm run build` after changes.
4. Report the files changed and note any validation issues or tradeoffs honestly.
