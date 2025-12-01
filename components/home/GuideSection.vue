<template>
  <section id="integration" class="section">
    <h2 class="section-title">Guide d'intégration</h2>

    <div class="accordion-container">
      <div class="accordion-item">
        <button class="accordion-header" @click="toggleAccordion(0)" :class="{ active: activeAccordion === 0 }">
          <span class="accordion-title">1. Utilisation via CDN (Recommandé)</span>
          <svg class="accordion-icon" :class="{ rotated: activeAccordion === 0 }" viewBox="0 0 24 24" width="20"
            height="20">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <div class="accordion-content" :class="{ open: activeAccordion === 0 }">
          <p>Utilisation dans HTML :</p>
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
      </div>

      <div class="accordion-item">
        <button class="accordion-header" @click="toggleAccordion(1)" :class="{ active: activeAccordion === 1 }">
          <span class="accordion-title">2. Utilisation avec Nuxt.js</span>
          <svg class="accordion-icon" :class="{ rotated: activeAccordion === 1 }" viewBox="0 0 24 24" width="20"
            height="20">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <div class="accordion-content" :class="{ open: activeAccordion === 1 }">
          <p>Utilisation dans Nuxt.js</p>
          <pre><code>&lt;template&gt;
  &lt;AppSwitcher /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import AppSwitcher from '~/components/AppSwitcher.vue'
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header" @click="toggleAccordion(2)" :class="{ active: activeAccordion === 2 }">
          <span class="accordion-title">3. Configuration personnalisée</span>
          <svg class="accordion-icon" :class="{ rotated: activeAccordion === 2 }" viewBox="0 0 24 24" width="20"
            height="20">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <div class="accordion-content" :class="{ open: activeAccordion === 2 }">
          <p>Vous pouvez personnaliser l'URL de configuration ou fournir des applications personnalisées :</p>
          <pre><code>new PGSAppSwitcher({
  apiUrl: 'https://your-api.com/apps',
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeAccordion = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index
}
</script>

<style scoped>
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

.accordion-container {
  max-width: 900px;
  margin: 0 auto;
}

.accordion-item {
  margin-bottom: 16px;
  background: white;
  border-radius: var(--radius-lg);
  border: 2px solid var(--border-color);
  overflow: hidden;
  transition: all var(--transition-fast);
}

.accordion-item:hover {
  border-color: #667eea;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
}

.accordion-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: var(--bg-secondary);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.accordion-header:hover {
  background: #667eea;
}

.accordion-header:hover .accordion-title {
  color: white;
}

.accordion-header:hover .accordion-icon {
  fill: white;
}

.accordion-header.active {
  background: #667eea;
}

.accordion-header.active .accordion-title {
  color: white;
}

.accordion-header.active .accordion-icon {
  fill: white;
}

.accordion-title {
  font-size: 20px;
  font-weight: 600;
  color: #667eea;
  transition: color var(--transition-fast);
}

.accordion-icon {
  fill: #667eea;
  transition: all var(--transition-base);
}

.accordion-icon.rotated {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
  padding: 0 24px;
}

.accordion-content.open {
  max-height: 1000px;
  padding: 24px;
  transition: max-height 0.5s ease-in, padding 0.3s ease-in;
}

.accordion-content p {
  margin-bottom: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.accordion-content pre {
  background: var(--text-primary);
  color: #fff;
  padding: 20px;
  border-radius: var(--radius-md);
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.accordion-content code {
  color: inherit;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
  }

  .accordion-header {
    padding: 16px;
  }

  .accordion-title {
    font-size: 16px;
  }

  .accordion-content.open {
    padding: 16px;
  }

  .accordion-content pre {
    font-size: 12px;
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
  }

  .accordion-title {
    font-size: 15px;
  }

  .accordion-content pre {
    font-size: 11px;
    padding: 12px;
    overflow-x: scroll;
  }
}
</style>
