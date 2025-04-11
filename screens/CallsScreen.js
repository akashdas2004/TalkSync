import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';


const callsData = [
  {
    id: '1',
    name: 'John Doe',
    time: 'Today, 10:30 AM',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    type: 'incoming',
    missed: false,
    video: false,
  },
  {
    id: '2',
    name: 'Sarah Smith',
    time: 'Today, 9:15 AM',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    type: 'outgoing',
    missed: false,
    video: true,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    time: 'Yesterday, 7:45 PM',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    type: 'incoming',
    missed: true,
    video: false,
  },
  {
    id: '4',
    name: 'Jessica Williams',
    time: 'Yesterday, 5:30 PM',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    type: 'outgoing',
    missed: false,
    video: false,
  },
  {
    id: '5',
    name: 'David Brown',
    time: '2 days ago',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    type: 'incoming',
    missed: false,
    video: true,
  },
];

export default function CallsScreen() {
  const renderItem = ({ item }) => {
    let callIcon;
    let callIconColor;
    
    if (item.video) {
      callIcon = item.type === 'incoming' ? 'videocam' : 'videocam-outline';
    } else {
      callIcon = item.type === 'incoming' ? 'call' : 'call-outline';
    }
    
    if (item.missed) {
      callIconColor = 'red';
    } else {
      callIconColor = item.type === 'incoming' ? COLORS.primary : COLORS.accent;
    }
    
    return (
      <TouchableOpacity style={styles.callItem}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.callInfo}>
          <Text style={styles.callName}>{item.name}</Text>
          <View style={styles.callDetails}>
            <Ionicons 
              name={item.type === 'incoming' ? 'arrow-down' : 'arrow-up'} 
              size={14} 
              color={item.missed ? 'red' : COLORS.lightText} 
              style={styles.callTypeIcon}
            />
            <Text style={[
              styles.callTime,
              item.missed && styles.missedCall
            ]}>
              {item.time}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.callButton}>
          <Ionicons name={callIcon} size={22} color={callIconColor} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={callsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="call" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  callItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  callInfo: {
    flex: 1,
  },
  callName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 3,
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callTypeIcon: {
    marginRight: 5,
  },
  callTime: {
    color: COLORS.lightText,
    fontSize: 14,
  },
  missedCall: {
    color: 'red',
  },
  callButton: {
    padding: 10,
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