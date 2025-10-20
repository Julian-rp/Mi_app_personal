# 📱 Mi App Personal

Una aplicación móvil moderna desarrollada con **React Native** y **Expo** que muestra tu perfil profesional, habilidades y proyectos de forma elegante y minimalista.

![React Native]()
![TypeScript]
![Expo]

---

## ✨ Características

- 👤 **Perfil Personal** - Muestra tu información profesional con avatar y datos de contacto
- 💪 **Sección de Habilidades** - Lista tus competencias técnicas con iconos emoji
- 🚀 **Portafolio de Proyectos** - Presenta tus proyectos con descripciones y etiquetas
- 🎨 **Diseño Moderno** - Interfaz limpia con tarjetas, sombras y espaciado profesional
- 📱 **Responsive** - Adaptado para diferentes tamaños de pantalla
- ⚡ **Rendimiento Optimizado** - Uso de StyleSheet nativo para máxima eficiencia

---

## 🛠️ Tecnologías Utilizadas

- **React Native** `0.81.4` - Framework principal
- **Expo** `~54.0.13` - Plataforma de desarrollo
- **TypeScript** `~5.9.2` - Tipado estático
- **React Native Safe Area Context** - Manejo de áreas seguras
- **NativeWind** `^4.2.1` - Utilidades de estilo (opcional)

---

---

## 📁 Estructura del Proyecto

```
mi-app-personal/
├── components/              # Componentes reutilizables
│   ├── ProfileSection.tsx   # Sección de perfil con avatar
│   ├── SkillCard.tsx        # Tarjeta individual de habilidad
│   ├── ProjectCard.tsx      # Tarjeta de proyecto
│   └── SectionHeader.tsx    # Encabezado de sección
├── assets/                  # Imágenes e iconos
├── App.tsx                  # Componente principal
├── data.ts                  # Datos de la aplicación
├── types.ts                 # Interfaces TypeScript
├── global.css               # Estilos globales de Tailwind
├── package.json             # Dependencias
└── README.md               # Este archivo
```

---
---

## 🎯 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run android` | Ejecuta en Android |
| `npm run ios` | Ejecuta en iOS |
| `npm run web` | Ejecuta en navegador |
| `expo start -c` | Inicia limpiando caché |

---
Cómo ejecutar (mínimo)
----------------------
1. Instala dependencias:

```bash
npm install
```

2. Inicia Metro/Expo:

```bash
npx expo start --clear
```

Dónde editar tus datos
----------------------
- Abre `data.ts` y reemplaza `personalInfo`, `contacts`, `skills` y `projects` con tu información.

Notas rápidas
------------
- Si las clases Tailwind (NativeWind) no se aplican, reinicia Metro y revisa `babel.config.js` / `tailwind.config.js`.
---

---

## 👨‍💻 Autor
**Julian Rivera**



