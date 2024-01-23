import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativTime);
export default function MessageScreen({ messages }) {
  const isMessage = () => {
    return messages.user.id === "u1";
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMessage() ? "#DCF8C5" : "white",
          alignSelf: isMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text style={styles.text}>{messages.text}</Text>
      <Text style={styles.time}>{dayjs(messages.createdAt).fromNow(true)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 9,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    marginBottom: 5,
  },
  time: {
    color: "grey",
    alignSelf: "flex-end",
  },
});
