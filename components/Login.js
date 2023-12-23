import { useState } from 'react';
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
  
export const Login = (props) => {
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30, color:'black'}}>Login Screen</Text>
        <TextInput placeholder='Enter Your Name' 
        onChangeText={(text)=>setName(text)}
        style={{fontSize:20,borderRadius:10,borderWidth:3,borderColor:'black',margin:20}}/>
        <TextInput placeholder='Enter Your Age' 
        onChangeText={(text)=>setAge(text)}
        style={{fontSize:20,borderRadius:10,borderWidth:3,borderColor:'black',margin:20}}/>
        <Button title='Go to Home Page' 
        onPress={()=>props.navigation.navigate("Home",{name,age})} 
        color={'red'}/>
      </View>
    )
  }