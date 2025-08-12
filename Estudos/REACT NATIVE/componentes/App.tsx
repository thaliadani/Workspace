import { StyleSheet, Image, Text, TextInput, View, Alert, Button, ScrollView, Switch } from 'react-native';
import image from './assets/favicon.png';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [ligado, setLigado] = useState(false);

  function handleChange() {
    setLigado(!ligado)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          onTouchStart={() => Alert.alert('Toque iniciado')}
          onTouchEnd={() => Alert.alert('Toque finalizado')}>
          <Button
            title="onPress"
            onPress={() => Alert.alert('Clicou!')}
            accessibilityLabel="Clique aqui"
          />
        </View>

        <Text
          style={[styles.text,
          styles.border,
          { fontSize: 24 }
          ]}
          selectable={true}
        >Selectable
        </Text>

        <Text
          selectable={false}>
          No Selectable
        </Text>

        <Text>
          <Text>ola</Text>
          <Text>mundo</Text>
        </Text>

        <View>
          <Text>ola</Text>
          <Text>mundo</Text>
        </View>

        <Text
          style={{ fontSize: 24, fontWeight: 'bold' }}
          onPress={() => Alert.alert('Press!')}
          onLongPress={() => Alert.alert('Long Press!')}
        >Open up App.tsx to start working on your app!</Text>

        <Switch value={ligado} onValueChange={handleChange}></Switch>

        <Image source={image} style={{display: ligado ? 'flex' : 'none'}} />

        <TextInput
          placeholder="Digite aqui seu nome"
          maxLength={10}
          autoCapitalize="sentences"
          onChange={(text) => setName(text.nativeEvent.text)}
          value={name}
          style={styles.border} />

        <TextInput
          placeholder="Digite aqui seu email" keyboardType="email-address"
          maxLength={20}
          autoCapitalize="none"
          onChangeText={(text) => console.log(text)}
          style={styles.border} />

        <TextInput
          placeholder="Digite aqui sua senha"
          secureTextEntry
          keyboardType="default"
          maxLength={8}
          autoCapitalize="none"
          onChangeText={(text) => console.log(text)}
          style={styles.border} />

        <TextInput
          placeholder="Digite aqui seu celular"
          secureTextEntry
          keyboardType="phone-pad"
          maxLength={10}
          autoCapitalize="none"
          onChangeText={(text) => console.log(text)}
          style={styles.border} />

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  border: {
    borderWidth: 1,
    borderColor: '#000',
  }
});
