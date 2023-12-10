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

  const [selectedRadio,setSelectedRadio]=useState(1);
  const skills = [
    {
      id: 1,
      name:"ABC",
    },
    {
      id: 2,
      name: "DEF",
    },
    {
      id: 3,
      name: "IJK"
    },
    {
      id: 4,
      name: "LMN"
    },
    {
      id: 5,
      name: "OPQ"
    },
  ]

  return (
    <View style={Styles.main}>
      <Text
        style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center', backgroundColor: 'yellow', color: 'black', marginBottom: 20 }}>
        Radio Button</Text>
      {
        skills.map((item,index)=><TouchableOpacity key={index} onPress={()=>setSelectedRadio(item.id)}>
        <View style={Styles.RadioWrapper}>
          <View style={Styles.Radio}>
            {
              selectedRadio==item.id ? <View style = {Styles.RadioBG}></View> : null
            }
          </View>
          <Text style={Styles.RadioText}>{item.name}</Text>
        </View>
      </TouchableOpacity>)
      }
    </View>
  );
}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  RadioText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Radio:{
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  RadioWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    
  },
  RadioBG:{
    height: 28,
    width: 28,
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 4,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  }
}
)

export default App;
