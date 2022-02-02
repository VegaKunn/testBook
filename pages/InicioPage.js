import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lista from '../components/Lista';
export default function Inicio() {
  const [baka, setBaka] = useState();

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('stor', 'mamaco aranha');
    } catch (e) {
      alert(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.removeItem('stor');
      setBaka(value);
    } catch (e) {
      // error reading value
    }
  };
  /* 
  storeData('muito estranho');
  getData();
 */

  console.log(baka);
  return (
    <View style={es.corpo}>
      <TouchableHighlight
        style={{backgroundColor: '#fef', width: 100}}
        onPress={() => {
          storeData();
        }}>
        <Text>Salva</Text>
      </TouchableHighlight>
      <Text style={{fontSize: 40}}>{baka}</Text>

      <TouchableHighlight
        style={{backgroundColor: '#fef', width: 100}}
        onPress={() => {
          getData();
        }}>
        <Text>Ler</Text>
      </TouchableHighlight>
    </View>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
  },
});
