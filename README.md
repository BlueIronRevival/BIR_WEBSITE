# Blue Iron Revival

A custom, static-first website for the Blue Iron Revival antique Ford and Fordson tractor collection.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To verify a production build:

```bash
npm run build
```

The static export is written to `out/`.

## Replace images

All image references live in `src/config/images.ts`. Add replacement files to `public/images/` using the configured filenames, or change the paths in that one config file.

Missing photos are handled gracefully by the `ImageWithFallback` component, so the site continues to build and display a tractor-themed fallback.

Recommended sizes:

- Hero background: 2000 x 1100 px or larger
- Owner portrait/shop photo: 1400 x 1200 px
- Featured tractor: 1600 x 1200 px
- Collection cards: 1200 x 800 px
- Logo: existing file, ideally at least 800 px wide

Use optimized JPG or WebP files and keep important subjects away from the extreme edges.

## Edit site content

- Shared navigation, resources, tractors, and stories: `src/data/site.ts`
- Image paths: `src/config/images.ts`
- Homepage sections: `src/app/page.tsx`
- Page-specific content: each folder under `src/app/`
- Colors and theme: `tailwind.config.ts`
- Global visual treatments: `src/app/globals.css`

## Deploy to Netlify

1. Push the repository to GitHub.
2. Create a new Netlify site from the repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `out`.
5. Deploy.

No server runtime is required for the current site. The contact form is visual only and can later be connected to Netlify Forms or another form service.
