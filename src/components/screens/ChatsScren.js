import {
  view,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import bg from "../../../assets/images/BG.png";
import messages from "../../../assets/data/messages.json";
import MessageScreen from "./MessageScreen";
import InputBox from "./InputBox";
const ChatsScrren = () => {
  const route = useRoute();
  const navigation = useNavigation();

  navigation.setOptions({ title: route.params.name });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <MessageScreen messages={item} style={styles.list} />
          )}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatsScrren;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
