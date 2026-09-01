# African Charging Alliance — Website

A static, multi-page website for the African Charging Alliance (AFCA), built with plain HTML/CSS/JS and deployable to GitHub Pages.

## Structure

- `index.html` — Home
- `about.html` — About / mission / values
- `members.html` — Member organizations and membership tiers
- `news.html` — News & resources
- `contact.html` — Contact details and form
- `css/style.css` — Shared styles
- `js/main.js` — Nav toggle + contact form handling

## Deploying to GitHub Pages

This repo includes `.github/workflows/pages.yml`, which deploys the site automatically on every push to `main` using GitHub's official Pages Actions.

To enable it after pushing:
1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually) — the site will publish to `https://<owner>.github.io/<repo>/`.

## Content

All copy (mission statement, member list, stats, news items) is placeholder text and should be replaced with real content, branding, and a logo.
