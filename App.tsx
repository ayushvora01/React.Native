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

  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(() => {
    getAPIData()
  }, [])


  return (
    <ScrollView>
      <Text style={{
        fontSize: 30,
        color: 'black',
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>API Call</Text>
      {
        data.length ?
          data.map((item) =>
            <View style={{padding:20, borderBottomColor:'red', borderBottomWidth:7}}>
              <Text style={{fontSize:20,color:'black',backgroundColor:'grey'}}>Id: {item.id}</Text>
              <Text style={{fontSize:20,color:'black'}}>Title: {item.title}</Text>
              <Text style={{fontSize:20,color:'black'}}>Body: {item.body}</Text>
            </View>
          ) : null
      }
    </ScrollView>
  )
};

export default App;

