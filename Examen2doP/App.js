import { ImageBackground, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
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
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground 
        source={{
          uir:
        }}
        style={styles.background}
        >
          <View styles={styles.overlay}>
            <Text style={styles.title}>Bienvenido!</Text>
          </View>
        </ImageBackground>
    </SafeAreaView>
  )

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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

    }

  });
