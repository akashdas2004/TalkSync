import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';


export default function SettingsScreen() {
  const renderSettingItem = (icon, title, subtitle = null, showArrow = true) => (
    <TouchableOpacity style={styles.settingItem}>
      <View style={[styles.settingIcon, { backgroundColor: COLORS.primary + '20' }]}>
        <Ionicons name={icon} size={22} color={COLORS.primary} />
      </View>
      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
      </View>
      {showArrow && (
        <Ionicons name="chevron-forward" size={20} color={COLORS.lightText} />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/5.jpg' }} 
          style={styles.profileImage} 
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileStatus}>Available</Text>
        </View>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Account</Text>
        {renderSettingItem('key', 'Account', 'Privacy, security, change number')}
        {renderSettingItem('chatbubble-ellipses', 'Chats', 'Theme, wallpapers, chat history')}
        {renderSettingItem('notifications', 'Notifications', 'Message, group & call tones')}
        {renderSettingItem('server', 'Storage and Data', 'Network usage, auto-download')}
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>App</Text>
        {renderSettingItem('help-circle', 'Help', 'FAQ, contact us, privacy policy')}
        {renderSettingItem('heart', 'Tell a Friend', null)}
        {renderSettingItem('information-circle', 'About', 'v1.0.0')}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>from</Text>
        <Text style={styles.appName}>TalkSync</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  profileStatus: {
    fontSize: 16,
    color: COLORS.lightText,
    marginTop: 5,
  },
  settingsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: COLORS.lightText,
    fontWeight: '500',
    marginLeft: 15,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: COLORS.text,
  },
  settingSubtitle: {
    fontSize: 14,
    color: COLORS.lightText,
    marginTop: 2,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.lightText,
  },
  appName: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginTop: 5,
  },
});