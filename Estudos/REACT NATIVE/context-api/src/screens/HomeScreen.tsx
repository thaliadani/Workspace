import { StatusBar } from 'expo-status-bar';
import {useState, useContext} from 'react';
import { View, TextInput, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/navigation.routes';

import { styles } from '../styles/MainStyles';

import { UserContext } from '../contexts/userContext';

type HomeScreenNavigationProp = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeScreen({ navigation }: HomeScreenNavigationProp) {
    const [username, setUsername] = useState<string>('');

    const userContext = useContext(UserContext);
    
    const navToUserScreen = () => {
        userContext?.saveLoginUserToCache(username);
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
