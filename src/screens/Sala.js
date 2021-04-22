import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Heading} from  '../components/Heading.js';
import {Input} from '../components/Input.js';
import {Button} from '../components/Button.js';
import {TextButton} from '../components/TextButton.js';
import {IconButton} from '../components/IconButton';

import {AuthContext} from '../contexts/AuthContext';


export function SalaScreen({navigation}) {

  const { register } = React.useContext( AuthContext );
  const [name, setName] = React.useState('');
  const [email, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
      <Heading content='Departamento de Salas' style={styles.heading} />
      <TextButton
        text="Mostrar Productos" style={styles.input}
        onPress={() => {
          navigation.navigate('MostrarSalas');
        }}
      />
      <TextButton
        text="Agregar Productos" style={styles.input}
        onPress={() => {
          navigation.navigate('AgregarSalas');
        }}
      />

      <Image source={{ uri: "https://cdn.shopify.com/s/files/1/0743/4993/products/SLT.0044.01-2_400x.png?v=1590446422" }} style={styles.logo} resizeMode="contain"/>
      
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
  },
  logo:{
    width:"50%",
    height:"50%",
    position: 'absolute',
    bottom: -70,
    left: 120
    
  }
});