import React from 'react'
import { View, Text } from 'react-native'

interface ProjectCardProps {
  emoji: string
  title: string
  description: string
  tags: string[]
}

export function ProjectCard({ emoji, title, description, tags }: ProjectCardProps) {
  return (
    <View className="bg-white rounded-xl p-5 mb-4 border border-gray-100 shadow-card">
      <View className="flex-row items-center mb-3">
        <View className="w-12 h-12 rounded-full bg-gray-50 items-center justify-center mr-3">
          <Text className="text-2xl">{emoji}</Text>
        </View>
        <Text className="text-lg font-bold text-gray-900 flex-1">{title}</Text>
      </View>

      <Text className="text-base text-gray-600 mb-3 leading-6">{description}</Text>

      <View className="flex-row flex-wrap">
        {tags.map((tag, idx) => (
          <View key={idx} className="bg-primary-100 rounded-full px-3 py-1 mr-2 mb-2">
            <Text className="text-sm text-primary-700 font-medium">{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}