import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function InputBox() {
  return (
    <View style={style.container}>
      <AntDesign style={style.plus} name="plus" size={24} color="royalblue" />
      <TextInput style={style.input} placeholder="Type Here...." />
      <Ionicons style={style.send} name="send" size={20} color="white" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    // paddingVertical: 8,
    alignItems: "center",
  },
  plus: {},
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 60,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderColor: "lightgrey",
  },
  send: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
});
