import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lista from '../components/Lista';
export default function Inicio() {
  return <View style={es.corpo}></View>;
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000005', //'#14181f' '#1b1e23'
    padding: 10,
    alignItems: 'center',
  },
});
