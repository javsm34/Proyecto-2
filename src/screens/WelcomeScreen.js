import * as React from 'react';
import { Text, View, StyleSheet,  } from 'react-native';
import { Heading } from '../components/Heading.js';
import { TextButton } from '../components/TextButton.js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container, Header, Content} from 'native-base';
import { ImageBackground } from "react-native";


export function WelcomeScreen({ navigation }) {
  const image = { uri: "https://s2.best-wallpaper.net/wallpaper/iphone/2005/Living-room-white-sofa-interior-window-sunshine_iphone_1242x2688.jpg" };
  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>
       <Heading content="Bienvenidos al muebleria Lovsark" style={styles.heading} />
       
      <TextButton
        text="Sala" style={styles.sala}
        onPress={() => {
          navigation.navigate('Sala');
        }}
      />
      <TextButton
        text="Comedor" style={styles.salir}
        onPress={() => {
          navigation.navigate('Comedor');
        }}
      />
      <TextButton
        text="Habitación" style={styles.salir}
        onPress={() => {
          navigation.navigate('Habitacion');
        }}
      />
      <TextButton
        text="Baño" style={styles.salir}
        onPress={() => {
          navigation.navigate('Baño');
        }}
      />
          
        
      
      </Text>
    </ImageBackground>
   
      
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  salir:{
    marginTop:50
  },
  sala:{
    color: 'black',
    
  },
  comedor:{
    color:''
  },
  habitacion:{
    color:''
  },
  bath:{
    color:''
  }
});




