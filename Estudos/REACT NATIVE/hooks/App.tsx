import React, { use } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { stateHook } from './src/screens/stateScreen';
import { effectHook } from './src/screens/effectScreen';
import { refHook } from './src/screens/refScreen';
import { reducerHook } from './src/screens/reducerScreen';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hooks</Text>

      <View style={styles.containerColumn}>
        <Text style={styles.title}>useState</Text>

        {stateHook()}

      </View>

      <View style={styles.containerColumn}>
        <Text style={styles.title}>useEffect</Text>

        {effectHook()}
      </View>

      <View style={styles.containerColumn}>
        <Text style={styles.title}>useRef</Text>

        {refHook()}

      </View>

      <View style={styles.containerColumn}>
        <Text style={styles.title}>useReducer</Text>

        {reducerHook()}

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
    gap: 20,
  },
  containerColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
    borderWidth: 1,
    width: '80%',
    height: 110,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
