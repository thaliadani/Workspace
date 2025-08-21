import React from 'react';
import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { styles } from '../styles/MainStyles';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/navigation.routes';
import { UserContext } from '../contexts/userContext';

type UserScreenProp = {
    route: RouteProp<RootStackParamList, 'User'>;
};

export function UserScreen({ route }: UserScreenProp) {
    const { username } = route.params;

    const UserContextValue = useContext(UserContext);

    const usernameDynamic = UserContextValue?.username || 'Nenhum nome salvo';

    const usernameStatic = UserContextValue?.loginUsername || 'Nenhum nome fornecido';

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Nome da Rota: {username}</Text>

            <Text style={styles.title}>Nome Estatico: {usernameStatic}</Text>

            <Text style={styles.title}>Nome Dinamico: {usernameDynamic}</Text>

            <StatusBar style="auto" />
        </View>
    );
}

