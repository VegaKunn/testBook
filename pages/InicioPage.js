import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lista from '../components/Lista';

export default function Inicio() {
  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView style={es.rolagem}>
        <View style={es.comunidade}>
          <Text style={es.titulos}>V-Book</Text>
        </View>
        <View style={es.comunidade2}>
          <Text style={es.titulos2}>comunidade</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000005', //'#14181f' '#1b1e23'
    padding: 10,
    alignItems: 'center',
  },
  rolagem: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignContent: 'center',
  },
  comunidade: {
    height: 300,
    marginTop: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 30,
    borderColor: '#fff',
  },
  comunidade2: {
    height: 80,
    marginTop: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#fff',
  },
  titulos: {
    color: '#e5e3e2',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
  },
  titulos2: {
    color: '#e5e3e2',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
});
