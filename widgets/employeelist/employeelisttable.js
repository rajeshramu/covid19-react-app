import * as React from "react";
import { View, Text } from "react-native";

const weatherGridRow = {
  flexDirection: "row",
  paddingTop: 15,
  paddingLeft: 10,
};
const weatherGridCell = { flex: 1 };
export default class Table extends React.Component {
  render() {
    const data = [1, 2, 3, 4, 5];
    return (
      <View style={{ flex: 1 }}>
        <View style={weatherGridRow}>
                                      
          <View style={weatherGridCell}>
                                            
            <Text style={{ justifyContent: "flex-start" }}>Strikes</Text>
                                        
          </View>
                                      
          <View style={weatherGridCell}>
                                            
            <Text style={{ justifyContent: "flex-end" }}>Rajinikanth</Text>
                                        
          </View>
                                  
        </View>
      </View>
    );
  }
}
