<template>
  <div class="app-switcher-wrapper">
    <button class="app-switcher-trigger" @click="toggleMenu" :aria-expanded="isOpen"
      aria-label="Sélecteur d'applications">
      <svg class="apps-icon" viewBox="0 0 24 24" width="24" height="24">
        <path
          d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
      </svg>
    </button>

    <div v-if="isOpen" class="app-switcher-overlay" @click="closeMenu">
      <div class="app-switcher-menu" @click.stop role="dialog" aria-modal="true" aria-labelledby="app-switcher-title">
        <div class="menu-header">
          <h2 id="app-switcher-title" class="menu-title">
            Applications PGS
          </h2>
          <button class="close-button" @click="closeMenu" aria-label="Fermer le menu">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
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

        <div v-else class="apps-grid">
          <a v-for="app in apps" :key="app.id" :href="app.url" class="app-item" :title="app.description"
            @click="handleAppClick(app, $event)">
            <div class="app-icon" :style="{ backgroundColor: app.color + '20' }">
              <img v-if="app.icon" :src="app.icon" :alt="app.name" loading="lazy" />
              <div v-else class="app-icon-fallback" :style="{ backgroundColor: app.color }">
                {{ app.name.charAt(0).toUpperCase() }}
              </div>
            </div>
            <span class="app-name">{{ app.name }}</span>
          </a>
        </div>

        <div v-if="!loading && !error && userData" class="menu-footer">
          <a :href="userData.accountUrl" class="footer-link">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
            Gérer votre compte
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface ApiApp {
  id: string
  slug: string
  name: string
  description: string
  logo: string
  ctaLink: string
  category: string
  // Champs optionnels ou calculés
  color?: string
  icon?: string
  url?: string
}

interface App {
  id: string
  name: string
  description: string
  icon: string
  url: string
  color: string
  category: string
}

interface UserData {
  profileUrl: string
  accountUrl: string
  logoutUrl: string
}

interface ApiResponse {
  success: boolean
  data: ApiApp[]
}

interface Props {
  apiUrl?: string
  customApps?: App[]
  onAppClick?: (app: App) => void
}

const baseUrl = import.meta.env?.PGS_API_URL || ''
const cleanBaseUrl = baseUrl.replace(/\/$/, '')
const defaultApiUrl = `${cleanBaseUrl}/solution/platform`

const props = withDefaults(defineProps<Props>(), {
  apiUrl: undefined
})

const isOpen = ref(false)
const apps = ref<App[]>([])
// Mockup user data as requested
const userData = ref<UserData | null>({
  profileUrl: "https://account.progestionsoft.com/profile",
  accountUrl: "https://account.progestionsoft.com",
  logoutUrl: "https://account.progestionsoft.com/logout"
})
const loading = ref(false)
const error = ref<string | null>(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleAppClick = (app: App, event: Event) => {
  if (props.onAppClick) {
    event.preventDefault()
    props.onAppClick(app)
  }
  closeMenu()
}

// Fonction utilitaire pour générer une couleur cohérente à partir d'une chaîne
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
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
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
    } else {
      throw new Error('Format de réponse invalide')
    }
  } catch (err) {
    error.value = err instanceof Error
      ? `Impossible de charger les applications: ${err.message}`
      : 'Une erreur est survenue'
    console.error('Error fetching apps:', err)
  } finally {
    loading.value = false
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
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
/* Copy all styles from AppSwitcher.vue */
.app-switcher-wrapper {
  display: inline-block;
  position: relative;
}

.app-switcher-trigger {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #5f6368;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.app-switcher-trigger:hover {
  background-color: #e8eaed;
}

.app-switcher-trigger:active {
  background-color: #f8f9fa;
}

.apps-icon {
  fill: currentColor;
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
  animation: fadeIn 250ms ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.app-switcher-menu {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 480px;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideDown 250ms ease-out;
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
  border-bottom: 1px solid #dadce0;
}

.menu-title {
  font-size: 18px;
  font-weight: 600;
  color: #202124;
  margin: 0;
}

.close-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.close-button:hover {
  background-color: #e8eaed;
}

.close-button svg {
  fill: currentColor;
}

.menu-loading,
.menu-error {
  padding: 48px 24px;
  text-align: center;
  color: #5f6368;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;
  border: 3px solid #e8eaed;
  border-top-color: #4285F4;
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
  background-color: #4285F4;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.retry-button:hover {
  background-color: #1967D2;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 8px;
  padding: 24px;
}

.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  border-radius: 12px;
  text-decoration: none;
  color: #202124;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.app-item:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
}

.app-item:active {
  transform: translateY(0);
}

.app-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  overflow: hidden;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.menu-footer {
  padding: 16px 24px;
  border-top: 1px solid #dadce0;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  color: #202124;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-link:hover {
  background-color: #f8f9fa;
}

.footer-link svg {
  fill: #5f6368;
}

.app-switcher-menu::-webkit-scrollbar {
  width: 8px;
}

.app-switcher-menu::-webkit-scrollbar-track {
  background: transparent;
}

.app-switcher-menu::-webkit-scrollbar-thumb {
  background: #dadce0;
  border-radius: 4px;
}

.app-switcher-menu::-webkit-scrollbar-thumb:hover {
  background: #80868b;
}
</style>
