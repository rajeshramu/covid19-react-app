import React, { Component } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: "row",
    width: width,
    backgroundColor: "#FFFFFF",
    margin: 1,
    maxHeight: 35,
  },
  cell: {
    flex: 1,
    alignSelf: "stretch",
    width: width,
  },
  tableHeader: {
    flexDirection: "row",
    width: width,
    height: height / 10,
    backgroundColor: "#4a5564",
  },
  tableHeaderCell: {
    width: width / 5,
    height: height / 10,
  },
});

export default class EmployeeTable extends Component {
  state = {
    array: [
      {
        image: "RAJ",
        role: "DI LEAD",
        reload: "",
        desc: "lalala",
        status: "Good",
      },
      {
        image: "CP1",
        role: "DI Engineer",
        reload: "",
        desc: "blahblah",
        status: "Good",
      },
      {
        image: "CP2",
        role: "DI Engineer",
        reload: "",
        desc: "WaahWaah",
        status: "Good",
      },
    ],
  };
  renderRow() {
    return (
      <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* This is Table Header */}
        <View style={styles.tableHeader}>
          <View style={styles.tableHeaderCell}>
            <Text>Image</Text>
          </View>
          <View style={styles.tableHeaderCell}>
            <Text>Role</Text>
          </View>
          <View style={styles.tableHeaderCell}>
            <Text>Reload</Text>
          </View>
          <View style={styles.tableHeaderCell}>
            <Text>Desc</Text>
          </View>
          <View style={styles.tableHeaderCell}>
            <Text>Status</Text>
          </View>
        </View>
        {/* This is table cell */}

        {this.state.array !== null &&
          this.state.array.map((element, index) => {
            return (
              <View
                key={index}
                style={{
                  ...styles.cellContainer,
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#E5E8E8",
                }}
              >
                <View style={styles.cell}>
                  <Text>{element.image}</Text>
                </View>
                <View style={styles.cell}>
                  <Text>{element.role}</Text>
                </View>
                <View style={styles.cell}>
                  <AntDesign name="sync" size={15} color="black" />
                </View>
                <View style={styles.cell}>
                  <AntDesign
                    name="exclamationcircle"
                    size={15}
                    color="black"
                    Text={element.desc}
                  />
                </View>
                <View style={styles.cell}>
                  <Text>{element.status}</Text>
                </View>
              </View>
            );
          })}
      </View>
    );
  }
}
