import { view, Text, FlatList } from "react-native";
import DummyData from "../../../assets/data/chats.json";
import ChatListItem from "../ChatListItem/index";

const ChatScrren = () => {
  return (
    <FlatList
      data={DummyData}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
};
export default ChatScrren;
