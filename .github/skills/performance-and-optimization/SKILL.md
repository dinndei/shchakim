---
name: performance-and-optimization
description: "Improve loading speed, rendering efficiency, and frontend performance for this Next.js marketing site. Use when optimizing images, reducing layout shifts, trimming client JS, or improving page responsiveness."
argument-hint: "Describe the performance issue or optimization target"
user-invocable: true
---

# Performance and Optimization

Improve responsiveness, perceived speed, and render efficiency for this event-production website while preserving the quality of the browsing experience.

## Before changing code

1. Identify the actual bottleneck: image weight, large client bundles, expensive calculations, layout thrash, or unnecessary re-renders.
2. Inspect the nearest implementation in `app/` or `components/` and confirm whether it is server or client rendered.
3. Prefer a minimal change that targets the specific performance issue without harming readability or maintainability.

## Implementation

1. Use Next.js patterns appropriately: server components by default, client isolation only when needed, and small reusable components.
2. Prefer `next/image` for image-heavy pages where it matches the layout and asset strategy. Keep alt text and placeholder behavior appropriate.
3. Reduce unnecessary client-side scripts and avoid establishing heavy state where static content can remain server-rendered.
4. Avoid expensive loops, repeated object creation, or repeated data transformation during render. Keep computations lightweight.
5. Optimize page structure for the event site: concise sections, clean layouts, and appropriately sized media assets.
6. Avoid introducing layout shifts by reserving image and media dimensions and preserving stable typography.
7. Consider lazy loading and progressive enhancement where it materially helps the user experience.
8. Keep code easy to understand, documented in English, and limited to the relevant feature.

## Integrate and verify

1. Apply the optimization in the relevant page, component, or data flow.
2. Review the result on both mobile and desktop and compare the behavior with the original issue.
3. Run `npm run lint` and `npm run build` after changes.
4. Report what changed and whether the optimization was validated locally or if a follow-up is still needed.
