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


export function ComedorDetailScreen({route, navigation}) {

  const id = route.params.userId;
  console.log(id);
  const [nombre_comedor, setName] = React.useState('');
  const [color, setColor] = React.useState('');
  const [precio, setPrecio] = React.useState('')
  const [tipo_madera, setTipmadera] = React.useState('');

  const getUserById = async(id) => {
    const dbRef = firebase.db.collection('Comedor').doc(id);
    const doc = await dbRef.get();
    console.log(doc.data());
    const user = doc.data();
    setName(user.nombre_comedor);
    setColor(user.color);
    setPrecio(user.precio);
    setTipmadera(user.tipo_madera)
  }

  useEffect(()=>{
    getUserById(id);
  }, [])

  const deleteUser = async(idUser) => {
    const dbRef = firebase.db.collection('Comedor').doc(idUser);
    await dbRef.delete();
    alert('Articulo de Habitacion eliminado');
    navigation.navigate('MostrarHabitacion');
  }

   const updateUser = async(idUser) => {
    const dbRef = firebase.db.collection('Comedor').doc(idUser);
    await dbRef.set({
      nombre_comedor: nombre_comedor,
      color: color,
      precio: precio,
      tipo_madera: tipo_madera
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
      <Heading content='Agregar Articulo de Comedor' style={styles.heading} />
      <Input 
        style={styles.input}
        placeholder={'Nombre del Producto'}
        value={nombre_comedor}
        onChangeText={setName}
      />
      <Input 
        style={styles.input}
        placeholder={'Color'}
        value={color}
        onChangeText={setColor}
      />
      <Input 
        style={styles.input}
        placeholder={'Tipo de Madera'}
        value={tipo_madera}
        onChangeText={setTipmadera}
      />
      <Input 
        style={styles.input}
        placeholder={'Precio'}
        value={precio}
        onChangeText={setPrecio}
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