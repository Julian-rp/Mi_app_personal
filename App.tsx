import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ProfileSection } from './components/ProfileSection'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeader } from './components/SectionHeader'
import { personalInfo, contacts, skills, projects } from './data'

// Importa el CSS de NativeWind
import './global.css'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Sección Perfil */}
          <ProfileSection
            name={personalInfo.name}
            title={personalInfo.title}
            avatar={personalInfo.avatar}
            bio={personalInfo.bio}
            contacts={contacts}
          />

          {/* Separator */}
          <View style={{ height: 1, backgroundColor: '#D1D5DB', marginHorizontal: 20, marginVertical: 32 }} />

          {/* Mis Habilidades */}
          <View style={{ marginHorizontal: 20 }}>
            <SectionHeader emoji="💪" title="Mis Habilidades" />
            {skills.map((skill) => (
              <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
            ))}
          </View>

          <View style={{ height: 1, backgroundColor: '#D1D5DB', marginHorizontal: 20, marginVertical: 32 }} />

          {/* Mis Proyectos */}
          <View style={{ marginHorizontal: 20, marginBottom: 40 }}>
            <SectionHeader emoji="🚀" title="Mis Proyectos" />
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                emoji={project.emoji}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}