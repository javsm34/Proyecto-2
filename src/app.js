import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';

import {AuthContext} from './contexts/AuthContext';
import usersData from '../assets/users.json';
import firebase from './database/firebase';

const RootStack = createStackNavigator();

export default function (){

  const auth = React.useMemo( () => ({
    login: async(user, pass) => {
      //alert('Login: ' + user +', '+ pass)
      let authorized = false;
      let exist = false;
      let mensaje = '';
      
      for(let i in usersData.users){
        if(usersData.users[i].user == user){
          exist = true;
          if(usersData.users[i].password == pass ){
            authorized = true;
          }
          break;
        }
      }
      if(exist==true){
        if(authorized==true){
          authorized = true;
        }
        else {
          throw Error('Contraseña incorrecta');
        }
      }
      else{
        throw Error('El usuario no existe');
      }
      return authorized;
    },
    register: async(name, email, password) => {
      //alert('Registrado: ' + email + ', ' + password );
      await firebase.db.collection('usuarios').add({
        nombre: name,
        email: email,
        password: password
      });
      alert("Usuario agregado");
    },
     registerSala: async(name, color, precio) => {
      //alert('Registrado: ' + email + ', ' + password );
      await firebase.db.collection('Salas').add({
        nombre_sala: name,
        color: color,
        precio: precio
      });
      alert("Sala Agregada");
    },
    registerHabitacion: async(name, accesorios, color, precio) => {
      //alert('Registrado: ' + email + ', ' + password );
      await firebase.db.collection('Habitacion').add({
        nombre_hab: name,
        accesorios: accesorios,
        color: color,
        precio: precio
      });
      alert("Articulo de Habitacion Agregado");
    },
    registerComedor: async(name, color, tipmadera, precio) => {
      //alert('Registrado: ' + email + ', ' + password );
      await firebase.db.collection('Comedor').add({
        nombre_comedor: name,
        color: color,
        tipo_madera: tipmadera,
        precio: precio
      });
      alert("Articulo de Habitacion Agregado");
    },
    registerBath: async(name, accesorios, tipoAccesorios, precio) => {
      //alert('Registrado: ' + email + ', ' + password );
      await firebase.db.collection('Bath').add({
        nombre_bath: name,
        accesorios: accesorios,
        tipo_accesorios: tipoAccesorios,
        precio: precio
      });
      alert("Articulo de Baño Agregado");
    }

  

  }),
    [],
  );


  return(
    <AuthContext.Provider value={auth} >
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}