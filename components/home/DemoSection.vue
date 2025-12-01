<template>
  <section id="demo" class="section">
    <h2 class="section-title">Démonstration</h2>
    <p class="section-description">
      Clique sur l'icône des applications dans l'en-tête pour voir le menu.
    </p>

    <div class="demo-controls">
      <div class="control-group">
        <label>Mode de vue :</label>
        <select v-model="demoViewMode">
          <option value="grid">Grille</option>
          <option value="list">Liste</option>
          <option value="kanban">Kanban</option>
        </select>
      </div>
      <div class="control-group">
        <label>Items par ligne (Grille) :</label>
        <input type="range" v-model.number="demoItemsPerRow" min="2" max="6" step="1">
        <span>{{ demoItemsPerRow }}</span>
      </div>
    </div>

    <div class="demo-card">
      <div class="demo-card-header">
        <span>En-tête de l'application</span>
        <AppSwitcher :viewMode="demoViewMode" :itemsPerRow="demoItemsPerRow" :enableFilters="true"
          :enableViewSwitch="true" />
      </div>
      <div class="demo-card-body">
        <p>Le menu s'affiche ici.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppSwitcher from '~/components/AppSwitcher.vue'
import type { ViewMode } from '~/types/app-switcher'

const demoViewMode = ref<ViewMode>('grid')
const demoItemsPerRow = ref(3)

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

.demo-controls {
  max-width: 600px;
  margin: 0 auto 32px;
  display: flex;
  gap: 24px;
  justify-content: center;
  background: var(--bg-secondary);
  padding: 16px;
  border-radius: var(--radius-lg);
  flex-wrap: wrap;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.control-group label {
  font-weight: 500;
  color: var(--text-secondary);
}

.control-group select {
  padding: 8px 12px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background: white;
  min-width: 120px;
}

.control-group input[type="range"] {
  width: 100px;
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
  text-align: center;
}

.demo-card-body p {
  margin-bottom: 16px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
  }

  .demo-card {
    margin: 0 8px;
  }

  .demo-card-body {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
  }
}
</style>
