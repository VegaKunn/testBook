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
  function limparTudo() {
    AsyncStorage.removeItem('bronze');
  }

  ///////// Banco de Dados
  const [testando, setTestando] = useState(0);
  const [trofeu, setTrofeu] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let abc;
      let prata;
      let ouro;
      abc = await AsyncStorage.getItem('bronze');
      prata = await AsyncStorage.getItem('prata');
      ouro = await AsyncStorage.getItem('ouro');
      let bronzeN = Number(abc);
      setTestando(bronzeN);
      // console.log(abc);
      // console.log(prataAki);
      // console.log(ouroAki);
    } catch (e) {
      // error reading value
    }
  };

  const storeBronze = async value => {
    try {
      let bibi = testando + 1;
      console.log(bibi);
      const hihi = bibi.toString();
      await AsyncStorage.setItem('bronze', hihi);
      getData();
    } catch (e) {
      // saving error
    }
  };
  const storePrata = async value => {
    // getData();
    try {
      let bibi = testando + 1;
      const hihi = bibi.toString();
      await AsyncStorage.setItem('prata', hihi);
      getData();
    } catch (e) {
      // saving error
    }
  };
  const storeOuro = async value => {
    //   getData();
    try {
      const guardarValor = ouroAki + value;
      console.log('3 ' + guardarValor);
      await AsyncStorage.setItem('ouro', guardarValor);
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

  const recomecar = valor => {
    console.log(valor);
    setMinu(0);
    setSecu(0);
    setContador(false);

    if (valor == 'bronze') {
      storeBronze();
    } else if (valor == 'prata') {
      storePrata();
    } else if (valor == 'ouro') {
      storeOuro();
    }
  };

  useEffect(() => {
    let intervalo = null;
    if (contador) {
      intervalo = setInterval(() => {
        somar ? setSecu(secu => secu + 1) : setSecu(secu => secu - 1);
      }, 1);
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
    setNaoDefinido(false);
    setComecar(true);
    recomecar(trofeu);
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
                setTrofeu('bronze');
                //  console.log(trofeu);
              }}>
              <Text style={{fontSize: 25, color: '#000'}}>15</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={es.tempo}
              onPress={() => {
                storeBronze();
                // getData();
                // limparTudo();
                /* 
                setEscolherTempo(false);
                setNaoDefinido(true);
                bora();
                setMinu(30);
                trofeu = 'bronze';
                */
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
                trofeu = 'prata';
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
                trofeu = 'ouro';
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
