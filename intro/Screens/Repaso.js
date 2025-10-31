import { Text, StyleSheet, View, SafeAreaView, ImageBackground, TextInput, Button, Alert } from 'react-native'
import { useEffect, useState, Component } from 'react';

export default function ActRepaso() {

    const [nombre, setNombre] = useState("")
    const [contraseña, setCorreo] = useState("")
    
    const [showSplash, setShowSplash] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return (
            <View style={styles.splashContainer}>
                <Text style={styles.splashText}>Bienvenido a la app!</Text>
            </View>
        )
    }

      const mostrarAlerta = () => {
        if ([nombre.trim(), contraseña.trim(), Texto.trim()].includes("") ) {
          Alert.alert('Error, Por favor ingresa los datos correcpondientes.');
          
        } else {
          Alert.alert(`Hola!, ${nombre}!`, 'Los datos se ha registrado con exito.');
         
          setNombre('');
          setPassword('');

        }
      };

   return (
  <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground
      source={require('../assets/f1.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Registro de Usuario</Text>

      </View>


    </ImageBackground>
  </SafeAreaView>
);

}

const styles = StyleSheet.create({

  splashContainer: {
    flex: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },


  splashText: {
    fontSize: 24,
    color: '#fff',
  },


  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },


  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 100,
    borderRadius: 100,

  },


  title: {
    fontSize: 28,
    color: '#fff',
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
