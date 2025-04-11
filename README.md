📱 TalkSync
TalkSync is a modern, React Native-based chat application that mimics the functionality of messaging platforms like WhatsApp, but with a fresh UI and a scalable backend built using Firebase (or Supabase). It supports real-time messaging, user profiles, and is ready for advanced features like voice messaging and live voice-to-voice translation.

<!-- optional if you add a demo gif -->

✨ Features
💬 Real-time chat interface with chat bubbles

🧑‍🤝‍🧑 Contact list (Chats, Status, Calls)

✅ Message timestamps and unread badges

🌐 Navigation with stack and tab views

🎨 Custom themes using COLORS constants

🗣️ (Coming soon) Voice message support

🌍 (Coming soon) Live voice translation

🔧 Built With
React Native + Expo

Firebase / Supabase (your choice of backend)

React Navigation

Firestore / Realtime DB

Android Emulator / Expo Go

🛠️ Setup & Run Locally
bash
Copy
Edit
git clone https://github.com/akashdas2004/TalkSync.git
cd TalkSync

npm install
npx expo install @react-navigation/native @react-navigation/stack @react-navigation/material-top-tabs react-native-screens react-native-safe-area-context react-native-tab-view react-native-pager-view @expo/vector-icons react-native-gesture-handler react-native-reanimated react-native-svg
npx expo start

⚠️ You must have Expo CLI and an Android emulator or Expo Go installed on your device.

🧠 Planned Features
 Voice chat + audio message recording

 Realtime translation (Google + ElevenLabs)

 User authentication (email, magic link, OAuth)

 Dark mode + theme switcher

 Push notifications

📁 Project Structure
markdown
Copy
Edit
TalkSync/
├── App.js
├── constants.js
├── firebaseConfig.js / supabase.js
└── screens/
    ├── ChatsScreen.js
    ├── ChatScreen.js
    ├── StatusScreen.js
    ├── CallsScreen.js
    └── SettingsScreen.js
🙌 Contributions
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change or build.

📄 License
MIT

