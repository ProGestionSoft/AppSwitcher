<template>
  <div class="app-switcher-wrapper">
    <button class="app-switcher-trigger" @click="toggleMenu" :aria-expanded="isOpen"
      aria-label="Sélecteur d'applications">
      <svg class="apps-icon" viewBox="0 0 24 24" width="24" height="24"
        :style="{ fill: userSettings.triggerIconColor }">
        <path
          d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
      </svg>
    </button>

    <Teleport to="body">
      <Transition name="menu-fade">
        <div v-if="isOpen" class="app-switcher-overlay" @click="closeMenu">
          <div class="app-switcher-menu" @click.stop role="dialog" aria-modal="true"
            aria-labelledby="app-switcher-title">
            <div class="menu-header">
              <h2 id="app-switcher-title" class="menu-title">
                Applications PGS
              </h2>
              <div class="header-actions">
                <button v-if="enableSettings" class="settings-button" @click="openSettings" aria-label="Paramètres">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                  </svg>
                </button>
                <button class="close-button" @click="closeMenu" aria-label="Fermer le menu">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Filters and View Controls -->
            <div v-if="userSettings.enableFilters || userSettings.enableViewSwitch" class="menu-controls">
              <Filters v-if="userSettings.enableFilters" v-model:searchQuery="searchQuery"
                v-model:selectedCategory="selectedCategory" :categories="categories" />

              <ViewSwitch v-if="userSettings.enableViewSwitch" v-model:viewMode="currentViewMode" />
            </div>

            <div v-if="loading" class="menu-loading">
              <div class="spinner"></div>
              <p>Chargement...</p>
            </div>

            <div v-else-if="error" class="menu-error">
              <p>{{ error }}</p>
              <button @click="fetchApps" class="retry-button">
                Réessayer
              </button>
            </div>

            <template v-else>
              <GridView v-if="currentViewMode === 'grid'" :apps="filteredApps" :itemsPerRow="userSettings.itemsPerRow"
                :openInNewTab="userSettings.openInNewTab" @appClick="handleAppClick" />

              <ListView v-else-if="currentViewMode === 'list'" :apps="filteredApps"
                :openInNewTab="userSettings.openInNewTab" @appClick="handleAppClick" />

              <KanbanView v-else-if="currentViewMode === 'kanban'" :apps="filteredApps"
                :openInNewTab="userSettings.openInNewTab" @appClick="handleAppClick" />
            </template>

            <div v-if="!loading && !error && computedUserData" class="menu-footer">
              <a :href="computedUserData.accountUrl" :target="userSettings.userLinksOpenInNewTab ? '_blank' : '_self'"
                :rel="userSettings.userLinksOpenInNewTab ? 'noopener noreferrer' : undefined" class="footer-link">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
                Gérer votre compte
              </a>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Settings Panel -->
      <SettingsPanel v-if="enableSettings" :isOpen="settingsOpen" :currentSettings="userSettings" @close="closeSettings"
        @save="saveSettings" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import type { App, UserData, ApiResponse, ViewMode } from '~/types/app-switcher'
import Filters from './AppSwitcher/Filters.vue'
import ViewSwitch from './AppSwitcher/ViewSwitch.vue'
import GridView from './AppSwitcher/GridView.vue'
import ListView from './AppSwitcher/ListView.vue'
import KanbanView from './AppSwitcher/KanbanView.vue'
import SettingsPanel from './AppSwitcher/SettingsPanel.vue'

const STORAGE_KEY = 'pgs-appswitcher-settings'

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
  apiUrl?: string
  customApps?: App[]
  onAppClick?: (app: App) => void
  userData?: UserData
  profileUrl?: string
  accountUrl?: string
  logoutUrl?: string
  openInNewTab?: boolean
  userLinksOpenInNewTab?: boolean
  itemsPerRow?: number
  viewMode?: ViewMode
  enableFilters?: boolean
  enableViewSwitch?: boolean
  triggerIconColor?: string
  sortAlphabetically?: boolean
  enableSettings?: boolean
}

