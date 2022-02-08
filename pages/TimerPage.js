import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  StyleSheet,
  LogBox,
  BackHandler,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Timer(props) {
  LogBox.ignoreAllLogs();
  function limparTudo() {
    AsyncStorage.removeItem('bronze');
    AsyncStorage.removeItem('prata');
    AsyncStorage.removeItem('ouro');
  }

  ///////// Banco de Dados
  const [testando, setTestando] = useState(0);
  const [prataFixo, setPrataFixo] = useState(0);
  const [ouroFixo, setOuroFixo] = useState(0);
  const [trofeu, setTrofeu] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let bronze;
      let prata;
      let ouro;
      bronze = await AsyncStorage.getItem('bronze');
      prata = await AsyncStorage.getItem('prata');
      ouro = await AsyncStorage.getItem('ouro');
      if (bronze == null) {
        bronze = 0;
      }
      if (prata == null) {
        prata = 0;
      }
      if (ouro == null) {
        ouro = 0;
      }

      let bronzeN = Number(bronze);
      let prataN = Number(prata);
      let ouroN = Number(ouro);

      props.perfilOuro(ouro);
      props.perfilPrata(prata);
      props.perfilBronze(bronze);
      setTestando(bronzeN);
      setPrataFixo(prataN);
      setOuroFixo(ouroN);
    } catch (e) {
      // error reading value
    }
  };

  const storeBronze = async value => {
    try {
      let valorSomado = testando + 1;
      console.log(valorSomado);
      const valorString = valorSomado.toString();
      await AsyncStorage.setItem('bronze', valorString);
      getData();
    } catch (e) {
      // saving error
    }
  };
  const storePrata = async value => {
    // getData();
    try {
      let bibi = prataFixo + 1;
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
      let valorSomado = ouroFixo + 1;
      const valorString = valorSomado.toString();
      await AsyncStorage.setItem('ouro', valorString);
      getData();
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

  ////////// Botão Voltar

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      recomecar();
      setEscolherTempo(false);
      setEscolher(false);
      setNaoDefinido(false);
      setComecar(true);
      return () => BackHandler.remove();
    });
  }, []);

  const bora = () => {
    setContador(!contador);
  };

  const recomecar = valor => {
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
        <Text style={{fontSize: 45, color: '#fff'}}>{`${
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
            <Text style={{fontSize: 20, color: '#eee'}}>Começar</Text>
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
                setTrofeu('');
              }}>
              <Text style={{fontSize: 25, color: '#fff'}}>15</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={es.tempo}
              onPress={() => {
                setEscolherTempo(false);
                setNaoDefinido(true);
                bora();
                setMinu(30);
                setTrofeu('bronze');
              }}>
              <Text style={{fontSize: 25, color: '#fff'}}>30</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={es.tempo}
              onPress={() => {
                setMinu(45);
                setEscolherTempo(false);
                setNaoDefinido(true);
                bora();
                setTrofeu('prata');
              }}>
              <Text style={{fontSize: 25, color: '#fff'}}>45</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={es.tempo}
              onPress={() => {
                setMinu(60);
                setEscolherTempo(false);
                setNaoDefinido(true);
                bora();
                setTrofeu('ouro');
              }}>
              <Text style={{fontSize: 25, color: '#fff'}}>60</Text>
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
                  getData();
                  setTrofeu('');
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
    backgroundColor: '#000005', // '#14181f' '#1b1e23'

    alignItems: 'center',
    padding: 15,
  },
  divTitulo: {
    marginBottom: 20,
    marginTop: 50,
  },
  titulo: {
    color: '#fff',
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
    backgroundColor: '#667788', // '#3399ff'
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
    backgroundColor: '#696969', // '#00fa00'
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
    backgroundColor: '#9f9f9f', // '#3399ff'
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
    backgroundColor: '#373743', // '#aa33ff'
  },
});
