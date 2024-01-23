import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativTime);

export default function ChatListItem({ chat }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Chats", { id: chat.id, name: chat.user.name });
      }}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: chat.user.image }} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.time}>
            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text style={styles.message} numberOfLines={2}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    marginVertical: 5,
    marginHorizontal: 15,
    padding: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 30,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  time: {
    color: "grey",
  },
  message: {
    color: "grey",
    marginLeft: -2,
  },
});
