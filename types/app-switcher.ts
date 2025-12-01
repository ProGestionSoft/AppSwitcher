// Types partagés pour AppSwitcher

export interface ApiApp {
  id: string
  slug: string
  name: string
  description: string
  logo: string
  ctaLink: string
  category: string
  color?: string
  icon?: string
  url?: string
}

export interface App {
  id: string
  name: string
  description: string
  icon: string
  url: string
  color: string
  category: string
}

export interface UserData {
  profileUrl: string
  accountUrl: string
  logoutUrl: string
}

export interface ApiResponse {
  success: boolean
  data: ApiApp[]
}

export type ViewMode = 'grid' | 'list' | 'kanban'
