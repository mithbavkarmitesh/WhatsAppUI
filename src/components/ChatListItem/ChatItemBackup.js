import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListItem";

const chat = {
  id: "1",
  user: {
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    name: "lukas",
  },
  lastMessage: {
    text: "Okay",
    createdAt: "07:30 AM",
  },
};
export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
