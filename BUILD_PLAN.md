# Daylight Dashboard Build Plan

## Current State

Daylight Dashboard is currently a static prototype with:

- a product home page
- Mary’s Daily Companion page
- a simple browser-only PIN screen
- Mary-safe content rules documented in `PRODUCT_VISION.md`
- domain setup notes for Vercel

This is enough to demonstrate the emotional direction, but not enough for a private launch or a market-ready product.

## Product Readiness Gaps

### Mary Live MVP

Before gifting this to Mary, the product needs:

- a deployed Vercel URL
- `MyDaughterLovesMe.com` connected to Mary’s page
- a simple admin update screen for Erin/Richard
- editable daily content without code changes
- stronger access protection than a browser-visible PIN
- family-safe seed content
- basic mobile/tablet verification
- a clear backup plan if Mary gets stuck

### Private Family Product

Before another family should use it, the product needs:

- real login
- per-family accounts
- one loved-one dashboard per family
- server-side permissions
- secure data storage
- admin roles for family members
- private custom domain mapping
- audit-friendly content history
- Mary-safe content filtering for loved-one views
- accessible large-text display mode

### Market-Ready SaaS

Before public marketing, the product needs:

- onboarding flow
- pricing and subscription plan
- terms, privacy policy, and support policy
- HIPAA/privacy risk review, even if not positioned as medical software
- billing
- customer support workflow
- analytics that do not feel like surveillance
- domain connection instructions
- backup/export of family data
- incident/security response basics
- brand site with clear positioning

## Recommended Technical Direction

### Keep The First Launch Simple

Do not jump straight to a full SaaS platform. The first useful version should prove Mary’s daily experience.

Build order:

1. Static Mary dashboard with editable content.
2. Simple admin screen for Erin/Richard.
3. Deploy to Vercel.
4. Connect `MyDaughterLovesMe.com`.
5. Observe real use.
6. Upgrade to real auth and database once the daily content model is clearer.

### Later App Stack

When the prototype graduates from static files, migrate to:

- Next.js on Vercel
- Supabase or similar database/auth
- server-side password/session protection
- structured loved-one data model
- image storage for family photos
- custom domain mapping per loved one

## MVP Data Model

The first data model should stay human and simple:

- loved one name
- location / orientation line
- daily reassurance
- things that are true
- already handled
- family check-ins
- simple plan
- coming up
- memory
- optional family photos
- optional grocery/home snapshot

## Build Milestones

### Milestone 1: Mary Usable Prototype

Goal: Mary’s page can be updated manually and opened from her private URL.

Tasks:

- Add local admin route. `Done in prototype`
- Store editable content in browser storage for the prototype. `Done in prototype`
- Add reset-to-defaults option. `Done in prototype`
- Add Mary-safe admin guidance.
- Add comfort/reassurance mode. `Done in prototype`
- Add home/grocery snapshot. `Done in prototype`
- Add where-things-are section. `Done in prototype`
- Improve Mary page layout for large text. `In progress`
- Verify mobile/tablet/desktop.
- Deploy to Vercel.
- Connect `MyDaughterLovesMe.com`.

### Milestone 2: Private Launch

Goal: Mary’s page is private enough for real family use.

Tasks:

- Add server-side login.
- Move content out of browser storage.
- Create an admin page protected by password/session.
- Add environment variable documentation.
- Add deployment checklist.
- Add backups/export.
- Add basic error and empty states.

### Milestone 3: Repeatable Family Product

Goal: a second family can be onboarded without custom coding.

Tasks:

- Add family accounts.
- Add loved-one profiles.
- Add role-based family/admin access.
- Add guided setup.
- Add family photo upload.
- Add calendar/countdown entries.
- Add custom domain mapping instructions.
- Add content history and restore.

### Milestone 4: Market Ready

Goal: public-facing product with support, trust, and payment readiness.

Tasks:

- Launch product marketing site.
- Add terms/privacy/support pages.
- Add billing.
- Add support inbox/workflow.
- Add onboarding emails.
- Add data deletion/export.
- Add security review.
- Add analytics for product improvement.
- Add nonprofit/sponsor pathway if desired.

## First Implementation Slice

Build a prototype admin screen at `#admin`.

This is not the final secure admin system. It is a practical first tool so the family can update Mary’s dashboard content quickly while the real app architecture is still intentionally small.

Acceptance criteria:

- `#admin` asks for the family PIN.
- Erin/Richard can edit Mary-facing content.
- Saving updates the Mary page immediately in the same browser.
- Reset restores safe default content.
- Mary-facing language remains calm and non-clinical.
