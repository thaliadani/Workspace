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
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image
          style={styles.image}
          source={isActive ? symbolOff : symbolOn} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100
  }

});
