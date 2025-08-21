import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/MainStyles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/navigation.routes';

type HomeScreenNavigationProp = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeScreen({ navigation }: HomeScreenNavigationProp) {
    const [username, setUsername] = React.useState('');
    
    const navToUserScreen = () => {
        navigation.navigate('User',{username : username});
    }

    return (
        <View style={styles.container}>
            
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            
            <Button title="Logar" onPress={navToUserScreen} />

            <StatusBar style="auto" />
        </View>
    );
}
