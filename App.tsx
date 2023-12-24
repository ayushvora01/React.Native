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

  const[data,setData]=useState([]);

  const getAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(()=>{
    getAPIData();
  },[])

  return (
    <View>
      <Text style={{
        fontSize: 30,
        color: 'black',
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>FlatList API Call</Text>
      {
        data.length ? 
        <FlatList 
        data={data}
        renderItem={({item})=>
          <View>
             <Text style={{
        fontSize: 20,
        color: 'black',
        backgroundColor: 'grey',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>{item.id}</Text>
      <Text style={{
        fontSize: 18,
        color: 'black',
        backgroundColor: 'cyan',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>{item.title}</Text>
      <Text style={{
        fontSize: 18,
        color: 'black',
        backgroundColor: 'lightgreen',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>{item.body}</Text>
          </View>
        }
        />:null
      }
    </View>
  )
};

export default App;

