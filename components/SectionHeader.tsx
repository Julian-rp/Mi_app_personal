import React from 'react'
import { View, Text } from 'react-native'

interface SectionHeaderProps {
  title: string
  emoji?: string
}

export function SectionHeader({ title, emoji }: SectionHeaderProps) {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <Text className="text-2xl font-bold text-gray-900">{emoji ? `${emoji} ` : ''}{title}</Text>
    </View>
  )
}

export default SectionHeader

