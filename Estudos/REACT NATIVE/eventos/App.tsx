import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={() => alert('Clicou!')}> Toque aqui </Text>

      <Text onPressIn={() => alert('Entrou')} onPressOut={() => alert('Saiu')}> Toque aqui </Text>

      <Text onLongPress={() => alert('Toque longo')}> Toque longo </Text>

      <Text onTextLayout={() => alert('Toque longo')}> Toque longo </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
