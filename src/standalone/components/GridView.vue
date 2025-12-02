<template>
  <div class="apps-grid" :style="{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }">
    <a v-for="app in apps" :key="app.id" :href="app.url" :target="openInNewTab ? '_blank' : '_self'"
      :rel="openInNewTab ? 'noopener noreferrer' : undefined" class="app-item" :title="app.description"
      @click="$emit('appClick', app, $event)">
      <div class="app-icon" :style="{ backgroundColor: app.color + '20' }">
        <img v-if="app.icon" :src="app.icon" :alt="app.name" loading="lazy" />
        <div v-else class="app-icon-fallback" :style="{ backgroundColor: app.color }">
          {{ app.name.charAt(0).toUpperCase() }}
        </div>
      </div>
      <span class="app-name">{{ app.name }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
// Définition locale du type App
interface App {
  id: string
  name: string
  description: string
  icon: string
  url: string
  category: string
  color: string
}

interface Props {
  apps: App[]
  itemsPerRow: number
  openInNewTab: boolean
}

defineProps<Props>()

defineEmits<{
  appClick: [app: App, event: Event]
}>()
</script>

<style scoped>
.apps-grid {
  display: grid;
  gap: 8px;
  padding: 24px;
}

.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  border-radius: var(--radius-lg, 12px);
  text-decoration: none;
  color: var(--text-primary, #202124);
  transition: all var(--transition-fast, 150ms);
  cursor: pointer;
}

.app-item:hover {
  background-color: var(--bg-secondary, #f8f9fa);
  transform: translateY(-2px);
}

.app-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg, 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  overflow: hidden;
  transition: transform var(--transition-fast, 150ms);
}

.app-item:hover .app-icon {
  transform: scale(1.05);
}

.app-icon img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.app-icon-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: 600;
}

.app-name {
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .apps-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (max-width: 480px) {
  .apps-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 4px;
    padding: 16px;
  }

  .app-item {
    padding: 12px 6px;
  }

  .app-icon {
    width: 48px;
    height: 48px;
  }

  .app-name {
    font-size: 12px;
  }
}
</style>
