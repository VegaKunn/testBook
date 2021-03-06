import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
  BackHandler,
  StyleSheet,
  LogBox,
} from 'react-native';

import {useBackHandler} from '@react-native-community/hooks';

import CardLivros from '../components/CardLivros';
import CategoriasShop from '../components/CategoriasShop';
import Lista from '../components/Lista';
import TodosArrays from '../store/TodosArrays';

export default function Shop() {
  LogBox.ignoreAllLogs();
  const [alternador, setAlternador] = useState(false);
  const [seletor, setSeletor] = useState(0);

  /*
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      setAlternador(false);
      setSeletor(0);
      return () => BackHandler.remove();
    });
  }, []);
*/
  //

  useBackHandler(() => {
    setAlternador(false);
    setSeletor(0);
    return true;
  });
  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView showsVerticalScrollIndicator={false} style={es.rolagem}>
        <CardLivros mudar={setAlternador} />
        {alternador ? (
          <Lista produto={TodosArrays[seletor]} />
        ) : (
          <CategoriasShop setSeletor={setSeletor} mudar={setAlternador} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000005', // '#1b1e23'
    alignItems: 'center',
  },
  rolagem: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  texto: {
    color: '#eee',
    fontSize: 16,
  },
});
