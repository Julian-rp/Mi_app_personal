import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface SectionHeaderProps {
  title: string
  emoji?: string
}

export function SectionHeader({ title, emoji }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {emoji ? `${emoji} ` : ''}{title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
})

export default SectionHeader