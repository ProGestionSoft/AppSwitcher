import { createApp, h } from 'vue'
import AppSwitcher from './AppSwitcher.standalone.vue'
import './style.css'

interface App {
  id: string
  name: string
  description: string
  icon: string
  url: string
  color: string
  category: string
}

interface PGSAppSwitcherOptions {
  configUrl?: string
  customApps?: App[]
  onAppClick?: (app: App) => void
  target?: string | HTMLElement
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
        configUrl: options.configUrl,
        customApps: options.customApps,
        onAppClick: options.onAppClick
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
