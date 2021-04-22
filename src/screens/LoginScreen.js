import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {TextButton} from '../components/TextButton';

import {AuthContext} from '../contexts/AuthContext';


export function LoginScreen({navigation}) {

  const { login } = React.useContext( AuthContext );
  const [email, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Heading content='Inicio de sesión' style={styles.heading} />
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
      <Button text='Entrar' style={styles.button} onPress={ async()=>{
        try{
          const resultado = await login(email, password);
          navigation.navigate('Welcome');
        }
        catch (e){
          alert(e);
        }
      }} />
      <TextButton style={{marginBottom:10}} text='Crear una cuenta' onPress={() => {
        navigation.navigate('Registration');
      }} />
      <TextButton text='Lista de usuarios' onPress={() => {
        navigation.navigate('Userslist');
      }} />
      <TextButton text='inicio' onPress={() => {
        navigation.navigate('Welcome');
      }} />
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
  }
});
