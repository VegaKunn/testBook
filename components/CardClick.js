import React from 'react';
import {View, Text} from 'react-native';
import {card} from '../style/cardClickCss';

export default function CardClick() {
  return (
    <View style={card.tamanho}>
      <View style={{width: '50%', margin: 10, overflow: 'hidden'}}>
        <Text style={{fontSize: 15}}>Harry Potter</Text>
      </View>
      <View style={{width: '10%'}}>
        <Text style={{fontSize: 15}}>7.5</Text>
      </View>
      <View style={{width: '35%'}}>
        <Text style={{fontSize: 15}}>Page: 1300/2000</Text>
      </View>
    </View>
  );
}

// Atribuir cores as notas
