import React , {Component} from 'react';
import {View , Dimensions , StyleSheet , Text} from 'react-native';

const {height , width} = Dimensions.get('window');
const styles = StyleSheet.create({
  cellContainer: 
  {
    flex: 1 , alignSelf: 'stretch' , flexDirection: 'row', width: width
  } , 
  cell: 
  {
    flex: 1 , alignSelf: 'stretch' , width: width 
  } , 
  tableHeader: 
  {
      flexDirection: 'row', width: width , height: height/10 , backgroundColor: '#4a5564'
  } , 
  tableHeaderCell: 
  {
    width: width /3 , height: height/10
  }

})
export default class EmployeeTable extends Component {
  renderRow() {
      return (
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
              <View style={{ flex: 1, alignSelf: 'stretch' }} /> 
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
          </View>
      );
  }

  render() {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* This is Table Header */}
            <View style = {styles.tableHeader}>
              <View style = {styles.tableHeaderCell}><Text>Rajini</Text></View>
              <View style = {styles.tableHeaderCell}><Text>Kamal</Text></View>
              <View style = {styles.tableHeaderCell}><Text>Vikram</Text></View>
            </View>
            {/* This is table cell */}
            <View style = {styles.cellContainer}>
              <View style = {styles.cell}/>
              <View style = {styles.cell}/>
              <View style = {styles.cell}/>
            </View>
          </View>
      );
  }
}