# Installation

```bash
npm install
```

# Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

# Build pour production

## Build Nuxt App

```bash
npm run build
npm run preview
```

## Build CDN Bundle

```bash
npm run build:cdn
```

Les fichiers seront dans `dist/`:
- `app-switcher.iife.js` - Pour utilisation via balise script
- `app-switcher.es.js` - Pour utilisation via import ES6
- `app-switcher.umd.js` - Pour utilisation UMD
- `app-switcher.css` - Styles du composant

# Déploiement

## Sur GitHub + jsDelivr CDN

1. Commit et push:
```bash
git add .
git commit -m "Update app switcher"
git push
```

2. Utilisez via CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/dist/app-switcher.css">
<script src="https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/dist/app-switcher.iife.js"></script>
```

## Sur Netlify

1. Connectez votre repo GitHub
2. Build settings:
   - Build command: `npm run generate`
   - Publish directory: `.output/public`
3. Deploy!

# Mise à jour des applications

Modifiez simplement `public/apps.json` et commit/push. Toutes les plateformes utilisant le composant seront automatiquement mises à jour!
