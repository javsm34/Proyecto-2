import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export function Button({style, text, onPress}) {
  return(
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      <Text style={styles.text} >{text.toUpperCase()}</Text>
    </TouchableOpacity>
  ); 
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    width: '100%',
    padding: 18,
    borderRadius: 10
  },
  text:{
    textAlign: 'center',
    fontSize: 14,
  }
});
