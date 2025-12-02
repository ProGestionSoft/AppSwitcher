<template>
  <div class="view-switch">
    <button @click="$emit('update:viewMode', 'grid')" :class="{ active: viewMode === 'grid' }" class="view-button"
      title="Vue grille">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
      </svg>
    </button>
    <button @click="$emit('update:viewMode', 'list')" :class="{ active: viewMode === 'list' }" class="view-button"
      title="Vue liste">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
      </svg>
    </button>
    <button @click="$emit('update:viewMode', 'kanban')" :class="{ active: viewMode === 'kanban' }" class="view-button"
      title="Vue kanban">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
type ViewMode = 'grid' | 'list' | 'kanban'

interface Props {
  viewMode: ViewMode
}

defineProps<Props>()

defineEmits<{
  'update:viewMode': [value: ViewMode]
}>()
</script>

<style scoped>
.view-switch {
  display: flex;
  gap: 4px;
  background: var(--bg-secondary, #f8f9fa);
  padding: 4px;
  border-radius: var(--radius-md, 8px);
  align-self: flex-start;
}

.view-button {
  padding: 6px 10px;
  border-radius: var(--radius-sm, 4px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast, 150ms);
  fill: var(--text-secondary, #5f6368);
}

.view-button:hover {
  background: var(--border-color, #dadce0);
}

.view-button.active {
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  fill: var(--primary-color, #4285F4);
}
</style>
