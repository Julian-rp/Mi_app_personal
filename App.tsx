import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ProfileSection } from './components/ProfileSection'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeader } from './components/SectionHeader'
import type { ContactInfo, Skill, Project } from './types' // si usas types.ts

// Si no usas types.ts, pega aquí las interfaces y datos tal como en la sección "Tipos e datos".
import { personalInfo, contacts, skills, projects } from './data' // o define inline

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-gray-50">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* TEST: comprueba que NativeWind aplica clases */}
          <View className="p-4 bg-red-500 items-center">
            <Text className="text-white font-bold">TEST: NativeWind</Text>
          </View>
          {/* Sección Perfil */}
        <ProfileSection
          name={personalInfo.name}
          title={personalInfo.title}
          avatar={personalInfo.avatar}
          bio={personalInfo.bio}
          contacts={contacts}
        />

        {/* Separator */}
        <View className="h-px bg-gray-300 mx-5 my-8" />

        {/* Mis Habilidades */}
        <View className="mx-5">
          <SectionHeader emoji="💪" title="Mis Habilidades" />
          {skills.map((skill) => (
            <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
          ))}
        </View>

        <View className="h-px bg-gray-300 mx-5 my-8" />

        {/* Mis Proyectos */}
        <View className="mx-5 mb-10">
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