/**
 * Types globaux pour PGS App Switcher en mode CDN
 * À placer dans le dossier types/ de votre projet Nuxt
 */

declare global {
  interface Window {
    PGSAppSwitcher: {
      new(options?: PGSAppSwitcherOptions): PGSAppSwitcherInstance
    }
  }
}

export interface PGSAppSwitcherOptions {
  /**
   * Élément DOM cible où monter le composant
   * Peut être un sélecteur CSS ou un élément HTML
   */
  target?: string | HTMLElement

  /**
   * URL de l'API pour charger les applications
   * @default process.env.PGS_API_URL + '/solution/platform'
   */
  apiUrl?: string

  /**
   * Liste personnalisée d'applications (optionnel, bypasse l'appel API)
   */
  customApps?: App[]

  /**
   * Callback appelé lors du clic sur une application
   */
  onAppClick?: (app: App) => void

  /**
   * Données utilisateur pour les liens de profil
   */
  userData?: UserData

  /**
   * URL de la page de profil
   * @default 'https://pgs-user.netlify.app/me'
   */
  profileUrl?: string

  /**
   * URL de la page de gestion de compte
   * @default 'https://pgs-user.netlify.app/'
   */
  accountUrl?: string

  /**
   * URL de déconnexion
   * @default 'https://pgs-user.netlify.app/logout'
   */
  logoutUrl?: string

  /**
   * Ouvrir les applications dans un nouvel onglet
   * @default false
   */
  openInNewTab?: boolean

  /**
   * Ouvrir les liens utilisateur dans un nouvel onglet
   * @default false
   */
  userLinksOpenInNewTab?: boolean

  /**
   * Nombre d'applications par ligne (mode grille uniquement)
   * @default 3
   * @min 2
   * @max 6
   */
  itemsPerRow?: number

  /**
   * Mode d'affichage initial
   * @default 'grid'
   */
  viewMode?: ViewMode

  /**
   * Activer les filtres de recherche et catégorie
   * @default true
   */
  enableFilters?: boolean

  /**
   * Activer le sélecteur de vue
   * @default true
   */
  enableViewSwitch?: boolean

  /**
   * Couleur de l'icône de déclenchement
   * @default 'currentColor'
   */
  triggerIconColor?: string

  /**
   * Trier les applications par ordre alphabétique
   * @default true
   */
  sortAlphabetically?: boolean

  /**
   * Activer le panneau de paramètres
   * @default false
   */
  enableSettings?: boolean
}

export interface PGSAppSwitcherInstance {
  /**
   * Monter le composant dans un conteneur
   */
  mount(options: PGSAppSwitcherOptions): void

  /**
   * Démonter le composant
   */
  unmount(): void

  /**
   * Mettre à jour les options du composant
   */
  update(options: Partial<PGSAppSwitcherOptions>): void
}

export interface App {
  /** Identifiant unique de l'application */
  id: string

  /** Nom de l'application */
  name: string

  /** Description de l'application */
  description: string

  /** URL de l'icône/logo */
  icon: string

  /** URL de destination */
  url: string

  /** Catégorie de l'application */
  category: string

  /** Couleur associée (hex) */
  color: string
}

export interface UserData {
  /** URL du profil utilisateur */
  profileUrl: string

  /** URL de gestion du compte */
  accountUrl: string

  /** URL de déconnexion */
  logoutUrl: string
}

export type ViewMode = 'grid' | 'list' | 'kanban'

export interface ApiResponse {
  success: boolean
  data: Array<{
    id?: string
    slug?: string
    name: string
    description: string
    logo: string
    ctaLink: string
    category: string
  }>
}

// Nécessaire pour que TypeScript reconnaisse ce fichier comme un module
export { }
