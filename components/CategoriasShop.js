import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {ShopCss} from '../style/ShopSection';

export default function CategoriasShop(props) {
  const selecionar = props.setSeletor;
  const mudar = props.mudar;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          selecionar(0);
          mudar(true);
        }}
        style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Aventura</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          selecionar(1);
          mudar(true);
        }}
        style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Suspense</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          selecionar(2);
          mudar(true);
        }}
        style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Ficção</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          selecionar(3);
          mudar(true);
        }}
        style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Romance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          selecionar(4);
          mudar(true);
        }}
        style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Fantasia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          selecionar(5);
          mudar(true);
        }}
        style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Finanças</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          selecionar(6);
          mudar(true);
        }}
        style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Desenvolvimento Pessoal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          selecionar(7);
          mudar(true);
        }}
        style={ShopCss.divClicavel}>
        <Text style={ShopCss.texto}>Politicos</Text>
      </TouchableOpacity>
    </View>
  );
}
