import * as React from 'react';
import {useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Heading} from  '../components/Heading.js';
import {Input} from '../components/Input.js';
import {Button} from '../components/Button.js';
import {TextButton} from '../components/TextButton.js';
import {IconButton} from '../components/IconButton';

import {AuthContext} from '../contexts/AuthContext';
import firebase from '../database/firebase';


export function UserDetailScreen({route, navigation}) {

  const id = route.params.userId;
  console.log(id);
  const [name, setName] = React.useState('');
  const [email, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const getUserById = async(id) => {
    const dbRef = firebase.db.collection('usuarios').doc(id);
    const doc = await dbRef.get();
    console.log(doc.data());
    const user = doc.data();
    setName(user.nombre);
    setMail(user.email);
    setPassword(user.password);
  }

  useEffect(()=>{
    getUserById(id);
  }, [])

  const deleteUser = async(idUser) => {
    const dbRef = firebase.db.collection('usuarios').doc(idUser);
    await dbRef.delete();
    alert('Usuario eliminado');
    navigation.navigate('Userslist');
  }

   const updateUser = async(idUser) => {
    const dbRef = firebase.db.collection('usuarios').doc(idUser);
    await dbRef.set({
      nombre: name,
      email: email,
      password: password,
    });
    alert('Datos Actualizados');
    
  }



  return (
  <View style={styles.container}>
    <IconButton
        name="arrow-back-circle-outline"
        size={36}
        color={'black'}
        style={styles.icon}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Heading content='Información del usuario' style={styles.heading} />
      <Input 
        style={styles.input}
        placeholder={'Nombre'}
        value={name}
        onChangeText={setName}
      />
      <Input 
        style={styles.input}
        placeholder={'Correo electrónico'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setMail}
      />
      <Input 
        style={styles.input} 
        placeholder={'Contraseña'} 
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button text='Actualizar' style={styles.button} onPress={()=>{
        updateUser(id);
      }}
        /> 
      <TextButton  text='Eliminar' onPress = {()=>{
        deleteUser(id);
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  input: {
    marginVertical: 10
  },
  button: {
    marginVertical: 20
  },
  heading:{
    marginBottom: 20
  },
  icon: {
    position: 'absolute',
    top: 30,
    left: 20,
  }
});