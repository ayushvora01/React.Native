/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { PropsWithChildren, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
  Platform,
  TextInput,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WebView, { } from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Login} from'./components/Login';
import {Home} from './components/Home';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const btnAction = () =>{
    console.warn("Button pressed")
  }
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'yellow',
          },
          headerTitleStyle:{
            fontSize:30,
            color:'black'
          }
          }}>
        <Stack.Screen name='Login' component={Login}
          options={{
            headerTitle:()=><Button title='Left' onPress={btnAction}/>,
            headerRight:()=><Headers/>,
            title:'Login Screen',
            // headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'black',
          },
          headerTitleStyle:{
            fontSize:30,
            color:'white'
          }
          }}/>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Headers =()=>{
  return(
    <TextInput placeholder='Name' style={{color:'white',backgroundColor:'blue'}}/>
  )
}

export default App;
