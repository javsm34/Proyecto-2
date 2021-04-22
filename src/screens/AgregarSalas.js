import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Heading} from  '../components/Heading.js';
import {Input} from '../components/Input.js';
import {Button} from '../components/Button.js';
import {TextButton} from '../components/TextButton.js';
import {IconButton} from '../components/IconButton';

import {AuthContext} from '../contexts/AuthContext';


export function AgregarSalas({navigation}) {

  const { registerSala } = React.useContext( AuthContext );
  const [name, setName] = React.useState('');
  const [color, setColor] = React.useState('');
  const [precio, setPrecio] = React.useState('');

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
      <Heading content='Agregar Producto Sala' style={styles.heading} />
      <Input 
        style={styles.input}
        placeholder={'Nombre del Producto'}
        value={name}
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
        placeholder={'Precio'}
        value={precio}
        onChangeText={setPrecio}
      />
      <Button text='Registrar Sala' style={styles.button} onPress={async() => {
        try{
          const resultado = await registerSala(name, color, precio);
          navigation.navigate('MostrarSalas');
        }
        catch(e){
          alert(e);
        }
        
      }}  /> 
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