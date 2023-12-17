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

  const [hide,setHide]=useState(false);
  const [barStyle,setBarStyle]=useState("default");

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={'red'} barStyle={barStyle} hidden={hide}></StatusBar>
      <Button title='Toggle Status Bar' onPress={()=>setHide(!hide)}/>
      <Button title='Update Style' onPress={()=>setBarStyle("dark-content")}/>
    </View>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  }
  
})

export default App;
