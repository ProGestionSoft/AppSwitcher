<template>
  <div class="apps-list">
    <a v-for="app in apps" :key="app.id" :href="app.url" :target="openInNewTab ? '_blank' : '_self'"
      :rel="openInNewTab ? 'noopener noreferrer' : undefined" class="app-list-item"
      @click="$emit('appClick', app, $event)">
      <img v-if="app.icon" :src="app.icon" :alt="app.name" class="app-list-icon" loading="lazy" />
      <div v-else class="app-list-icon-fallback" :style="{ backgroundColor: app.color }">
        {{ app.name.charAt(0).toUpperCase() }}
      </div>
      <div class="app-list-content">
        <span class="app-list-name">{{ app.name }}</span>
        <span class="app-list-category">{{ app.category }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { App } from '~/types/app-switcher'

interface Props {
  apps: App[]
  openInNewTab: boolean
}

defineProps<Props>()

defineEmits<{
  appClick: [app: App, event: Event]
}>()
</script>

<style scoped>
.apps-list {
  padding: 16px 24px;
}

.app-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: var(--radius-md, 8px);
  text-decoration: none;
  color: var(--text-primary, #202124);
  transition: all var(--transition-fast, 150ms);
  cursor: pointer;
  margin-bottom: 4px;
}

.app-list-item:hover {
  background-color: var(--bg-secondary, #f8f9fa);
}

.app-list-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
}

.app-list-icon-fallback {
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

.app-list-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.app-list-name {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.app-list-category {
  font-size: 12px;
  color: var(--text-secondary, #5f6368);
}
</style>
