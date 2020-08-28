import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Table from "./employeelisttable";

export default function EmpListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="All" style={styles.buttonStyle} />
      <Text>Employee List</Text>
      <Table />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  TextSyle: {},
});