const config = useRuntimeConfig()
const baseUrl = config.public?.pgsBaseAPI || import.meta.env?.PGS_API_URL || ''
const cleanBaseUrl = baseUrl.replace(/\/$/, '')
const defaultApiUrl = `${cleanBaseUrl}/solution/platform`

const props = withDefaults(defineProps<Props>(), {
  apiUrl: undefined,
  openInNewTab: false,
  userLinksOpenInNewTab: false,
  accountUrl: 'https://pgs-user.netlify.app/',
  profileUrl: 'https://pgs-user.netlify.app/me',
  logoutUrl: 'https://pgs-user.netlify.app/logout',
  itemsPerRow: 3,
  viewMode: 'grid',
  enableFilters: true,
  enableViewSwitch: true,
  triggerIconColor: 'currentColor',
  sortAlphabetically: true,
  enableSettings: true
})

const isOpen = ref(false)
const settingsOpen = ref(false)
const apps = ref<App[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const selectedCategory = ref('')

// User Settings with localStorage
const getDefaultSettings = (): UserSettings => ({
  viewMode: props.viewMode,
  itemsPerRow: props.itemsPerRow,
  sortAlphabetically: props.sortAlphabetically,
  enableFilters: props.enableFilters,
  enableViewSwitch: props.enableViewSwitch,
  openInNewTab: props.openInNewTab,
  userLinksOpenInNewTab: props.userLinksOpenInNewTab,
  triggerIconColor: props.triggerIconColor
})

const loadUserSettings = (): UserSettings => {
  if (!props.enableSettings) {
    return getDefaultSettings()
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      return { ...getDefaultSettings(), ...JSON.parse(saved) }
    }
  } catch (e) {
    console.warn('Failed to load settings:', e)
  }
  return getDefaultSettings()
}

const userSettings = ref<UserSettings>(loadUserSettings())
const currentViewMode = ref<ViewMode>(userSettings.value.viewMode)

const computedUserData = computed<UserData>(() => {
  if (props.userData) {
    return props.userData
  }
  return {
    profileUrl: props.profileUrl!,
    accountUrl: props.accountUrl!,
    logoutUrl: props.logoutUrl!
  }
})

const categories = computed(() => {
  const cats = new Set(apps.value.map(app => app.category))
  return Array.from(cats).sort()
})

const filteredApps = computed(() => {
  let result = apps.value.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = !selectedCategory.value || app.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })

  // Trier par ordre alphabétique si activé
  if (userSettings.value.sortAlphabetically) {
    result = result.sort((a, b) => a.name.localeCompare(b.name))
  }

  return result
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const openSettings = () => {
  settingsOpen.value = true
}

const closeSettings = () => {
  settingsOpen.value = false
}

const saveSettings = (newSettings: UserSettings) => {
  userSettings.value = newSettings
  currentViewMode.value = newSettings.viewMode

  if (props.enableSettings) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings))
    } catch (e) {
      console.error('Failed to save settings:', e)
    }
  }
}

const handleAppClick = (app: App, event: Event) => {
  if (props.onAppClick) {
    event.preventDefault()
    props.onAppClick(app)
  }
  closeMenu()
}

const stringToColor = (str: string) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  const c = (hash & 0x00FFFFFF).toString(16).toUpperCase()
  return '#' + '00000'.substring(0, 6 - c.length) + c
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Developer Tools': '#4285F4',
    'Business Suite': '#0F9D58',
    'Bot': '#EA4335',
    'Recruitment & Talent': '#F9AB00',
    'SEO & Analytics': '#673AB7'
  }
  return colors[category] || stringToColor(category)
}

