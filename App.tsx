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

import WebView, { } from 'react-native-webview';

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

  const[show,setShow]=useState(false);

  return (
    <View style={styles.container}>
      {
      show ?
      <View style={styles.Modal}>
        <View style={styles.body}>
          <Text>Hello Guys</Text>
          <Button title='Close' onPress={()=>setShow(false)}/>
        </View>
      </View>
      : null
    }
      <Button title='Open Dialog' onPress={()=>setShow(true)}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  Modal:{
    flex:1,
    backgroundColor:'rgba(50,50,50,.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body:{
    backgroundColor:'white',
    height: 300,
    width: 300,
    padding: 20,
    justifyContent: 'flex-end',
    borderRadius: 10,
   }
})
export default App;
