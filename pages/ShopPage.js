import React from 'react';
import {View, SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import CardLivros from '../components/CardLivros';
import CategoriasShop from '../components/CategoriasShop';

export default function Shop() {
  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView style={es.rolagem}>
        <CardLivros />
        <CategoriasShop />
      </ScrollView>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
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
