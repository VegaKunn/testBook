import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import InicioP from './pages/InicioPage';
import LivrosP from './pages/LivrosPage';
import PerfilP from './pages/PerfilPage';
import ShopP from './pages/ShopPage';
import TimerP from './pages/TimerPage';
import Icones from 'react-native-vector-icons/Feather';
import Icones2 from 'react-native-vector-icons/AntDesign';
import Icones3 from 'react-native-vector-icons/FontAwesome';
import Icones4 from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [valorBronze, setValorBronze] = useState(0);
  const [valorPrata, setValorPrata] = useState(0);
  const [valorOuro, setValorOuro] = useState(0);

  function MLivros() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LivrosP />
      </View>
    );
  }

  function Shop() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ShopP />
      </View>
    );
  }

  function Inicio() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <InicioP />
      </View>
    );
  }

  function Timer() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TimerP
          perfilOuro={setValorOuro}
          perfilPrata={setValorPrata}
          perfilBronze={setValorBronze}
        />
      </View>
    );
  }
  function Perfil() {
    return (
      <View>
        <PerfilP ou={valorOuro} pr={valorPrata} br={valorBronze} />
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Inicio">
        <Tab.Screen
          name="Livros"
          component={MLivros}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: '',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#00d2dd',
            headerTitleAlign: 'center',
            tabBarStyle: {
              backgroundColor: '#333',
            },
            tabBarActiveTintColor: '#0d0',
            tabBarInactiveTintColor: '#00d2dd',
            tabBarLabel: 'Livros',
            tabBarIcon: ({color}) => (
              <Icones3 name="book" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Loja"
          component={Shop}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: '',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#00d2dd',
            headerTitleAlign: 'center',
            tabBarStyle: {
              backgroundColor: '#333',
            },
            tabBarActiveTintColor: '#0d0',
            tabBarInactiveTintColor: '#00d2dd',
            tabBarLabel: 'Shop',
            tabBarIcon: ({color}) => (
              <Icones2 name="shoppingcart" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: '',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#00d2dd',
            headerTitleAlign: 'center',

            tabBarStyle: {
              backgroundColor: '#333',
            },
            tabBarActiveTintColor: '#0d0',
            tabBarInactiveTintColor: '#00d2dd',
            tabBarLabel: 'Inicio',
            tabBarIcon: ({color}) => (
              <Icones3 name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Timer"
          component={Timer}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: '',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#00d2dd',
            headerTitleAlign: 'center',
            tabBarStyle: {
              backgroundColor: '#333',
            },
            tabBarActiveTintColor: '#0d0',
            tabBarInactiveTintColor: '#00d2dd',
            tabBarLabel: 'Timer',
            tabBarIcon: ({color}) => (
              <Icones4 name="timer" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerShown: false,
            headerTransparent: true,
            title: '',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#00d2dd',
            headerTitleAlign: 'center',
            tabBarStyle: {
              backgroundColor: '#333',
            },
            tabBarActiveTintColor: '#0d0',
            tabBarInactiveTintColor: '#00d2dd',
            tabBarLabel: 'Perfil',
            tabBarIcon: ({color}) => (
              <Icones name="user" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
