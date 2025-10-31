import { Text, StyleSheet, View, SafeAreaView, ImageBackground, TextInput, Button, Alert, Switch, TouchableOpacity, Image, } from 'react-native'
import { useEffect, useState, Component } from 'react';

export default function ActRepaso() {

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [aceptarTerminos, setAceptarTerminos] = useState(false)
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
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
        <Text style={styles.splashText}>Bienvenido a la app!</Text>
      </View>
    )
  }

  const Registro = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido.');
      return;
    }
    if ([nombre.trim(), correo.trim()].includes("")) {
      Alert.alert('Error Por favor ingresa los datos correspondientes.');
      return;
    }
    if (!aceptarTerminos) {
      Alert.alert('Debes aceptar los términos y condiciones para continuar.');
      return;
    }
    else {

      Alert.alert("Registro exitoso", `Nombre: ${nombre}\nEmail: ${correo}`);

      setNombre('');
      setCorreo('');
      setAceptarTerminos(false);

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

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
            keyboardType="default"
            autoCapitalize="words"
            placeholderTextColor={"#ffffff9d"}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize='none'
            autoCorrect={false}
            placeholderTextColor={"#ffffff9d"}
          />

          <View style={styles.terminosContainer}>
            <Switch
              value={aceptarTerminos}
              onValueChange={setAceptarTerminos}
              thumbColor={aceptarTerminos ? "#00c853" : "#f4f3f4"}
            />
            <Text style={styles.terminosTexto}>Aceptar términos y condiciones</Text>
          </View>

          <TouchableOpacity onPress={Registro}>
            <Text style={styles.btnRegistrar}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  splashContainer: {
    flex: 1,
    backgroundColor: '#c0c0c0ff',
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
    padding: 20,
    borderRadius: 30,
    width: '90%',

  },


  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },

  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#fff',

  },

  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  terminosTexto: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },

  btnRegistrar: {
    textAlign: 'center',
    color: '#007aff',
    fontSize: 18,
    fontWeight: '600',
  },
});
