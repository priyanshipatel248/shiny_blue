import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Actual/Splash';
import Login from './Actual/Login';
import Welcome from './Actual/Welcome';
import Signup from './Actual/Signup';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="wlcm" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
