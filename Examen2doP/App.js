import { ImageBackground, TextInput, Button, Alert, TouchableOpacity, showSplash } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

    if (showSplash) {
    return (
      <View style = {styles.splashContainer}>
        <Text styles={styles.splashText>N}>Bienvenido a la APP </Text>
      </View>
    )
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground 
        source={require('.assets/imagenes.jpeg')}
        style={styles.background}
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Perfil</Text>

            <Text style={styles.label}>Nombre: Rogelio Zea</Text> 
            <Text style={styles.label}>Profeción: Estuduante</Text>
            <Text style={styles.label}>Nacido16 de junio del año 2006 en la ciudad de Quéretaro.
              Actualmente vive con sus padres y hermano en Querétaro. Estudia en la Universidad Politecnica de Querétaro 
              y cursa la carrera de Tecnologias de la información he inovación digital. </Text>
            <Text styles={styles.label}>corrreo:124049927@upq.edu.mx</Text>
            <Text styles={styles.label}>Teléfono: 4421234567</Text>
          </View>
        </ImageBackground>
    </SafeAreaView>
  )
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#323030ff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    splashContainer: {
      flex: 1,
      backgroundColor: '#6a726aff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    splashText: {
      fontSize: 32,
      color: '#fff',
    },

    background:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    overlay:{
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 20,
      borderRadius:30,
      width: '90%',

    }

  });
