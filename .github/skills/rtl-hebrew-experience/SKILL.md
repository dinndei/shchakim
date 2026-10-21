---
name: rtl-hebrew-experience
description: "Ensure Hebrew, RTL, and culturally appropriate UX patterns are preserved across this site. Use when adjusting layout direction, locale-aware content, spacing, typography, or interaction flow."
argument-hint: "Describe the RTL or Hebrew UI issue"
user-invocable: true
---

# RTL Hebrew Experience

Support a high-quality Hebrew and right-to-left experience throughout the event website, including layout, hierarchy, typography, and interaction flows.

## Before changing code

1. Check the current root layout and surrounding components to understand the existing RTL conventions.
2. Review `app/globals.css` for spacing, directionality, and typography patterns used across the site.
3. Confirm how the affected content is authored and whether it is static, data-driven, or dynamic.

## Implementation

1. Preserve the project's RTL foundation: use logical layout direction, alignment, and object positioning that respect Hebrew reading flow.
2. Keep text and UI patterns natural for Hebrew users, including spacing, line length, and content sequencing.
3. Ensure forms, navigation, and CTA elements remain intuitive in a right-to-left reading context.
4. Be careful with directional CSS values, icon placement, and alignment so the interface reads correctly without visual friction.
5. Maintain accessible labels, focus states, and button behavior in Hebrew while keeping the layout polished and premium.
6. Where needed, validate that interactive components still work logically under RTL without broken ordering or confusing emphasis.

## Integrate and verify

1. Apply the update in the targeted page or component while preserving the site's overall visual system.
2. Review the result in both mobile and desktop modes, and specifically check the Hebrew/RTL behavior.
3. Run `npm run lint` and `npm run build` after changes.
4. Report the files changed and note any remaining RTL edge cases or follow-up work.
