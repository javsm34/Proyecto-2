import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Heading} from  '../components/Heading.js';
import {Input} from '../components/Input.js';
import {Button} from '../components/Button.js';
import {TextButton} from '../components/TextButton.js';
import {IconButton} from '../components/IconButton';

import {AuthContext} from '../contexts/AuthContext';


export function RegistrationScreen({navigation}) {

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
      <Heading content='Nuevo Registro' style={styles.heading} />
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
      <Button text='Crear cuenta' style={styles.button} onPress={async() => {
        try{
          const resultado = await register(name, email, password);
          navigation.navigate('Userslist');
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