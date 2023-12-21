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
  
export const Home =(props)=>{
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30, color:'black'}}>Home Screen</Text>
      </View>
    )
  }