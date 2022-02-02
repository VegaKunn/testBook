import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default function Lista(props) {
  let novoArray = props.produto;
  console.log(novoArray);
  /*

 */

  return (
    <View>
      <FlatList
        data={novoArray}
        renderItem={({item}) => {
          return (
            <>
              <View>
                <Text style={{fontSize: 30, color: '#fff'}}>{item.nome}</Text>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}
