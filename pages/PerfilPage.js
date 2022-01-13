import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const teste = [
  {id: '1', nome: 'Harry Pottery', nota: '10', pagi: '1000/1000'},
  {
    id: '2',
    nome: 'Senhor dos Anéis',
    nota: '10',
    pagi: '1000/1000',
  },
  {id: '3', nome: 'Livro Generico', nota: '6.0', pagi: '1000/1000'},
  {id: '4', nome: 'O Capital', nota: '0.2', pagi: '1000/1000'},
  {id: '5', nome: 'A vida de Nando Moura', nota: '70', pagi: '1000/1000'},
];

const baka = teste;
export default function Perfil() {
  const [lidos, setLidos] = useState(false);
  const [progresso, setProgresso] = useState(false);

  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView showsVerticalScrollIndicator={false} style={es.rolagem}>
        <View style={es.statusDiv}>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={es.titulos}>Status</Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={es.fonteStatus}>Livros Lidos: </Text>
            <Text style={es.fonteStatus}>Paginas Totais: </Text>
            <Text style={es.fonteStatus}>Maior Q/P Hora: </Text>
            <Text style={es.fonteStatus}>Livros Lidos Aventura: </Text>
            <Text style={es.fonteStatus}>Livros Lidos Classicos: </Text>
            <Text style={es.fonteStatus}>Livros Lidos Desen. Pessoal: </Text>
            <Text style={es.fonteStatus}>Livros Lidos Horror: </Text>
            <Text style={es.fonteStatus}>Livros Lidos Romance: </Text>
            <Text style={es.fonteStatus}>Livros Lidos Tecnicos: </Text>
          </View>
        </View>
        <TouchableHighlight
          style={es.cardGenerico}
          onPress={() => {
            setLidos(!lidos);
          }}>
          <Text style={{fontSize: 25, color: '#fff'}}>Livros Lidos</Text>
        </TouchableHighlight>
        {lidos && (
          <View style={es.statusDiv}>
            <FlatList
              keyExtractor={baka.id}
              data={baka}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      maxWidth: '100%',
                      margin: 15,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{maxWidth: '60%', minWidth: '55%'}}>
                      <Text numberOfLines={1} style={es.texto}>
                        {item.nome}
                      </Text>
                    </View>
                    <View style={{maxWidth: '15%', minWidth: '15%'}}>
                      <Text style={es.texto}>{item.nota}</Text>
                    </View>
                    <View style={{maxWidth: '30%'}}>
                      <Text style={es.texto}>{item.pagi}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        )}
        <TouchableHighlight
          style={es.cardGenerico2}
          onPress={() => {
            setProgresso(!progresso);
          }}>
          <Text style={{fontSize: 25, color: '#fff'}}>Para Terminar</Text>
        </TouchableHighlight>
        {progresso && (
          <View style={es.statusDiv}>
            <FlatList
              keyExtractor={baka.id}
              data={baka}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      maxWidth: '100%',
                      margin: 15,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{maxWidth: '60%', minWidth: '55%'}}>
                      <Text numberOfLines={1} style={es.texto}>
                        {item.nome}
                      </Text>
                    </View>
                    <View style={{maxWidth: '15%', minWidth: '15%'}}>
                      <Text style={es.texto}>{item.nota}</Text>
                    </View>
                    <View style={{maxWidth: '30%'}}>
                      <Text style={es.texto}>{item.pagi}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  rolagem: {
    width: '100%',

    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignContent: 'center',
  },
  statusDiv: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    minHeight: 50,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 15,
  },
  cardGenerico: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#09b1ec',
    backgroundColor: '#0463ca',
    flexDirection: 'row',
  },
  cardGenerico2: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#7e4eff',
    backgroundColor: '#3b287b',
    flexDirection: 'row',
  },
  titulos: {
    color: '#000',
    fontSize: 30,
    padding: 10,
  },
  fonteStatus: {
    color: '#000',
    fontSize: 20,
  },
  texto: {
    color: '#000',
    fontSize: 16,
  },
});
