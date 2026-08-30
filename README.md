# andriisiuta.github.io

Personal portfolio — **[andriisiuta.github.io](https://andriisiuta.github.io)**

Built with Angular 22, standalone components, signals, and static prerendering
(`outputMode: static`). GitHub Pages serves the prerendered output from `docs/`.

## Develop

```bash
npm install
npm start          # dev server
```

## Deploy

```bash
npm run build      # prerenders to dist/site/browser
rm -rf docs && cp -r dist/site/browser docs && touch docs/.nojekyll
git add -A && git commit -m "deploy" && git push
```

Content lives in `src/app/data.ts` — edit it and redeploy to update the CV.
