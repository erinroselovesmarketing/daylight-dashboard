# Daylight Dashboard Verification Checklist

Use this before gifting Mary's page or connecting a real domain.

## Pages To Check

Open these locally from `index.html` or from the Vercel URL after deployment:

```txt
/
/#mary
/#admin
/#comfort
```

Temporary demo PIN:

```txt
mary
```

## Desktop Check

- Product home opens and says `Daylight Dashboard`.
- `Mary demo` opens Mary's private gate.
- PIN opens Mary's page.
- Mary's page shows today, reassurance, memory, handled items, family check-ins, recent conversations, simple plan, coming up, special dates, home snapshot, and where-things-are.
- Comfort mode opens from Mary's page.
- Admin opens with the PIN.
- Admin can save one small text edit.
- Mary's page shows the saved edit in the same browser.
- Reset defaults restores safe starter content.

## Phone Check

- No text is cut off.
- Buttons are easy to tap.
- PIN input and button stack cleanly.
- The date label wraps instead of overflowing.
- Mary's first reassurance content appears without feeling buried.
- Cards are readable without zooming.
- Comfort mode text is large and calm.

## Tablet Check

- Mary's page uses a clean single-column or comfortable two-column layout.
- Cards keep enough spacing between sections.
- Admin fields are usable without horizontal scrolling.
- Comfort mode remains centered and readable.

## Mary-Safe Content Check

Every Mary-facing section should feel:

- calm
- simple
- non-clinical
- dignity-preserving
- reassuring without sounding fake

Avoid:

- medical labels
- surveillance language
- complicated instructions
- anything that implies Mary has failed or forgotten

## Domain Check After Vercel Deploy

Expected behavior:

- `DaylightDashboard.com` opens the product home.
- `MyDaughterLovesMe.com` opens Mary's page.
- `www` versions work or redirect correctly.

GoDaddy DNS records should be:

```txt
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Do not change MX/email records.

## Known Prototype Limits

- The PIN is not real security yet.
- Admin updates save only in that browser.
- There is no shared family database yet.
- Do not add sensitive medical, financial, or deeply private information until real login and server-side storage exist.
