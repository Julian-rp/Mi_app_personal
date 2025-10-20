import React from 'react'
import { View, Text, Image } from 'react-native'
import type { ContactInfo } from '../types'

interface ProfileSectionProps {
  name: string
  title: string
  avatar: string
  bio: string
  contacts: ContactInfo[]
}

export function ProfileSection({ name, title, avatar, bio, contacts }: ProfileSectionProps) {
  return (
    <View>
      {/* HEADER */}
      <View className="h-48 items-center justify-end pb-6 bg-gradient-to-r from-primary-500 to-accent">
        <Text className="text-white text-3xl font-extrabold tracking-wider">MI APP PERSONAL</Text>
      </View>

      {/* AVATAR */}
      <View className="items-center -mt-20">
        <Image
          source={{ uri: avatar }}
          className="w-36 h-36 rounded-full border-4 border-white shadow-card"
        />
      </View>

      {/* NOMBRE Y TÍTULO */}
      <View className="items-center mt-4 px-5">
        <Text className="text-2xl font-bold text-gray-900">{name}</Text>
        <Text className="text-base text-gray-600 mt-1">{title}</Text>
      </View>

      {/* CONTACTOS */}
      <View className="mx-5 mt-4 bg-white rounded-xl p-4 border border-gray-200 shadow-card">
        {contacts.map((contact, index) => (
          <View key={index} className={`flex-row items-center ${index < contacts.length - 1 ? 'mb-3' : ''}`}>
            <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3">
              <Text className="text-xl">{contact.icon}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm text-gray-500">{contact.label}</Text>
              <Text className="text-base text-gray-900 font-medium">{contact.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* SOBRE MÍ */}
      <View className="mx-5 mt-4 bg-white rounded-xl p-4 border border-gray-200 shadow-card mb-6">
        <Text className="text-lg font-bold text-gray-900 mb-2">Sobre Mí</Text>
        <Text className="text-base text-gray-600 leading-6">{bio}</Text>
      </View>
    </View>
  )
}