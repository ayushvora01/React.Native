/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import UserData from './components/UserData';
import CompanyData from './components/CompanyData';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// const name = "Ayush";
// var email = "Ayush123@gmail.com"
// let age = 17;
// function University() {
//   return "Marwadi University";  
// }


const test1 = (val: string) => {
  console.warn(val);
}
const test2 = () => {
  console.warn("Function Called");
}

let data = 30;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text style={{ fontSize: 40, fontWeight: "600", color: "purple" }}>Hello,Ayush Vora</Text>
      {/* <Text style={{ fontSize: 50, fontWeight: "600", color: "purple" }}>Hello,{name} Vora</Text> */}
      {/* <Text style={{ fontSize: 30, fontWeight: "600", color: "blue" }}>{University()}</Text> */}
      {/* <Text style={{ fontSize: 30, fontWeight: "600", color: "blue" }}>{100 - 90}</Text> */}
      {/* <Text style={{ fontSize: 30, fontWeight: "600", color: "blue" }}>{age===18?"Above 18":"Below 18"}</Text> */}
      <UserData />
      <CompanyData />
      <Button title='Press Here' color={'green'} onPress={() => test1("Hello, Ayush Vora")}></Button>
      <Button title='Press Here' color={'orange'} onPress={test2}></Button>
    </View>
  );
}

export default App;