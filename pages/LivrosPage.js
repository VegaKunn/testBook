import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  LogBox,
  BackHandler,
} from 'react-native';

import {useBackHandler} from '@react-native-community/hooks';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icones from 'react-native-vector-icons/Feather';
import Icones2 from 'react-native-vector-icons/AntDesign';

export default function Livros() {
  //  console.disableYellowBox = true;
  LogBox.ignoreAllLogs();
  // Livros aqui

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('allLivros', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    const teste = [];

    try {
      const jsonValue = await AsyncStorage.getItem('allLivros');
      const recebedor = jsonValue != null ? JSON.parse(jsonValue) : teste;

      setLivros(recebedor);
      let teste2 = recebedor.length + 1;

      setCriarId(teste2);
      console.log(teste2);
    } catch (e) {
      // error reading value
    }
  };

  const [lista, setLista] = useState(true); // quando true mostra a lista de livros
  const [nomeLivro, setNomeLivro] = useState(null); //nome do livro
  const [nPaginas, setNPaginas] = useState(null); // numero de paginas totais do livro
  const [categoria, setCategoria] = useState('Categoria'); // categoria do livro
  const [criarId, setCriarId] = useState(''); // cria um ID
  const [paginaAtual, setPaginaAtual] = useState(0); // mostra pagina atual
  const [notas, setNotas] = useState(''); // faz comentarios
  const [abrir, setAbrir] = useState(false); // se true mostra lista de generos
  const [salvar, setSalvar] = useState(true); // se true mostra botao salvar
  const [adicionar, setAdicionar] = useState(false); // se true mostra aba para cadastro
  const [ocultarNotas, setOcultarNotas] = useState(false);
  const [baka, setBaka] = useState('');
  /*
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      setLista(true);
      setAbrir(false);
      setSalvar(true);
      setAdicionar(false);
      setOcultarNotas(false);
      setBaka('');
      return () => BackHandler.remove();
    });
  }, []);
*/

  useBackHandler(() => {
    setLista(true);
    setAbrir(false);
    setSalvar(true);
    setAdicionar(false);
    setOcultarNotas(false);
    setBaka('');
    return true;
  });

  const [livros, setLivros] = useState([]);
  // livros = [];
  function limparTudo() {
    AsyncStorage.removeItem('allLivros');
  }

  useEffect(() => {
    getData();

    // limparTudo();
    console.log(livros);
  }, []);

  /////////
  const allCategorias = [
    {nome: 'Aventura'},
    {nome: 'Suspense'},
    {nome: 'Fic????o'},
    {nome: 'Romance'},
    {nome: 'Fantasia'},
    {nome: 'Finan??as'},
    {nome: 'Des. Pessoal'},
    {nome: 'Politica'},
  ];

  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView style={es.rolagem}>
        <TouchableHighlight
          style={es.toque}
          onPress={() => {
            setAdicionar(!adicionar);
            setLista(!lista);
          }}>
          <View style={es.addDiv}>
            <View style={es.divTex}>
              <Text style={{fontSize: 25, color: '#eee'}}>
                Adicionar nova leitura
              </Text>
            </View>
            <View style={es.divPlus}>
              <Text style={{fontSize: 45, color: '#ddd'}}>+</Text>
            </View>
          </View>
        </TouchableHighlight>

        {/* ///////////////////////////////////////////////////////////////////////*/}
        {adicionar && (
          <View style={es.registro}>
            <View style={es.contDiv}>
              <View style={es.regDiv}>
                <Text style={{fontSize: 28}}>Livro:</Text>
              </View>
              <View style={{width: '62%'}}>
                <TextInput
                  autoFocus
                  autoCapitalize="words"
                  style={es.inpt}
                  value={nomeLivro}
                  onChangeText={value => {
                    setNomeLivro(value);
                  }}
                />
              </View>
            </View>

            <View style={es.contDiv}>
              <View style={es.regDiv}>
                <Text style={{fontSize: 28}}>Paginas :</Text>
              </View>
              <View
                style={{
                  width: '62%',
                  alignItems: 'flex-end',
                }}>
                <TextInput
                  maxLength={4}
                  keyboardType="numeric"
                  style={es.inpt2}
                  value={nPaginas}
                  onChangeText={value => {
                    setNPaginas(Number.parseInt(value));
                  }}
                />
              </View>
            </View>

            <View style={es.contDiv}>
              <View style={es.regDiv}>
                <Text style={{fontSize: 28}}>Genero:</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setAbrir(!abrir);
                  setSalvar(!salvar);
                }}
                style={{
                  width: '62%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#eee',
                  borderRadius: 10,
                  borderColor: '#000',
                  borderWidth: 1,
                }}>
                <Text style={es.texto}>{categoria}</Text>
              </TouchableOpacity>
            </View>

            {salvar && (
              <TouchableHighlight
                style={es.salvarEstilo}
                onPress={() => {
                  if (
                    nomeLivro !== null &&
                    nPaginas > 0 &&
                    nPaginas < 10000 &&
                    categoria !== 'categoria'
                  ) {
                    livros.push({
                      id: livros.length < 1 ? '1' : criarId,
                      nome: nomeLivro,
                      genero: categoria,
                      paginas: nPaginas,
                      lidas: '0',
                    });
                    console.log(livros);
                    console.log(livros.length);
                    storeData(livros);
                    getData();

                    setAdicionar(false);
                    setLista(true);
                  }

                  setNomeLivro(null);
                  setNPaginas(null);
                  setCategoria('categoria');
                }}>
                <Text style={{fontSize: 25, color: '#fff'}}>Salvar</Text>
              </TouchableHighlight>
            )}
            <View style={es.divBaixa}>
              {abrir && (
                <View style={es.allCateg}>
                  <FlatList
                    data={allCategorias}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setAbrir(false);
                            setSalvar(true);
                            setCategoria(item.nome);
                          }}
                          style={{
                            width: '100%',
                            alignItems: 'center',
                            padding: 5,
                          }}>
                          <Text style={{fontSize: 20, color: '#000'}}>
                            {item.nome}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          </View>
        )}

        {/* Quando true mostra a lista de livros */}
        {lista && (
          <View style={{width: '100%'}}>
            <FlatList
              data={livros}
              renderItem={({item}) => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        if (baka != item.id) {
                          setBaka(item.id);
                        } else if (baka == item.id) {
                          setBaka('');
                        }
                      }}>
                      <View style={es.addDiv}>
                        <View style={{maxWidth: '55%', minWidth: '55%'}}>
                          <Text numberOfLines={1} style={es.texto}>
                            {item.nome}
                          </Text>
                        </View>
                        <View style={{maxWidth: '30%', minWidth: '15%'}}>
                          <Text style={es.texto}>{item.genero}</Text>
                        </View>
                        <View style={{maxWidth: '15%'}}>
                          <Text style={es.texto}>
                            {(item.lidas / item.paginas).toFixed(2) * 100}%
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    {baka == item.id && (
                      <View style={es.registro2}>
                        <View style={es.livroStatus}>
                          <Text style={es.texto}>{item.nome}</Text>
                          <Text style={es.texto}>
                            Ultima Pag.: {item.lidas}
                          </Text>
                        </View>
                        <View style={es.livroStatus}>
                          <View>
                            <Text style={es.texto}>Pagina atual:</Text>
                          </View>

                          <TextInput
                            maxLength={4}
                            keyboardType="numeric"
                            style={es.inpt3}
                            value={paginaAtual}
                            onChangeText={value => {
                              setPaginaAtual(Number.parseInt(value));
                            }}
                          />
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            setOcultarNotas(!ocultarNotas);
                          }}
                          style={es.livroStatus2}>
                          <Text style={es.texto2}>
                            Adicionar notas sobre o livro! :)
                          </Text>
                          <Text style={es.texto2}>Click Aqui!</Text>
                        </TouchableOpacity>
                        {ocultarNotas && (
                          <TextInput
                            placeholder="Precione Enter para Quebrar linha e Espa??o + salvar para apagar as notas"
                            multiline={true}
                            style={es.inpt4}
                            value={notas}
                            onChangeText={value => {
                              setNotas(value);
                            }}
                          />
                        )}
                        <View style={es.livroStatus2}>
                          <View>
                            <Text style={{fontSize: 30, color: '#000'}}>
                              Notas
                            </Text>
                          </View>
                          <View style={{width: '100%', marginTop: 10}}>
                            <Text style={{color: '#000', fontSize: 20}}>
                              {item.notas}
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '100%',
                              marginTop: 10,
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                            }}>
                            <TouchableOpacity
                              onPress={() => {
                                const apagarItem = item.id - 1;
                                livros.splice(apagarItem, 1);
                                const livrosAtualizados = [];
                                livros.map((i, index) => {
                                  const novoID = index + 1;
                                  let LA = {
                                    id: novoID,
                                    genero: i.genero,
                                    lidas: i.lidas,
                                    nome: i.nome,
                                    paginas: i.paginas,
                                  };
                                  livrosAtualizados.push(LA);
                                });
                                storeData(livrosAtualizados);
                                getData();
                              }}
                              style={{
                                width: 50,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 500,
                                marginLeft: 10,
                                backgroundColor: '#e00',
                              }}>
                              <Icones2
                                name="delete"
                                style={{
                                  fontSize: 40,
                                  color: '#000',
                                }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => {
                                if (notas != '') {
                                  item.notas = notas;
                                }
                                if (paginaAtual !== '') {
                                  item.lidas = paginaAtual;
                                }

                                setNotas('');
                                setPaginaAtual('');
                                storeData(livros);
                                getData();
                              }}
                              style={{
                                width: 50,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 500,
                                marginLeft: 10,
                                backgroundColor: '#0c0',
                              }}>
                              <Icones
                                name="save"
                                style={{
                                  fontSize: 40,
                                  color: '#000',
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    )}
                  </>
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
    backgroundColor: '#000005', //252525 '#1b1e23'
    alignItems: 'center',
  },
  rolagem: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignContent: 'center',
  },
  registro: {
    width: '100%',
    padding: 15,
    paddingTop: 30,
    marginTop: 20,
    backgroundColor: '#858585', //'#0c7'
    borderColor: '#000',
    borderRadius: 20,
    borderWidth: 8,
  },
  registro2: {
    width: '100%',
    padding: 15,
    backgroundColor: '#989ca4', // '#8fe' '#4d4d4d' '#282c34'
    borderColor: '#000',
    borderRadius: 20,
    borderWidth: 2,
  },
  regDiv: {
    minWidth: '38%',
    height: 50,
  },
  contDiv: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  inpt: {
    color: '#000',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    width: '100%',
  },
  inpt2: {
    color: '#000',
    textAlign: 'center',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    width: '40%',
  },
  inpt3: {
    color: '#000',
    textAlign: 'center',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    width: 90,
    height: 40,
  },
  inpt4: {
    fontSize: 18,
    color: '#000',
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    width: '100%',
    minHeight: 100,
  },
  divBaixa: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
  },
  allCateg: {
    width: '62%',
    borderColor: '#000',
    borderWidth: 1,
    borderColor: '#000',

    borderRadius: 10,
    backgroundColor: '#ddd',
    overflow: 'scroll',
  },
  addDiv: {
    width: '100%',
    height: 80,
    borderRadius: 15,
    // borderColor: '#00f',
    // borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#4f5659', //'#3399ff' '#282c34' '#666d7d'
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  livroDiv: {
    width: '100%',
    height: 80,
    borderRadius: 15,
    borderColor: '#00f',
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#3399ff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  livroStatus: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
  },
  livroStatus2: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    flexDirection: 'column',
  },
  divTex: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divPlus: {
    minWidth: 60,
    minHeight: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  salvarEstilo: {
    width: '100%',
    height: 50,
    backgroundColor: '#191919', //'#3399ff'
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 15,
  },
  texto: {
    color: '#000',
    fontSize: 18,
  },
  texto2: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'italic',
  },
  toque: {
    width: '100%',
    height: 80,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
