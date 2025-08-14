import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount= () => {
    setCount((prevState) => prevState + 1);
  }

  const decrementCount= () => {
    setCount((prevState) => prevState - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{count}</Text>

      <View style={styles.inline}>
        <Button title='Remover' onPress={decrementCount}></Button>
        <Button title='Adicionar' onPress={incrementCount}></Button>
      </View>
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
  big: {
    fontSize: 50,
  }, 
  inline: {
    flexDirection: 'row',
  }
});
