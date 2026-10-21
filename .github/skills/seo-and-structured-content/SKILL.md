---
name: seo-and-structured-content
description: "Improve search visibility, metadata, semantic structure, and content quality for this Next.js event and marketing site. Use when adding or refining metadata, headings, event pages, or content structure."
argument-hint: "Describe the SEO or content optimization request"
user-invocable: true
---

# SEO and Structured Content

Build pages and content that are discoverable, readable, and semantically structured for search engines and real users.

## Before changing code

1. Inspect the page type or route being changed: homepage, event details, or contact page.
2. Review the existing data shape in `data/` and current page patterns in `app/`.
3. Keep content consistent with the Hebrew event-production brand and marketing goals.

## Implementation

1. Prefer semantic HTML and a clear page hierarchy: a single meaningful `h1`, logical heading order, and concise content sections.
2. Keep content descriptive and relevant to the target event, service, or audience. Avoid duplicate or generic text across multiple pages.
3. Add or refine metadata in the relevant route or layout when needed, while preserving the brand tone and existing structure.
4. Use meaningful page titles, descriptions, and internal linking patterns that reflect user intent.
5. For event pages, ensure the content communicates real value: venue, concept, experiences, services, and outcomes.
6. Keep imports, data usage, and client/server boundaries aligned with this repository's Next.js App Router conventions.
7. Maintain accessible, readable copy in Hebrew and ensure the page remains coherent in RTL layouts.

## Integrate and verify

1. Update the relevant page, metadata, or content module and keep the structure consistent with the site design.
2. Review the result in the browser at normal breakpoints and confirm the hierarchy feels logical.
3. Run `npm run lint` and `npm run build` after making changes.
4. Note the files changed and any SEO or content tradeoffs affecting the final result.
