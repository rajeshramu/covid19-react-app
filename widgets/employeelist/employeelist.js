import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import EmployeeTable from "./employeelisttable";

export default function EmpListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="All" style={styles.buttonStyle} />
      <Text>Employee List</Text>
      <EmployeeTable/>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
