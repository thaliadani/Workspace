import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import { styles } from '../styles/MainStyles';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/navigation.routes';

type UserScreenProp = {
    route: RouteProp<RootStackParamList, 'User'>;
};

export function UserScreen({route }: UserScreenProp) {
    const { username } = route.params;

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Boas Vindas {username}</Text>

            <StatusBar style="auto" />
        </View>
    );
}

