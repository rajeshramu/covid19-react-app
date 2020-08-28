import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EmpListScreen from "./widgets/employeelist/employeelist";
import OverviewSummaryScreen from "./widgets/overviewsummary";
import RoomListScreen from "./widgets/rommlist";
import EmpDetailScreen from "./widgets/employeedetail";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Employee List" component={EmpListScreen} />
        <Tab.Screen name="Overview Summary" component={OverviewSummaryScreen} />
        <Tab.Screen name="Room List" component={RoomListScreen} />
        <Tab.Screen name="Employee Details" component={EmpDetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
