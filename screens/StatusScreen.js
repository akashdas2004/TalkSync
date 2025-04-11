import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';


const statusData = [
  {
    id: 'my-status',
    type: 'my-status',
    name: 'My Status',
    time: 'Tap to add status update',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 'recent-header',
    type: 'header',
    title: 'Recent updates',
  },
  {
    id: '1',
    type: 'status',
    name: 'John Doe',
    time: '10 minutes ago',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    seen: false,
  },
  {
    id: '2',
    type: 'status',
    name: 'Sarah Smith',
    time: '25 minutes ago',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    seen: false,
  },
  {
    id: 'viewed-header',
    type: 'header',
    title: 'Viewed updates',
  },
  {
    id: '3',
    type: 'status',
    name: 'Mike Johnson',
    time: '2 hours ago',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    seen: true,
  },
  {
    id: '4',
    type: 'status',
    name: 'Jessica Williams',
    time: 'Yesterday, 9:30 PM',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    seen: true,
  },
];

export default function StatusScreen() {
  const renderItem = ({ item }) => {
    if (item.type === 'header') {
      return (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{item.title}</Text>
        </View>
      );
    } else if (item.type === 'my-status') {
      return (
        <TouchableOpacity style={styles.myStatusContainer}>
          <View style={styles.myStatusAvatarContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.addStatusIcon}>
              <Ionicons name="add-circle" size={20} color={COLORS.primary} />
            </View>
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.statusName}>{item.name}</Text>
            <Text style={styles.statusTime}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.statusContainer}>
          <View style={[
            styles.statusAvatarContainer,
            { borderColor: item.seen ? '#CCCCCC' : COLORS.primary }
          ]}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.statusName}>{item.name}</Text>
            <Text style={styles.statusTime}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={statusData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="camera" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#F0F0F0',
  },
  headerText: {
    fontSize: 14,
    color: COLORS.lightText,
    fontWeight: '500',
  },
  myStatusContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  myStatusAvatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  statusContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  statusAvatarContainer: {
    borderRadius: 30,
    padding: 3,
    borderWidth: 2,
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  addStatusIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  statusInfo: {
    flex: 1,
  },
  statusName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.text,
  },
  statusTime: {
    color: COLORS.lightText,
    fontSize: 14,
    marginTop: 2,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});