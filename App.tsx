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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
   <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='Signup' component={SignUp}/>
    </Tab.Navigator>
   </NavigationContainer>
  )
};

const Login =()=>{
  return<View>
      <Text>Login</Text>
    </View>
}
const SignUp =()=>{
  return<View>
      <Text>SignUp</Text>
    </View>
}
export default App;

