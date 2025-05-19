import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segunda Tela</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar para Tela Inicial</Text>
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
