# Fire Lily

The website and blog code for Fire Lily Dance.

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploy

1. Run the build as above
2. Run gcloud app deploy
```bash
gcloud app deploy --project <CLOUD_PROJECT_ID> build/app.yaml
```

## Adding blog posts
Just add a new .md file to the posts directory. That's it!
