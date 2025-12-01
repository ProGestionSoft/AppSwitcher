<template>
  <div class="demo-page">
    <header class="demo-header">
      <div class="header-content">
        <h1 class="logo">ProGestionSoft</h1>
        <nav class="header-nav">
          <a href="#" class="nav-link">Accueil</a>
          <a href="#" class="nav-link">Services</a>
          <a href="#" class="nav-link">À propos</a>
          <AppSwitcher />
        </nav>
      </div>
    </header>

    <main class="demo-main">
      <div class="container">
        <section class="hero">
          <h1 class="hero-title">PGS App Switcher</h1>
          <p class="hero-subtitle">
            Un composant partagé pour naviguer entre toutes vos applications PGS
          </p>
          <div class="hero-actions">
            <a href="#demo" class="btn btn-primary">Voir la démo</a>
            <a href="#integration" class="btn btn-secondary">Guide d'intégration</a>
          </div>
        </section>

        <section id="demo" class="section">
          <h2 class="section-title">Démonstration</h2>
          <p class="section-description">
            Cliquez sur l'icône des applications dans l'en-tête pour voir le menu.
          </p>
          <div class="demo-card">
            <div class="demo-card-header">
              <span>En-tête de l'application</span>
              <AppSwitcher />
            </div>
            <div class="demo-card-body">
              <p>Le menu s'affiche ici dans l'en-tête de votre application.</p>
              <p>Il charge les données depuis un fichier JSON distant qui peut être mis à jour sans redéployer vos applications.</p>
            </div>
          </div>
        </section>

        <section id="integration" class="section">
          <h2 class="section-title">Guide d'intégration</h2>
          
          <div class="integration-method">
            <h3 class="method-title">1. Utilisation via CDN (Recommandé)</h3>
            <p>Ajoutez simplement ces lignes dans votre HTML :</p>
            <pre><code>&lt;!-- CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/dist/app-switcher.css"&gt;

&lt;!-- JavaScript --&gt;
&lt;script src="https://cdn.jsdelivr.net/gh/ProGestionSoft/AppSwitcher@main/dist/app-switcher.iife.js"&gt;&lt;/script&gt;

&lt;!-- Initialisation --&gt;
&lt;script&gt;
  new PGSAppSwitcher({
    target: '#app-switcher-container'
  });
&lt;/script&gt;</code></pre>
          </div>

          <div class="integration-method">
            <h3 class="method-title">2. Utilisation avec Nuxt.js</h3>
            <p>Importez simplement le composant :</p>
            <pre><code>&lt;template&gt;
  &lt;AppSwitcher /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import AppSwitcher from '~/components/AppSwitcher.vue'
&lt;/script&gt;</code></pre>
          </div>

          <div class="integration-method">
            <h3 class="method-title">3. Configuration personnalisée</h3>
            <p>Vous pouvez personnaliser l'URL de configuration ou fournir des applications personnalisées :</p>
            <pre><code>new PGSAppSwitcher({
  configUrl: 'https://your-domain.com/custom-apps.json',
  // ou
  customApps: [
    {
      id: 'my-app',
      name: 'Mon App',
      description: 'Description',
      icon: 'https://...',
      url: 'https://...',
      color: '#4285F4',
      category: 'custom'
    }
  ],
  onAppClick: (app) => {
    console.log('App clicked:', app);
  }
});</code></pre>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">Avantages</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🚀</div>
              <h3 class="feature-title">Mise à jour centralisée</h3>
              <p class="feature-description">
                Mettez à jour le fichier apps.json une seule fois et toutes vos applications sont à jour.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎨</div>
              <h3 class="feature-title">Design moderne</h3>
              <p class="feature-description">
                Interface élégante inspirée de Google avec animations fluides.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <h3 class="feature-title">Léger et rapide</h3>
              <p class="feature-description">
                Bundle optimisé qui se charge rapidement via CDN.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔧</div>
              <h3 class="feature-title">Facile à intégrer</h3>
              <p class="feature-description">
                Intégration simple en quelques lignes de code.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="demo-footer">
      <p>&copy; 2025 ProGestionSoft. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppSwitcher from '~/components/AppSwitcher.vue'
</script>

<style scoped>
.demo-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.demo-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  color: white;
  font-weight: 500;
  transition: opacity var(--transition-fast);
}

.nav-link:hover {
  opacity: 0.8;
}

.demo-main {
  flex: 1;
  padding: 48px 0;
}

.hero {
  text-align: center;
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: var(--radius-xl);
  margin-bottom: 64px;
}

.hero-title {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn {
  padding: 14px 32px;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 16px;
  transition: all var(--transition-fast);
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

.section {
  margin-bottom: 64px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
}

.section-description {
  text-align: center;
  color: var(--text-secondary);
  font-size: 18px;
  margin-bottom: 32px;
}

.demo-card {
  background: white;
  border-radius: var(--radius-lg);
  border: 2px solid var(--border-color);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  max-width: 600px;
  margin: 0 auto;
}

.demo-card-header {
  background: var(--bg-secondary);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  font-weight: 600;
}

.demo-card-body {
  padding: 32px;
}

.demo-card-body p {
  margin-bottom: 16px;
  line-height: 1.6;
}

.integration-method {
  margin-bottom: 48px;
  padding: 24px;
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  border-left: 4px solid #667eea;
}

.method-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #667eea;
}

.integration-method p {
  margin-bottom: 16px;
  color: var(--text-secondary);
}

.integration-method pre {
  background: var(--text-primary);
  color: #fff;
  padding: 20px;
  border-radius: var(--radius-md);
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.integration-method code {
  color: inherit;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.feature-card {
  background: white;
  padding: 32px;
  border-radius: var(--radius-lg);
  border: 2px solid var(--border-color);
  text-align: center;
  transition: all var(--transition-base);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: #667eea;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.demo-footer {
  background: var(--text-primary);
  color: white;
  padding: 32px 0;
  text-align: center;
  margin-top: auto;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
