---
name: marketing-site-and-forms
description: "Build or refine conversion-focused landing pages, marketing sections, and contact flows for this event-production website. Use when creating lead-generation pages, CTAs, galleries, event highlights, or form interactions."
argument-hint: "Describe the landing page, section, or form change"
user-invocable: true
---

# Marketing Site and Forms

Shape the site as a polished marketing product that helps turn visits into inquiries and bookings while staying aligned with the event brand and Hebrew audience.

## Before changing code

1. Check nearby pages in `app/` and reusable patterns in `components/` to preserve consistency.
2. Review `data/` for typed content and event metadata that should drive the section or page.
3. Confirm whether the feature is primarily content-driven, interactive, or form-based.

## Implementation

1. Build marketing sections around clear value propositions, strong hierarchy, and audience-focused storytelling.
2. Use reusable components for cards, galleries, highlights, CTAs, and event features to keep the interface consistent and maintainable.
3. Keep contact and inquiry flows clear, user-friendly, and compatible with the existing server API and validation flow.
4. Preserve the brand tone in Hebrew and maintain a premium, modern UX across all device sizes.
5. Use semantic HTML and accessible labels for inputs, buttons, and section navigation.
6. Keep data-driven content in typed modules wherever appropriate instead of duplicating content inline.
7. Favor clear conversion actions with strong visual emphasis and minimal friction.

## Integrate and verify

1. Wire the new section, page, or form into the relevant route and pass typed data where needed.
2. Review the result at mobile and desktop breakpoints, especially for CTA visibility and form usability.
3. Run `npm run lint` and `npm run build` after code changes.
4. Report the files changed and any validation or interaction issues that remain.
