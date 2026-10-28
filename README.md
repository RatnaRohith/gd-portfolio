# GD-Projects — Prototype Lab Portfolio

A responsive dark sci-fi portfolio website built with plain HTML, CSS, and JavaScript. No build tools or JavaScript packages are required.

## Files
- `index.html` — homepage, project cards, project detail dialog, capability sections, about and contact
- `styles.css` — responsive layout and dark sci-fi visual system
- `script.js` — mobile navigation, project detail data, and project links
- `assets/images/` — replaceable screenshot placeholders
- `assets/videos/` — optional gameplay videos

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For local development, you can use VS Code with the Live Server extension.

## Replace project screenshots
Put your own screenshots in `assets/images/` with these exact filenames:
- `space-adventure.jpg`
- `storm-the-capital.jpg`
- `mnf-island.jpg`

Recommended: landscape 16:9 images, around 1600 × 900 pixels. The site has CSS-generated placeholder artwork until a real image is added.

## Add gameplay build, source, and video links
Open `script.js` and fill in `buildUrl`, `sourceUrl`, and `videoUrl` for each project. For example:

```js
buildUrl: "https://your-real-build-link",
sourceUrl: "https://github.com/your-account/your-project",
videoUrl: "https://your-real-gameplay-video"
```

Use real URLs only. Empty values intentionally trigger a placeholder alert.

## Update engines and your bio
In `script.js`, edit the `engine` value in each project so it names the actual engine and version used. In `index.html`, personalize the About section and update:
- `YOUR.EMAIL@example.com`
- `YOUR-USERNAME` in GitHub
- `YOUR-PROFILE` in LinkedIn
- Resume / CV link

## Publish
You can host this static site using GitHub Pages, Netlify, or another static hosting provider. Before publishing, check every contact/build/source link and use screenshots from your own playable builds.

## Included features
- Responsive desktop, tablet, and mobile layouts
- Mobile navigation
- Three project cards with detail dialogs
- Controller and graybox-level tags
- Godot, Unity, and Unreal Engine toolkit section
- Workflow and capability sections
- Keyboard-accessible dialog close behavior
- Reduced-motion support
