# PGS App Switcher

Un composant partagé pour naviguer entre toutes vos applications ProGestionSoft, similaire au sélecteur d'applications de Google.

## 🎯 Objectif

Ce projet résout le problème de maintenance de menus de navigation sur plusieurs plateformes. Au lieu de mettre à jour chaque application individuellement, vous mettez à jour un seul fichier JSON et toutes vos applications sont automatiquement à jour.

## ✨ Fonctionnalités

- 🚀 **Mise à jour centralisée** - Un seul fichier JSON à modifier
- 🎨 **Design moderne** - Interface élégante inspirée de Google
- ⚡ **Léger et rapide** - Bundle optimisé servi via CDN
- 🔧 **Facile à intégrer** - Plusieurs méthodes d'intégration
- 📱 **Responsive** - Fonctionne sur tous les appareils
- ♿ **Accessible** - Support ARIA et navigation au clavier

## 📦 Installation et Utilisation

### Option 1: Via CDN (Recommandé)

La manière la plus simple d'utiliser le composant sur n'importe quelle page HTML:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/dist/app-switcher.css">

<!-- Conteneur -->
<div id="app-switcher"></div>

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/dist/app-switcher.iife.js"></script>

<!-- Initialisation -->
<script>
  new PGSAppSwitcher({
    target: '#app-switcher'
  });
</script>
```

### Option 2: Dans une application Nuxt.js

```vue
<template>
  <div>
    <AppSwitcher />
  </div>
</template>

<script setup>
import AppSwitcher from '~/components/AppSwitcher.vue'
</script>
```

### Option 3: Via NPM (À venir)

```bash
npm install @progestionsoft/app-switcher
```

```javascript
import PGSAppSwitcher from '@progestionsoft/app-switcher'
import '@progestionsoft/app-switcher/dist/style.css'

new PGSAppSwitcher({
  target: '#app-switcher'
})
```

## ⚙️ Configuration

### Configuration de base

```javascript
new PGSAppSwitcher({
  target: '#app-switcher', // Sélecteur CSS ou élément DOM
  configUrl: 'https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/public/apps.json'
})
```

### Configuration avec applications personnalisées

```javascript
new PGSAppSwitcher({
  target: '#app-switcher',
  customApps: [
    {
      id: 'mon-app',
      name: 'Mon Application',
      description: 'Description de mon app',
      icon: 'https://example.com/icon.svg',
      url: 'https://mon-app.example.com',
      color: '#4285F4',
      category: 'custom'
    }
  ]
})
```

### Configuration avec gestionnaire de clics

```javascript
new PGSAppSwitcher({
  target: '#app-switcher',
  onAppClick: (app) => {
    console.log('Application cliquée:', app)
    // Logique personnalisée (analytics, etc.)
  }
})
```

## 📝 Format du fichier de configuration

Le fichier `apps.json` doit suivre ce format:

```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-12-01T00:00:00Z",
  "user": {
    "profileUrl": "https://account.progestionsoft.com/profile",
    "accountUrl": "https://account.progestionsoft.com",
    "logoutUrl": "https://account.progestionsoft.com/logout"
  },
  "apps": [
    {
      "id": "app-unique-id",
      "name": "Nom de l'application",
      "description": "Description courte",
      "icon": "https://url-de-icone.svg",
      "url": "https://url-de-application.com",
      "color": "#4285F4",
      "category": "productivity"
    }
  ]
}
```

## 🚀 Déploiement

### Sur GitHub

1. **Push vers GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ProGestionSoft/AppSwitcher.git
git branch -M main
git push -u origin main
```

2. **Build le composant CDN:**
```bash
npm install
npm run build:cdn
```

3. **Commit et push le dossier dist:**
```bash
git add dist
git commit -m "Add built files for CDN"
git push
```

### Via jsDelivr CDN

Après le push sur GitHub, vos fichiers sont automatiquement disponibles via:

- JavaScript: `https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/dist/app-switcher.iife.js`
- CSS: `https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/dist/app-switcher.css`
- Config: `https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/public/apps.json`

### Sur Netlify

1. **Connectez votre repo GitHub à Netlify**
2. **Configuration de build:**
   - Build command: `npm run generate`
   - Publish directory: `dist` ou `.output/public`

3. **Votre URL Netlify** (par exemple `https://pgs-app-switcher.netlify.app`) peut servir:
   - Le fichier de config: `https://pgs-app-switcher.netlify.app/apps.json`
   - Les assets: `https://pgs-app-switcher.netlify.app/dist/...`

## 🔄 Mise à jour du menu

Pour ajouter/modifier/supprimer des applications:

1. Modifiez `public/apps.json`
2. Commit et push vers GitHub
3. ✅ Toutes les applications affichent automatiquement les changements!

**Note:** Le cache CDN peut prendre quelques minutes à se rafraîchir. Pour forcer un refresh immédiat, ajoutez un paramètre de version:

```
https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/public/apps.json?v=2
```

## 🛠️ Développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Lancer en développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de dev Nuxt
npm run dev

# Construire pour la production
npm run build

# Construire le bundle CDN
npm run build:cdn
```

### Structure du projet

```
AppSwitcher/
├── assets/
│   └── css/
│       └── main.css          # Styles globaux
├── components/
│   └── AppSwitcher.vue       # Composant Nuxt
├── pages/
│   └── index.vue             # Page de démo
├── public/
│   ├── apps.json             # Configuration des apps
│   ├── demo-cdn.html         # Démo CDN standalone
│   └── icons/                # Icônes des applications
├── src/
│   └── standalone/
│       ├── index.ts          # Point d'entrée CDN
│       ├── AppSwitcher.standalone.vue
│       └── style.css
├── dist/                     # Fichiers buildés pour CDN
├── nuxt.config.ts
├── vite.config.ts
└── package.json
```

## 📖 API

### PGSAppSwitcher

#### Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `target` | `string \| HTMLElement` | - | Élément DOM où monter le composant |
| `configUrl` | `string` | URL vers apps.json | URL du fichier de configuration |
| `customApps` | `App[]` | `undefined` | Applications personnalisées |
| `onAppClick` | `(app: App) => void` | `undefined` | Callback lors du clic sur une app |

#### Méthodes

- `mount(options)` - Monte le composant
- `unmount()` - Démonte le composant
- `update(options)` - Met à jour la configuration

## 🎨 Personnalisation

Le composant utilise des variables CSS que vous pouvez surcharger:

```css
:root {
  --primary-color: #4285F4;
  --bg-primary: #ffffff;
  --text-primary: #202124;
  --border-color: #dadce0;
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
  --radius-xl: 16px;
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🤝 Contribution

Les contributions sont les bienvenues! N'hésitez pas à:

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT © ProGestionSoft

## 📞 Support

Pour toute question ou problème:

- 📧 Email: support@progestionsoft.com
- 🐛 Issues: [GitHub Issues](https://github.com/ProGestionSoft/AppSwitcher/issues)
- 📚 Documentation: [GitHub Wiki](https://github.com/ProGestionSoft/AppSwitcher/wiki)

## 🙏 Remerciements

Inspiré par le Google App Switcher pour sa conception élégante et son expérience utilisateur.
