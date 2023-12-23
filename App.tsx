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
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

type SectionProps = PropsWithChildren<{
  title: string;
}>

const Tab = createMaterialTopTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login"
          component={Login} />
        <Tab.Screen name="SignUp"
          component={SignUp} />
        <Tab.Screen name="Others"
          component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

const Login = () => {
  return <View>
    <Text>Login</Text>
  </View>
}
const SignUp = () => {
  return <View>
    <Text>SignUp</Text>
  </View>
}
const Other = () => {
  return <View>
    <Text>Others</Text>
  </View>
}
export default App;

