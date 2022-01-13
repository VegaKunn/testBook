import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Inicio() {
  /*
const Salvar = async (chave, valor) => {


    try {
      await AsyncStorage.setItem(chave, valor);
    } catch (a) {
      alert('err' + a);
    }
  };
  const Ler = async chave => {
    const teste = await AsyncStorage.getItem(chave);
    setBaka(teste);
  };

  Salvar('teste', 'é parece que funcionou');
  Ler('teste');


*/

  return (
    <View style={es.corpo}>
      <Text>152</Text>
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
