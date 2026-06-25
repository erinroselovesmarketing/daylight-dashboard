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
daylight-dashboard
```

`daylight-dashboard` is now created in Vercel and connected to GitHub.

Last attempted CLI login:

```txt
Status: Vercel CLI login succeeded
```

Production URL:

```txt
https://daylight-dashboard-orpin.vercel.app
```

## Import Status

The project was created through Vercel CLI and connected to GitHub:

```txt
Project: daylight-dashboard
Team: Influence Results
GitHub repo: erinroselovesmarketing/daylight-dashboard
```

## Domains To Add In Vercel

Add these domains to the same Vercel project:

```txt
daylightdashboard.com
www.daylightdashboard.com
mydaughterlovesme.com
www.mydaughterlovesme.com
```

Current domain status:

```txt
daylightdashboard.com        Added, DNS invalid at GoDaddy
www.daylightdashboard.com    Added, DNS invalid at GoDaddy
mydaughterlovesme.com        Added, valid in Vercel; HTTP works; HTTPS certificate still propagating
www.mydaughterlovesme.com    Added, valid in Vercel; HTTPS certificate still propagating
```

## GoDaddy DNS Records

For `MyDaughterLovesMe.com`, the current GoDaddy records are valid:

```txt
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

For `DaylightDashboard.com`, Vercel currently recommends updating GoDaddy DNS to:

```txt
A      @      216.198.79.1
A      @      64.29.17.1
CNAME  www    22072dfed8b0418c.vercel-dns-017.com
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

```txt
https://daylight-dashboard-orpin.vercel.app
```

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
