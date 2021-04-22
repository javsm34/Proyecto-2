import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Heading} from  '../components/Heading.js';
import {Input} from '../components/Input.js';
import {Button} from '../components/Button.js';
import {TextButton} from '../components/TextButton.js';
import {IconButton} from '../components/IconButton';

import {AuthContext} from '../contexts/AuthContext';


export function BathScreen({navigation}) {

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
      <Heading content='Departamento de Baños' style={styles.heading} />
       <TextButton
        text="Mostrar Productos" style={styles.input}
        onPress={() => {
          navigation.navigate('MostrarBath');
        }}
      />
      <TextButton
        text="Agregar Productos" style={styles.input}
        onPress={() => {
          navigation.navigate('AgregarBath');
        }}
      />

      <Image source={{ uri: "https://images.vexels.com/media/users/3/152334/isolated/preview/2224a945f81c6d005320f16357520a1d-icono-de-lavabo-de-ba-ntilde-o-by-vexels.png" }} style={styles.logo} resizeMode="contain"/>
      
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