import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Heading } from '../components/Heading';
import { TextButton } from '../components/TextButton';
import { IconButton } from '../components/IconButton';
import { ListItem, Avatar } from 'react-native-elements';

import { AuthContext } from '../contexts/AuthContext';

import firebase from '../database/firebase';


export function MostrarHabitacion({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection('Habitacion').onSnapshot((querySnapshot) => {
      const usuarios = [];
      querySnapshot.docs.forEach((doc) => {
        console.log(doc.data());
        const { nombre_hab, accesorios, color, precio } = doc.data();
        usuarios.push({
          id: doc.id,
          nombre_hab,
          accesorios,
          color,
          precio
        });
      });

      setUsers(usuarios);
    });
  }, []);

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
      <Heading content="Lista de Productos disponibles" style={styles.heading} />
      {users.map((user) => {
        return (
          <ListItem 
          key={user.id}
          bottomDivider
          onPress = {()=>{
            navigation.navigate('HabitacionDetails', {
              userId: user.id
            })
          }}
          >
            <Avatar
              source={{
                uri:
                  'https://image.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg',
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.nombre_hab}</ListItem.Title>
              <ListItem.Subtitle>Accesorios: {user.accesorios}</ListItem.Subtitle>
              <ListItem.Subtitle>Colores disponibles: {user.color}</ListItem.Subtitle>
              <ListItem.Subtitle>  ${user.precio}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  heading: {
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
});
