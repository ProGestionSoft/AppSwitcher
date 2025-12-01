import { createApp, h } from 'vue'
import AppSwitcher from './AppSwitcher.standalone.vue'
import './style.css'
import type { App, UserData, ViewMode } from '~/types/app-switcher'

interface PGSAppSwitcherOptions {
  apiUrl?: string
  customApps?: App[]
  onAppClick?: (app: App) => void
  target?: string | HTMLElement
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
}

class PGSAppSwitcher {
  private app: ReturnType<typeof createApp> | null = null
  private container: HTMLElement | null = null

  constructor(options: PGSAppSwitcherOptions = {}) {
    this.mount(options)
  }

  mount(options: PGSAppSwitcherOptions = {}) {
    // Determine target element
    let targetElement: HTMLElement | null = null

    if (options.target) {
      if (typeof options.target === 'string') {
        targetElement = document.querySelector(options.target)
      } else {
        targetElement = options.target
      }
    }

    if (!targetElement) {
      // Create default container
      targetElement = document.createElement('div')
      targetElement.id = 'pgs-app-switcher'
      document.body.appendChild(targetElement)
    }

    this.container = targetElement

    // Create Vue app
    this.app = createApp({
      render: () => h(AppSwitcher, {
        apiUrl: options.apiUrl,
        customApps: options.customApps,
        onAppClick: options.onAppClick,
        userData: options.userData,
        profileUrl: options.profileUrl,
        accountUrl: options.accountUrl,
        logoutUrl: options.logoutUrl,
        openInNewTab: options.openInNewTab,
        userLinksOpenInNewTab: options.userLinksOpenInNewTab,
        itemsPerRow: options.itemsPerRow,
        viewMode: options.viewMode,
        enableFilters: options.enableFilters,
        enableViewSwitch: options.enableViewSwitch,
        triggerIconColor: options.triggerIconColor
      })
    })

    this.app.mount(this.container)
  }

  unmount() {
    if (this.app) {
      this.app.unmount()
      this.app = null
    }

    if (this.container && this.container.id === 'pgs-app-switcher') {
      this.container.remove()
    }

    this.container = null
  }

  update(options: Partial<PGSAppSwitcherOptions>) {
    this.unmount()
    this.mount(options as PGSAppSwitcherOptions)
  }
}

// Export for module usage
export default PGSAppSwitcher
export { PGSAppSwitcher }
export type { PGSAppSwitcherOptions, App }

// Global initialization for script tag usage
if (typeof window !== 'undefined') {
  (window as any).PGSAppSwitcher = PGSAppSwitcher
}
