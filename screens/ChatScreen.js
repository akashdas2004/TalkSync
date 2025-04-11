import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';


// Sample messages
const initialMessages = [
  {
    id: '1',
    text: 'Hey there!',
    time: '10:00 AM',
    isOutgoing: false,
  },
  {
    id: '2',
    text: 'Hi! How are you?',
    time: '10:02 AM',
    isOutgoing: true,
  },
  {
    id: '3',
    text: 'I\'m doing great, thanks for asking. How about you?',
    time: '10:03 AM',
    isOutgoing: false,
  },
  {
    id: '4',
    text: 'Pretty good! Just working on this new app called TalkSync.',
    time: '10:05 AM',
    isOutgoing: true,
  },
  {
    id: '5',
    text: 'That sounds interesting! What kind of app is it?',
    time: '10:06 AM',
    isOutgoing: false,
  },
  {
    id: '6',
    text: 'It\'s a messaging app, similar to WhatsApp but with a different design and some unique features.',
    time: '10:08 AM',
    isOutgoing: true,
  },
];

export default function ChatScreen({ route }) {
  const { name, avatar } = route.params;
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: false });
    }
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    
    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOutgoing: true,
    };
    
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.isOutgoing ? styles.outgoingMessage : styles.incomingMessage
    ]}>
      <View style={[
        styles.messageBubble,
        item.isOutgoing ? styles.outgoingBubble : styles.incomingBubble
      ]}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        onLayout={() => flatListRef.current.scrollToEnd({ animated: false })}
      />
      
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Ionicons name="add-circle-outline" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        
        {inputText.trim() === '' ? (
          <TouchableOpacity style={styles.micButton}>
            <Ionicons name="mic-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE5DD', // Chat background similar to WhatsApp but lighter
  },
  messagesList: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginVertical: 5,
    maxWidth: '80%',
  },
  outgoingMessage: {
    alignSelf: 'flex-end',
  },
  incomingMessage: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    borderRadius: 15,
    padding: 10,
    paddingBottom: 5,
  },
  outgoingBubble: {
    backgroundColor: COLORS.messageOut,
  },
  incomingBubble: {
    backgroundColor: COLORS.messageIn,
  },
  messageText: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 5,
  },
  messageTime: {
    fontSize: 11,
    color: COLORS.lightText,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  attachButton: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  micButton: {
    marginLeft: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});