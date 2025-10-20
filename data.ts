import type { ContactInfo, Skill, Project } from './types'

export const personalInfo = {
  name: 'Jerson Julian Rivera Pasachoa',
  title: 'Desarrollador React Native',
  avatar: 'https://i.pravatar.cc/300',
  bio:
    'Soy un desarrollador apasionado por crear aplicaciones móviles increíbles. Me encanta aprender nuevas tecnologías y resolver problemas complejos.',
}

export const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'tu@email.com' },
  { icon: '📍', label: 'Ubicación', value: 'Tu Ciudad, País' },
  { icon: '🔗', label: 'GitHub', value: 'github.com/tu-usuario' },
]

export const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'React Native' },
  { id: '2', emoji: '📘', name: 'TypeScript' },
  { id: '3', emoji: '🎨', name: 'TailwindCSS' },
  { id: '4', emoji: '📱', name: 'Expo' },
  { id: '5', emoji: '🔥', name: 'JavaScript' },
  { id: '6', emoji: '🎯', name: 'Git & GitHub' },
]

export const projects: Project[] = [
  {
    id: '1',
    emoji: '👤',
    title: 'App de Perfil Personal',
    description: 'Aplicación para mostrar información personal con diseño moderno.',
    tags: ['React Native', 'TypeScript'],
  },
  {
    id: '2',
    emoji: '📋',
    title: 'Lista de Contactos',
    description: 'App para gestionar contactos con búsqueda en tiempo real.',
    tags: ['React Native', 'FlatList'],
  },
  {
    id: '3',
    emoji: '🎯',
    title: 'TODO List',
    description: 'Gestor de tareas con funcionalidad CRUD completa.',
    tags: ['React Native', 'useState'],
  },
]
