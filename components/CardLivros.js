import React from 'react';
import {View, Text} from 'react-native';
import {card} from '../style/cardClickCss';

export default function CardLivros() {
  return (
    <View style={card.tamanho2}>
      <Text style={{fontSize: 40, color: '#eee'}}>SHOP</Text>
    </View>
  );
}
