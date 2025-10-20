// Types compartidos para la aplicación
export interface ContactInfo {
  icon: string
  label: string
  value: string
}

export interface Skill {
  id: string
  emoji: string
  name: string
  level?: string
}

export interface Project {
  id: string
  emoji: string
  title: string
  description: string
  tags: string[]
}
