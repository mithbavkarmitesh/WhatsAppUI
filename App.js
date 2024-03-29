import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatScrren from "./src/components/screens/ChatScreen";
import ChatsScrren from "./src/components/screens/ChatsScren";
import Navigator from "./src/components/navigation";
export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      {/* <ChatScrren /> */}
      {/* <ChatsScrren /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 50,
  },
});
