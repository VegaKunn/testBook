import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Timer() {
  ///////// Banco de Dados

  const storeBronze = async value => {
    try {
      await AsyncStorage.setItem('prata', value);
    } catch (e) {
      // saving error
    }
  };
  const storePrata = async value => {
    try {
      await AsyncStorage.setItem('prata', value);
    } catch (e) {
      // saving error
    }
  };
  const storeOuro = async value => {
    try {
      await AsyncStorage.setItem('ouro', value);
    } catch (e) {
      // saving error
    }
  };

  /////// Visibilidade das Divs

  const [comecar, setComecar] = useState(true);
  const [escolher, setEscolher] = useState(false);
  const [naoDefinido, setNaoDefinido] = useState(false);
  const [escolherTempo, setEscolherTempo] = useState(false);

  ///////
  const [contador, setContador] = useState(false); ///////// start
  const [minu, setMinu] = useState(0);
  const [secu, setSecu] = useState(0);
  const [somar, setSomar] = useState(true);

  const bora = () => {
    setContador(!contador);
  };

  const recomecar = () => {
    setMinu(0);
    setSecu(0);
    setContador(false);
  };

  useEffect(() => {
    let intervalo = null;
    if (contador) {
      intervalo = setInterval(() => {
        somar ? setSecu(secu => secu + 1) : setSecu(secu => secu - 1);
      }, 1000);
    } else if (!contador && secu !== 0) {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [contador, secu]);

  /////////////////////////
  if (secu == 60) {
    setSecu(0);
    setMinu(minu => minu + 1);
  } else if (secu < 0) {
    setSecu(59);
    setMinu(minu => minu - 1);
  } else if (minu < 0) {
    setEscolherTempo(false);
    setComecar(true);
    recomecar();
  }

  return (
    <SafeAreaView style={es.corpo}>
      <View style={es.divTitulo}>
        <Text style={es.titulo}>Defina um tempo de leitutretra</Text>
      </View>
      <View>
        <Text style={{fontSize: 45, color: '#000'}}>{`${
          minu < 10 ? `0${minu}` : `${minu}`
        }:${secu < 10 ? `0${secu}` : `${secu}`}`}</Text>
      </View>
      <View style={es.botoes}>
        {comecar && (
          <TouchableHighlight
            style={es.comecar}
            onPress={() => {
              setEscolher(true);
              setComecar(false);
            }}>
            <Text style={{fontSize: 20}}>Começar</Text>
          </TouchableHighlight>
        )}
        {escolher && (
          <>
            <TouchableHighlight
              style={es.naoDef}
              onPress={() => {
                setNaoDefinido(true);
                setEscolher(false);
                setSomar(true);
              }}>
              <Text style={{fontSize: 20, color: '#000'}}>Não Definido</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={es.def}
              onPress={() => {
                setEscolher(false);
                setEscolherTempo(true);
                setSomar(false);
              }}>
              <Text style={{fontSize: 20, color: '#000'}}>Definido</Text>
            </TouchableHighlight>
          </>
        )}
        {escolherTempo && (
          <>
            <TouchableHighlight
              style={es.tempo}
              onPress={() => {
                setMinu(15);
                setEscolherTempo(false);
                setNaoDefinido(true);
                bora();
              }}>
              <Text style={{fontSize: 25, color: '#000'}}>15</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={es.tempo}
              onPress={() => {
                setEscolherTempo(false);
                setNaoDefinido(true);
                bora();
                setMinu(30);
              }}>
              <Text style={{fontSize: 25, color: '#000'}}>30</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={es.tempo}
              onPress={() => {
                setMinu(45);
                setEscolherTempo(false);
                setNaoDefinido(true);
                bora();
              }}>
              <Text style={{fontSize: 25, color: '#000'}}>45</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={es.tempo}
              onPress={() => {
                setMinu(60);
                setEscolherTempo(false);
                setNaoDefinido(true);
                bora();
              }}>
              <Text style={{fontSize: 25, color: '#000'}}>60</Text>
            </TouchableHighlight>
          </>
        )}
        {naoDefinido && (
          <>
            <>
              <TouchableHighlight
                style={es.naoDef}
                onPress={() => {
                  bora();
                }}>
                <Text style={{fontSize: 20, color: '#000'}}>
                  {contador ? 'Pause' : 'Start'}
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={es.def}
                onPress={() => {
                  recomecar();
                  setNaoDefinido(false);
                  setComecar(true);
                }}>
                <Text style={{fontSize: 20, color: '#000'}}>Reset</Text>
              </TouchableHighlight>
            </>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#169',

    alignItems: 'center',
    padding: 15,
  },
  divTitulo: {
    marginBottom: 20,
    marginTop: 50,
  },
  titulo: {
    color: '#000',
    fontSize: 22,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  comecar: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: '#3399ff',
  },
  naoDef: {
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    width: 150,
    padding: 15,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: '#00fa00',
  },
  def: {
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    width: 150,
    padding: 15,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: '#3399ff',
  },
  tempo: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: '#aa33ff',
  },
});
