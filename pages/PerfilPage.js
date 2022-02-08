import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Text,
  StyleSheet,
  FlatList,
  BackHandler,
  LogBox,
} from 'react-native';
import Icones from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
export default function Perfil(props) {
  LogBox.ignoreAllLogs();
  const [valorBronze, setValorBronze] = useState();
  const [valorPrata, setValorPrata] = useState();
  const [valorOuro, setValorOuro] = useState();
  const getData = async () => {
    try {
      let bronze = await AsyncStorage.getItem('bronze');
      let prata = await AsyncStorage.getItem('prata');
      let ouro = await AsyncStorage.getItem('ouro');
      if (bronze == null) {
        bronze = 0;
      }
      if (prata == null) {
        prata = 0;
      }
      if (ouro == null) {
        ouro = 0;
      }
      setValorBronze(bronze);
      setValorPrata(prata);
      setValorOuro(ouro);
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const [lidos, setLidos] = useState(false);
  const [progresso, setProgresso] = useState(false);

  /*
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      setLidos(false);
      setProgresso(false);
      return () => BackHandler.remove();
    });
  }, []);
  */

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
          <View style={es.alinharDiv}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icones name="trophy" size={30} color="#cd7f32" />
              <Text style={es.texto}>Bronze</Text>
              <Text style={es.texto}>
                {valorBronze > props.br ? valorBronze : props.br}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icones name="trophy" size={30} color="#cdd5e0" />
              <Text style={es.texto}>Prata</Text>
              <Text style={es.texto}>
                {valorPrata > props.pr ? valorPrata : props.pr}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icones name="trophy" size={30} color="#ffd700" />
              <Text style={es.texto}>Ouro</Text>
              <Text style={es.texto}>
                {valorOuro > props.ou ? valorOuro : props.ou}
              </Text>
            </View>
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
            getData();
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
    // backgroundColor: '#eee',
    alignItems: 'center',
  },
  rolagem: {
    width: '100%',
    backgroundColor: '#000005', // '#14181f' '#1b1e23'
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
    borderColor: '#e5e3e2',
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
    backgroundColor: '#000005', // '#0463ca'
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
    backgroundColor: '#000005', //'#3b287b'
    flexDirection: 'row',
  },
  alinharDiv: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
  },
  titulos: {
    color: '#e5e3e2',
    fontSize: 30,
    padding: 10,
  },
  fonteStatus: {
    color: '#e5e3e2',
    fontSize: 20,
  },
  texto: {
    color: '#e5e3e2',
    fontSize: 16,
  },
});
