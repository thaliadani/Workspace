import { useState, useEffect, useReducer, use } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {App2} from './App2';

export default function App() {

  //TODO useReducer - Use em componentes mais complexos

  /* 
      const reducer = (state: { counter: number }, action: { type: string }) => {
        switch (action.type) {
          case 'INCREMENT':
            return { counter: state.counter + 1 };
          case 'DECREMENT':
            if (state.counter > 0) {
              return { counter: state.counter - 1 };
            }
          default:
            return state;
        }
      }
  
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
  
      const incrementCount = () => {
        dispatch({ type: 'INCREMENT' });
      }
  
      const decrementCount = () => {
        dispatch({ type: 'DECREMENT' });
      }
  
      useEffect(() => {
        if(state.counter === 0){
          Alert.alert('Carrinho', 'Carrinho vazio');
        }else{
          Alert.alert('Carrinho', 'quantidade: ' + state.counter);
        }
      }, [state.counter])
  */

  //TODO useState - Use em pequenos componentes

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      Alert.alert('Carrinho', 'Carrinho vazio');
    } else {
      Alert.alert('Carrinho', 'quantidade: ' + count);
    }
  }, [count])

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>hooks</Text>

      <Text style={styles.big}>{count}</Text>

      <View style={styles.inline}>
        <Button title='Remover' onPress={decrementCount}></Button>
        <Button title='Adicionar' onPress={incrementCount}></Button>
      </View>


      <View style={styles.inline}>
        <App2 />
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
    gap: 10,
  },
  big: {
    fontSize: 50,
  },
  inline: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 40
  }
});
