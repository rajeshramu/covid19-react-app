import * as React from "react";
import {AsyncStorage , View , Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import EmpListScreen from "./widgets/employeelist/employeelist";
import OverviewSummaryScreen from "./widgets/overviewsummary";
import RoomListScreen from "./widgets/rommlist";
import EmpDetailScreen from "./widgets/employeedetail";
import {AuthContext} from "./context/AuthContext";
import login from './login/login';
import styles from './assets/styles';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [auth, setAuth] = React.useState(false);

  const ScreenContainer = ({ children }) => (
    <View style={styles.containerSplash}>{children}</View>
  );
  const Splash = () => (
    <ScreenContainer>
      <Image source = {require('./assets/images/loading.gif')} style = {{width: 100 , height: 100}}></Image>
    </ScreenContainer>
  );
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setAuth(true);
      },
      signOut: () => {
        setIsLoading(false);
        setAuth(false);
      }
    };
  }, []);
  
  React.useEffect(()=>
{
  setIsLoading(true);
  AsyncStorage.getItem( 'userToken' )
  .then( data => {
    setAuth(data);
    setIsLoading(false);
  }).done();
  
},[])

if (isLoading)
{
  return <Splash/>
}
  
  return (
    <AuthContext.Provider value = {authContext}>
    <NavigationContainer>
    {auth ? (
      <Tab.Navigator>
        <Tab.Screen name="Employee List" component={EmpListScreen} />
        <Tab.Screen name="Overview Summary" component={OverviewSummaryScreen} />
        <Tab.Screen name="Room List" component={RoomListScreen} />
        <Tab.Screen name="Employee Details" component={EmpDetailScreen} />
      </Tab.Navigator>
    ): (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name = "Login" component = {login}/>
      </Stack.Navigator>
    ) }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
