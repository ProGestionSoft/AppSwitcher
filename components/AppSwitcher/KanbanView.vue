<template>
  <div class="apps-kanban">
    <div v-for="category in categories" :key="category" class="kanban-column">
      <h3 class="kanban-column-title">{{ category }}</h3>
      <div class="kanban-cards">
        <a v-for="app in getAppsByCategory(category)" :key="app.id" :href="app.url"
          :target="openInNewTab ? '_blank' : '_self'" :rel="openInNewTab ? 'noopener noreferrer' : undefined"
          class="kanban-card" @click="$emit('appClick', app, $event)">
          <img v-if="app.icon" :src="app.icon" :alt="app.name" class="kanban-card-icon" loading="lazy" />
          <div v-else class="kanban-card-icon-fallback" :style="{ backgroundColor: app.color }">
            {{ app.name.charAt(0).toUpperCase() }}
          </div>
          <span class="kanban-card-name">{{ app.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { App } from '~/types/app-switcher'

interface Props {
  apps: App[]
  openInNewTab: boolean
}

const props = defineProps<Props>()

defineEmits<{
  appClick: [app: App, event: Event]
}>()

const categories = computed(() => {
  const cats = new Set(props.apps.map(app => app.category))
  return Array.from(cats).sort()
})

const getAppsByCategory = (category: string) => {
  return props.apps.filter(app => app.category === category)
}
</script>

<style scoped>
.apps-kanban {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 24px;
}

.kanban-column {
  min-width: 0;
  background: var(--bg-secondary, #f8f9fa);
  border-radius: var(--radius-lg, 12px);
  padding: 16px;
}

.kanban-column-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-secondary, #5f6368);
}

.kanban-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.kanban-card {
  background: white;
  padding: 12px;
  border-radius: var(--radius-md, 8px);
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-primary, #202124);
  transition: all var(--transition-fast, 150ms);
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.kanban-card:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.kanban-card-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
}

.kanban-card-icon-fallback {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm, 4px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  flex-shrink: 0;
}

.kanban-card-name {
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .apps-kanban {
    grid-template-columns: 1fr;
  }

  .kanban-column {
    min-width: 100%;
  }
}
</style>
