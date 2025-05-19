import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Second')}>
        <Text style={styles.buttonText}>Ir para Segunda Tela</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Alerta', 'Este é um alerta!')}>
        <Text style={styles.buttonText}>Mostrar Alerta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Contador: {count}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'gold',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});