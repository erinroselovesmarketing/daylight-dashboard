# Daylight Dashboard Deployment

## Current Deployment Goal

Deploy the static MVP to Vercel from:

```txt
erinroselovesmarketing/daylight-dashboard
```

Use one Vercel project for both:

- `DaylightDashboard.com`
- `MyDaughterLovesMe.com`

## Vercel Import Settings

When importing the GitHub repo into Vercel:

- Framework preset: Other
- Root directory: repository root
- Build command: leave empty
- Output directory: leave empty
- Install command: leave empty

The app is currently static HTML, CSS, and JavaScript.

## Current Vercel Status

Connected Vercel team:

```txt
Influence Results
team_3bNQoTqih1JAq9pvjhjCRj66
```

Projects currently visible in that team:

```txt
my-real-estate-marketing-site
clearly-desk-marketing-site
```

`daylight-dashboard` has not been imported into Vercel yet.

The connected Vercel tool for this Codex environment does not create the project directly; it points to the Vercel CLI. This laptop environment does not currently have the `vercel` CLI available, so the clean next step is to import the GitHub repo from the Vercel dashboard.

## Exact Import Steps

1. Open Vercel.
2. Make sure the selected team is `Influence Results`.
3. Choose `Add New` then `Project`.
4. Import the GitHub repo:

```txt
erinroselovesmarketing/daylight-dashboard
```

5. Use these settings:

```txt
Framework preset: Other
Root directory: ./
Build command: leave empty
Output directory: leave empty
Install command: leave empty
```

6. Deploy.
7. Copy the Vercel production URL into this file once it exists.

## Domains To Add In Vercel

Add these domains to the same Vercel project:

```txt
daylightdashboard.com
www.daylightdashboard.com
mydaughterlovesme.com
www.mydaughterlovesme.com
```

## GoDaddy DNS Records

For each domain, use:

```txt
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Do not change MX/email records.

## How The Two Domains Behave

- `DaylightDashboard.com` opens the Daylight Dashboard product home.
- `MyDaughterLovesMe.com` opens Mary’s Daily Companion.

The app detects `mydaughterlovesme` in the browser hostname.

## Prototype URLs After Deploy

Until custom domains finish verifying, use the Vercel preview/production URL:

```txt
https://YOUR-VERCEL-PROJECT.vercel.app
https://YOUR-VERCEL-PROJECT.vercel.app/#mary
https://YOUR-VERCEL-PROJECT.vercel.app/#admin
```

Temporary demo PIN:

```txt
mary
```

## Deployment URL

Not created yet.

## Known Limitations

- The current PIN is browser-side and not strong privacy.
- Admin updates are stored in that browser only.
- There is not yet a shared database.
- There is not yet real login.
- Sensitive personal content should wait until server-side auth and storage are added.

## Next Upgrade After Static Deployment

Move from static browser storage to:

- real login
- server-side protected admin
- shared database
- environment variables for secrets
- content backups/export
