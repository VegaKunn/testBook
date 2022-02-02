import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {card} from '../style/cardClickCss';

export default function CardLivros(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.mudar(false);
      }}
      style={card.tamanho2}>
      <Text style={{fontSize: 40, color: '#eee'}}>SHOP</Text>
    </TouchableOpacity>
  );
}
