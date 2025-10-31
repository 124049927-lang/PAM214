import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import React, { Component, useState } from 'react';



export default function TextInputview() {
  const [nombre, setNombre] = useState("")
  const [contraseña, setPassword] = useState("")
  const [Texto, setText] = useState("")


  //Esta larma se ejecuta directamente en el celular
  const mostrarAlerta = () => {
    if ([nombre.trim(), contraseña.trim(), Texto.trim()].includes("") ) {
      Alert.alert('Error, Por favor ingresa los datos correcpondientes.');
      alert('Error, Por favor ingresa los datos correspondientes.');
    } else {
      Alert.alert(`Hola!, ${nombre}!`, 'Los datos se ha registrado con exito.');
      alert(`Hola!, ${nombre}!`, 'Los datos se ha registrado con exito.' );
      //opcional : limpia el campo
      setNombre('');
      setPassword('');
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrea tu nombre</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={setNombre}
        keyboardType="default"
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={contraseña}
        onChangeText={setPassword}
        keyboardType="numeric"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder='Texto'
        value={Texto}
        onChangeText={setText}
        multiline={true}
        numberOfLines={4}
      />

      <Button
        title='Saludar'
        onPress={mostrarAlerta}
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ea4b4bff',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    marginBottom: 20, 
    fontSize: 16,
  },
});