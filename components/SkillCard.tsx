import React from 'react'
import { View, Text } from 'react-native'

interface SkillCardProps {
  emoji: string
  name: string
}

export function SkillCard({ emoji, name }: SkillCardProps) {
  return (
      <View className="bg-white rounded-lg p-4 mb-3 flex-row items-center border border-gray-100 shadow-card">
      <View className="w-12 h-12 rounded-md bg-gray-50 items-center justify-center mr-4">
        <Text className="text-2xl">{emoji}</Text>
      </View>
      <Text className="text-lg font-semibold text-gray-800">{name}</Text>
    </View>
  )
}