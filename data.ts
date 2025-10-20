import type { ContactInfo, Skill, Project } from './types'

export const personalInfo = {
  name: 'Jerson Julian Rivera Pasachoa',
  title: 'Desarrollador de Software',
  avatar: 'https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png',
  bio:
    'Estudiante de Análisis y Desarrollo de Software en el SENA, con conocimientos en programación, bases de datos y desarrollo de aplicaciones móviles y web. Me apasiona la innovación, la creatividad y el aprendizaje constante.',
}

export const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'Julianzatet@gmail.com   jersonj_rivera@soy.sena.edu.co'},
  { icon: '📍', label: 'Ubicación', value: 'Bogota D.C, Colombia' },
  { icon: '🔗', label: 'GitHub', value: 'github.com/Julian-rp' },
]

export const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'Desarrollo con React / React Native' },
  { id: '2', emoji: '🧩', name: 'Desarrollo Web' },
  { id: '3', emoji: '🗄️', name: 'Bases de Datos ' },
  { id: '4', emoji: '📱', name: 'Desarrollo Móvil' },
  { id: '5', emoji: '🔥', name: 'JavaScript' },
  { id: '6', emoji: '🎯', name: 'Git & GitHub' },
]

export const projects: Project[] = [
  {
    id: '1',
    emoji: '🚐',
    title: 'Pagina de rutas empresariales  MJV travel safely',
    description: 'Tratamos de dar un servicio eficiente y seguro por medio de rutas de transporte para empleados de diferentes empresas totalmente gratuito.',
    tags: ['Viaja Seguro', 'Mediante patrocinadores'],
  },
  {
      id: '2',
    emoji: '👤',
    title: 'App de Perfil Personal',
    description: 'Aplicación para mostrar información personal con diseño moderno.',
    tags: ['React Native', 'TypeScript'],
  },
  {
    id: '3',
    emoji: '🎯',
    title: 'TODO List',
    description: 'Gestor de tareas con funcionalidad de editar, eliminar, agregar tareas y un buscador interactivo de tareas guardadas.',
    tags: ['React Native', 'useState'],
  },
]
