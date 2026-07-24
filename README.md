# CLECD NGO Website

Static React + Vite website for **Centre for Life Enhancement and Community Development (CLECD)**, a Nigerian non-profit organisation.

## Project

- Framework: React + Vite
- Hosting target: Netlify
- Backend: None
- Contact form: Netlify Forms

## Setup

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Vite will show a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production files will be created in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Deploy to Netlify

1. Push this project to GitHub.
2. In Netlify, choose **Add new site** then **Import an existing project**.
3. Connect the GitHub repository.
4. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy the site.
6. After deployment, set the real custom domain in Netlify DNS/domain settings.

The included `netlify.toml` already contains the build and publish settings.

## Content Notes

Several sections include placeholder content for programmes, gallery images, donations, and the future domain name. i put some placeholder which can be replace with actual value in `src/App.jsx` and all style can be modifyy in `src/styles.css` when final content and images are available.
