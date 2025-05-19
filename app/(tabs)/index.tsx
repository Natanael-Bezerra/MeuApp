import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>

      <Link href="/(tabs)/second" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para Segunda Tela</Text>
        </TouchableOpacity>
      </Link>

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
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'gold',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
