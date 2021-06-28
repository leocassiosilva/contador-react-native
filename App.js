import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
    
  function aumentar(){
    setCount(count+1)
  }

  function diminuir(){
    setCount(count-1)
  }
 

  return (
    <View style={styles.container}>
      <View style={styles.conteudo_central}>
        <View style={styles.header}>
          <Text style={styles.text_header} >Contador de Pessoas</Text>
        </View>

        <View style={styles.conteudo}>
        <Text style={styles.textTitle}>{count}</Text>
        </View>

        <TouchableOpacity  style={styles.adicionar} onPress={aumentar}>
          <Text style={styles.text_sub}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subtrair} onPress={diminuir}>
          <Text style={styles.text_sub}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636aba',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  conteudo_central:{
    flex: 0.5,
    backgroundColor: '#636aba',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },


  text_header: {
    color: 'white',
    fontSize: 30,
    textAlign:'center'
  },

  textTitle: {
    color: '#000000',
    fontSize: 25,
    textAlign:'center'
  },

  text_sub: {
    color: 'white',
    fontSize: 25,
    textAlign:'center'
  },

  conteudo: {
    flexDirection:'row',
    flex: 0.30,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width:160,
    height:80,
    borderRadius: 10,
  },

  adicionar: {
    flexDirection:'row',
    flex: 0.20,
    backgroundColor: '#2e2252',
    alignItems: 'center',
    justifyContent: 'center',
    width:180,
    borderRadius: 5,
  },

  subtrair: {
    flexDirection:'row',
    flex: 0.20,
    backgroundColor: '#2e2252',
    alignItems: 'center',
    justifyContent: 'center',
    width:180,
    borderRadius: 5,
  },
});
