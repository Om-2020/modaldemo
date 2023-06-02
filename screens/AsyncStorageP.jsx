import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const AsyncStorageP = () => {
    const[name,Setname] = useState('');

    const SetData = async () => {
        await AsyncStorage.setItem("name" , "OM" );
        console.log("Data is Saved")
    }

    const GetData = async () => {
        const data = await AsyncStorage.getItem("name");
        Setname(data);
    }
    
  return (
    <View>
      <Button title='Set data' onPress={SetData}></Button>
      <Text>{name}</Text>
      <Button title='Get Data' onPress={GetData}></Button>
    </View>
  )
}

export default AsyncStorageP;