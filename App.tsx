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


type SectionProps = PropsWithChildren<{
  title: string;
}>


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const[data,setData]=useState(undefined);

  const getAPIData= async ()=>{
    //API Call
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(()=>{
    getAPIData();
  },[])


  return (
    <View>
      <Text style={{fontSize:30}}>API Call</Text>
      {
        data ? <View>
          <Text style={{fontSize:30}}>{data.id}</Text>
          <Text style={{fontSize:30}}>{data.userId}</Text>
          <Text style={{fontSize:30}}>{data.title}</Text>
          <Text style={{fontSize:30}}>{data.body}</Text>
        </View>:null
      }
    </View>
  )
};

export default App;

