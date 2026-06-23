# Domain Setup

## Goal

Use one Vercel project for the Daylight Dashboard app, then attach both domains:

- `DaylightDashboard.com`: main product/app
- `MyDaughterLovesMe.com`: Mary’s private gift URL

## DNS Records At GoDaddy

For each domain that should point to Vercel:

```txt
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Do not change MX/email records.

## Vercel Setup

Create or import one Vercel project from this folder:

```txt
/Users/erinrose/Documents/ON THE GO/daylight-dashboard
```

Then add these domains to the same Vercel project:

```txt
daylightdashboard.com
www.daylightdashboard.com
mydaughterlovesme.com
www.mydaughterlovesme.com
```

## How Routing Works In This Prototype

The browser checks the current domain:

- If the visitor is on `mydaughterlovesme.com`, it opens Mary's Daily Companion.
- Otherwise, it opens the Daylight Dashboard product home.

For local testing, Mary’s page can be opened with:

```txt
index.html#mary
```

## Later Production Upgrade

When the app grows beyond this prototype, replace browser-only routing and the demo PIN with:

- Real login
- Server-side loved-one pages
- Customer account ownership
- Secure per-family permissions
- Proper custom-domain mapping per loved one
