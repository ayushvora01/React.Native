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
} from 'react-native';

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


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState("default");

  return (
    <View style={Styles.container}>
      <Text style={{ fontSize: 30 }}>Platform : {Platform.OS}</Text>
      {
        Platform.OS == 'android' ?
          <View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
          :
          <View style={{ backgroundColor: 'red', height: 100, width: 100 }}></View>
      }
      <Text style={Styles.text}>Hello My name is Ayush.</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    color:Platform.OS=='android' ? 'black' : 'white',
    backgroundColor:Platform.OS=='android' ? 'yellow' : 'blue',
    fontWeight: 'bold',
    fontSize: 30
  }
})

export default App;
