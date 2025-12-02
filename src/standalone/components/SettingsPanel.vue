<template>
  <Transition name="settings-fade">
    <div v-if="isOpen" class="settings-overlay" @click="close">
      <div class="settings-panel" @click.stop>
        <div class="settings-header">
          <h2 class="settings-title">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
            </svg>
            Paramètres de l'App Switcher
          </h2>
          <button class="settings-close" @click="close" aria-label="Fermer les paramètres">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div class="settings-body">
          <!-- Vue Mode -->
          <div class="setting-group">
            <label class="setting-label">Mode d'affichage</label>
            <div class="setting-control">
              <select v-model="localSettings.viewMode" class="setting-select">
                <option value="grid">Grille</option>
                <option value="list">Liste</option>
                <option value="kanban">Kanban</option>
              </select>
            </div>
          </div>

          <!-- Items per row (only for grid) -->
          <div v-if="localSettings.viewMode === 'grid'" class="setting-group">
            <label class="setting-label">
              Applications par ligne
              <span class="setting-value">{{ localSettings.itemsPerRow }}</span>
            </label>
            <div class="setting-control">
              <input v-model.number="localSettings.itemsPerRow" type="range" min="2" max="6" step="1"
                class="setting-range">
              <div class="range-labels">
                <span>2</span>
                <span>6</span>
              </div>
            </div>
          </div>

          <!-- Tri alphabétique -->
          <div class="setting-group">
            <label class="setting-label">Tri alphabétique</label>
            <div class="setting-control">
              <label class="setting-toggle">
                <input v-model="localSettings.sortAlphabetically" type="checkbox">
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <!-- Filtres -->
          <div class="setting-group">
            <label class="setting-label">Afficher les filtres</label>
            <div class="setting-control">
              <label class="setting-toggle">
                <input v-model="localSettings.enableFilters" type="checkbox">
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <!-- View Switch -->
          <div class="setting-group">
            <label class="setting-label">Changement de vue</label>
            <div class="setting-control">
              <label class="setting-toggle">
                <input v-model="localSettings.enableViewSwitch" type="checkbox">
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <!-- Ouvrir dans un nouvel onglet -->
          <div class="setting-group">
            <label class="setting-label">Ouvrir apps dans nouvel onglet</label>
            <div class="setting-control">
              <label class="setting-toggle">
                <input v-model="localSettings.openInNewTab" type="checkbox">
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <!-- User links in new tab -->
          <div class="setting-group">
            <label class="setting-label">Ouvrir liens utilisateur dans nouvel onglet</label>
            <div class="setting-control">
              <label class="setting-toggle">
                <input v-model="localSettings.userLinksOpenInNewTab" type="checkbox">
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <!-- Trigger Icon Color -->
          <div class="setting-group">
            <label class="setting-label">Couleur de l'icône</label>
            <div class="setting-control setting-color">
              <input v-model="localSettings.triggerIconColor" type="color" class="setting-color-input">
              <input v-model="localSettings.triggerIconColor" type="text" class="setting-text-input"
                placeholder="#667eea">
            </div>
          </div>
        </div>

        <div class="settings-footer">
          <button @click="resetToDefaults" class="btn-secondary">
            Réinitialiser
          </button>
          <button @click="saveAndClose" class="btn-primary">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

type ViewMode = 'grid' | 'list' | 'kanban'

interface UserSettings {
  viewMode: ViewMode
  itemsPerRow: number
  sortAlphabetically: boolean
  enableFilters: boolean
  enableViewSwitch: boolean
  openInNewTab: boolean
  userLinksOpenInNewTab: boolean
  triggerIconColor: string
}

interface Props {
  isOpen: boolean
  currentSettings: UserSettings
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  save: [settings: UserSettings]
}>()

const localSettings = ref<UserSettings>({ ...props.currentSettings })

// Synchroniser avec les props
watch(() => props.currentSettings, (newSettings) => {
  localSettings.value = { ...newSettings }
}, { deep: true })

const close = () => {
  emit('close')
}

const saveAndClose = () => {
  emit('save', localSettings.value)
  close()
}

const resetToDefaults = () => {
  localSettings.value = {
    viewMode: 'grid',
    itemsPerRow: 3,
    sortAlphabetically: true,
    enableFilters: true,
    enableViewSwitch: true,
    openInNewTab: false,
    userLinksOpenInNewTab: false,
    triggerIconColor: 'currentColor'
  }
}
</script>

<style scoped>
.settings-fade-enter-active,
.settings-fade-leave-active {
  transition: opacity 250ms ease;
}

.settings-fade-enter-from,
.settings-fade-leave-to {
  opacity: 0;
}

.settings-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
}

.settings-panel {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideUp 250ms ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e0e0e0;
}

.settings-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #202124;
}

.settings-close {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 150ms;
}

.settings-close:hover {
  background-color: #f0f0f0;
}

.settings-close svg {
  fill: #5f6368;
}

.settings-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.setting-group {
  margin-bottom: 24px;
}

.setting-group:last-child {
  margin-bottom: 0;
}

.setting-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #202124;
  margin-bottom: 8px;
}

.setting-value {
  font-size: 13px;
  color: #5f6368;
  font-weight: 400;
}

.setting-control {
  display: flex;
  gap: 12px;
}

.setting-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 150ms;
}

.setting-select:focus {
  outline: none;
  border-color: #4285F4;
}

.setting-range {
  width: 100%;
  margin-bottom: 4px;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #5f6368;
}

.setting-toggle {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  cursor: pointer;
}

.setting-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 24px;
  transition: 0.3s;
}

.toggle-slider::before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

.setting-toggle input:checked+.toggle-slider {
  background-color: #4285F4;
}

.setting-toggle input:checked+.toggle-slider::before {
  transform: translateX(24px);
}

.setting-color {
  align-items: center;
}

.setting-color-input {
  width: 50px;
  height: 40px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  cursor: pointer;
}

.setting-text-input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  font-size: 14px;
  font-family: monospace;
}

.setting-text-input:focus {
  outline: none;
  border-color: #4285F4;
}

.settings-footer {
  display: flex;
  gap: 12px;
  padding: 20px 24px;
  border-top: 1px solid #e0e0e0;
  justify-content: flex-end;
}

.btn-primary,
.btn-secondary {
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  transition: all 150ms;
  cursor: pointer;
}

.btn-primary {
  background-color: #4285F4;
  color: white;
}

.btn-primary:hover {
  background-color: #1967D2;
}

.btn-secondary {
  background-color: #f8f9fa;
  color: #5f6368;
  border: 1px solid #dadce0;
}

.btn-secondary:hover {
  background-color: #e8eaed;
}

@media (max-width: 600px) {
  .settings-panel {
    max-width: 100%;
    margin: 0;
    border-radius: 16px 16px 0 0;
    align-self: flex-end;
  }

  .settings-header {
    padding: 16px 20px;
  }

  .settings-title {
    font-size: 18px;
  }

  .settings-body {
    padding: 20px;
  }

  .settings-footer {
    padding: 16px 20px;
  }
}
</style>