const fetchApps = async () => {
  if (props.customApps) {
    apps.value = props.customApps
    return
  }

  loading.value = true
  error.value = null

  const url = props.apiUrl || defaultApiUrl

  try {
    console.log('🔍 Fetching apps from:', url)
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`)
    }

    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('text/html')) {
      throw new Error(`L'API a retourné du HTML au lieu de JSON. URL tentée: ${url}. Vérifiez que votre serveur API est démarré et que l'URL est correcte.`)
    }

    const res: ApiResponse = await response.json()

    if (res.success && Array.isArray(res.data)) {
      apps.value = res.data.map((item) => ({
        id: item.slug || item.id,
        name: item.name,
        description: item.description,
        icon: item.logo,
        url: item.ctaLink,
        category: item.category,
        color: getCategoryColor(item.category)
      }))
      console.log('✅ Apps loaded successfully:', apps.value.length, 'apps')
    } else {
      throw new Error('Format de réponse invalide')
    }
  } catch (err) {
    error.value = err instanceof Error
      ? `${err.message}`
      : 'Une erreur est survenue'
    console.error('❌ Error fetching apps from', url, ':', err)
  } finally {
    loading.value = false
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    if (settingsOpen.value) {
      closeSettings()
    } else if (isOpen.value) {
      closeMenu()
    }
  }
}

onMounted(() => {
  fetchApps()
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

watch(() => props.apiUrl, () => {
  fetchApps()
})

watch(() => props.customApps, (newApps) => {
  if (newApps) {
    apps.value = newApps
  }
})
</script>

<style scoped>
.app-switcher-wrapper {
  display: inline-block;
  position: relative;
}

.app-switcher-trigger {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--text-secondary, #5f6368);
  transition: background-color var(--transition-fast, 150ms);
}

.app-switcher-trigger:hover {
  background-color: var(--bg-tertiary, #e8eaed);
}

.app-switcher-trigger:active {
  background-color: var(--bg-secondary, #f8f9fa);
}

.apps-icon {
  transition: fill var(--transition-fast, 150ms);
}

.app-switcher-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 64px;
  z-index: 9999;
  backdrop-filter: blur(2px);
}

.app-switcher-menu {
  background: var(--bg-primary, #ffffff);
  border-radius: var(--radius-xl, 16px);
  box-shadow: var(--shadow-lg, 0 8px 32px rgba(0, 0, 0, 0.2));
  width: 90%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  animation: slideDown var(--transition-base, 250ms) ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-16px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-color, #dadce0);
}

.menu-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary, #202124);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.settings-button,
.close-button {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary, #5f6368);
  transition: background-color var(--transition-fast, 150ms);
}

.settings-button:hover,
.close-button:hover {
  background-color: var(--border-color, #dadce0);
}

.settings-button svg,
.close-button svg {
  fill: currentColor;
}

.menu-controls {
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color, #dadce0);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-loading,
.menu-error {
  padding: 48px 24px;
  text-align: center;
  color: var(--text-secondary, #5f6368);
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;
  border: 3px solid var(--bg-tertiary, #e8eaed);
  border-top-color: var(--primary-color, #4285F4);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.retry-button {
  margin-top: 16px;
  padding: 10px 24px;
  background-color: var(--primary-color, #4285F4);
  color: white;
  border-radius: var(--radius-md, 8px);
  font-weight: 500;
  transition: background-color var(--transition-fast, 150ms);
}

.retry-button:hover {
  background-color: #1967D2;
}

.menu-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--border-color, #dadce0);
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius-md, 8px);
  color: var(--text-primary, #202124);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color var(--transition-fast, 150ms);
}

.footer-link:hover {
  background-color: var(--bg-secondary, #f8f9fa);
}

.footer-link svg {
  fill: var(--text-secondary, #5f6368);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity var(--transition-base, 250ms);
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.app-switcher-menu::-webkit-scrollbar {
  width: 8px;
}

.app-switcher-menu::-webkit-scrollbar-track {
  background: transparent;
}

.app-switcher-menu::-webkit-scrollbar-thumb {
  background: var(--border-color, #dadce0);
  border-radius: 4px;
}

.app-switcher-menu::-webkit-scrollbar-thumb:hover {
  background: var(--text-tertiary, #80868b);
}

@media (max-width: 768px) {
  .app-switcher-menu {
    max-width: 95%;
  }
}
</style>
