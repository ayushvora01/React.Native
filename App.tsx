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


  return (
    <View style={Styles.main}>
      <Pressable onPress={()=>console.warn("Normal on press")} 
      onLongPress={()=>console.warn("Long on Press")}
      onPressIn={()=>console.warn("On press In")}
      onPressOut={()=>console.warn("On press Out")}
      delayLongPress={3000}
      >
        <Text style={Styles.pressableBtn}>Pressable</Text>
        </Pressable>
    </View>
  );
}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center'
  },
  pressableBtn:{
    backgroundColor: 'yellow',
    color: 'black',
    padding: 10,
    margin: 10,
    fontSize: 30,
    borderRadius: 10,
    fontWeight: '600',
    textAlign: 'center',
    shadowColor: 'black',
    elevation: 5
  }
})

export default App;
