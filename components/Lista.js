import React, {useState} from 'react';
import {View, TouchableOpacity, Text, FlatList, Linking} from 'react-native';
import {ShopCss} from '../style/ShopSection';

export default function Lista(props) {
  let novoArray = props.produto;
  const [validaNome, setValidaNome] = useState('');
  const [renderStatus, SetRenderStatus] = useState(false);
  /*

 */

  return (
    <View>
      <FlatList
        data={novoArray}
        keyExtractor={novoArray.id}
        renderItem={({item}) => {
          let v = item.id;

          return (
            <>
              <TouchableOpacity
                onPress={() => {
                  if (validaNome == v) {
                    setValidaNome('');
                  } else if (validaNome != v) {
                    setValidaNome(v);
                  }
                }}>
                <View style={ShopCss.listaClicavel}>
                  <Text numberOfLines={1} style={{fontSize: 28, color: '#fff'}}>
                    {item.nome}
                  </Text>
                </View>
              </TouchableOpacity>
              {validaNome == v ? (
                <View style={ShopCss.livroSinopse}>
                  <View style={ShopCss.alinharCentro}>
                    <Text style={ShopCss.texto4}>{item.nome}</Text>
                  </View>
                  <View style={ShopCss.alinharS}>
                    <Text style={ShopCss.texto2}>Autor: {item.Autor}</Text>
                  </View>
                  <View style={ShopCss.alinharS}>
                    <Text style={ShopCss.texto2}>{item.genero}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(item.link);
                      }}>
                      <Text style={ShopCss.texto5}>CONFIRA O VALOR</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={ShopCss.alinharCentro}>
                    <Text style={ShopCss.texto4}>Sinopse</Text>
                  </View>
                  <View style={ShopCss.alinharS}>
                    <Text style={ShopCss.texto3}> {item.sinopse}</Text>
                  </View>
                </View>
              ) : (
                <></>
              )}
            </>
          );
        }}
      />
    </View>
  );
}
