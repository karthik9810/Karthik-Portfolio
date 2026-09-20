# Karthik — 3D Creative Portfolio

A responsive portfolio with About first and eleven individual skill sections. Includes a CSS 3D animated centerpiece, pointer-responsive artwork, and a motion control. Reduced-motion preferences are respected. The included images are AI-generated portfolio concepts, not previous client work.

## Preview

Open `dist/index.html` in a browser, or serve the `dist` directory with a local web server. No installation or build is required.

## Deploy on Vercel

Upload this folder to a Git repository, import it into Vercel, and select **Other** as the framework preset. The included configuration sets the output directory to `dist` and disables the build command. If this folder lives within a larger repository, set Vercel's Root Directory to `creative-portfolio`.

## Edit

- `About.md`: saved original About copy.
- `dist/index.html`: About section, name, navigation, and page metadata.
- `dist/portfolio.js`: eleven skill descriptions and image references.
- `dist/style.css`: responsive layout, colors, 3D transforms, and animations.
- `dist/assets/portfolio/`: 11 skill folders containing three separately named images each.

Fonts load from Google Fonts, with local system-font fallbacks. The artwork is stored locally. The site needs no API keys, paid services, or backend.

## Replace artwork

The Manage portfolio images panel has a Choose image control for each skill, accepting JPG, PNG, or WebP up to 15 MB. Uploaded images are kept in this browser using IndexedDB. Use Export my website to download a single index.html with your selected images embedded. Host that exported file as a standalone static site, or use the supplied complete project. Uploads are browser-local, not shared server storage. The initial artwork was generated with the built-in image generator; exact prompts are saved in image-prompts.md.

Each of the 33 feature buttons opens a detail dialog with its own distinct artwork, explanation, and deliverables. Every image is a separate PNG file under `dist/assets/portfolio/<skill>/`. Visible image captions and separate image links have been removed. Close the dialog with Close or Escape.

## GitHub to Vercel

1. Create an empty GitHub repository.
2. Upload the contents of this folder, keeping `dist`, `vercel.json`, and the asset folders unchanged.
3. In Vercel, choose **Add New → Project** and import that GitHub repository.
4. Keep the framework preset as **Other**. The repository already sets `dist` as the output directory.
5. Deploy. Future GitHub updates will automatically create new Vercel deployments.
