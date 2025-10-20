import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
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
      <View style={styles.header}>
        <Text style={styles.headerText}>MI APP PERSONAL</Text>
      </View>

      {/* AVATAR */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />
      </View>

      {/* NOMBRE Y TÍTULO */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* CONTACTOS */}
      <View style={styles.card}>
        {contacts.map((contact, index) => (
          <View key={index} style={[styles.contactRow, index < contacts.length - 1 && styles.contactBorder]}>
            <View style={styles.iconCircle}>
              <Text style={styles.contactIcon}>{contact.icon}</Text>
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>{contact.label}</Text>
              <Text style={styles.contactValue}>{contact.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* SOBRE MÍ */}
      <View style={styles.bioCard}>
        <Text style={styles.bioTitle}>Sobre Mí</Text>
        <Text style={styles.bioText}>{bio}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
    backgroundColor: '#6366F1',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 2,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -80,
  },
  avatar: {
    width: 144,
    height: 144,
    borderRadius: 72,
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  title: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  card: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactBorder: {
    marginBottom: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  contactIcon: {
    fontSize: 20,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  contactValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  bioCard: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  bioText: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
})