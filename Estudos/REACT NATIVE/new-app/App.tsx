import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/images/symbol-on.png';
import symbolOff from './assets/images/symbol-off.png';


export default function App() {
  const [isActive, setIsActive] = useState(false)
  function handleSymbol(){
    setIsActive((oldValue:boolean) => {
      return !oldValue
    })
  }
  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image
          style={styles.image}
          source={isActive ? symbolOff : symbolOn} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
