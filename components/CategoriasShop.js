import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ShopCss} from '../style/ShopSection';

/*
 

*/

export default function CategoriasShop() {
  return (
    <View>
      <TouchableOpacity style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Ação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Suspense</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Ficção</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Romance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Fantasia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Finanças</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Desenvolvimento Pessoal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Profissionalizante</Text>
      </TouchableOpacity>
    </View>
  );
}
