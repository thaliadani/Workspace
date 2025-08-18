import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Text} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ backgroundColor:'#202024', alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>
            <Text style={{color:'#B2A4FF', fontSize:30}}>Home Screen</Text>

            <StatusBar style="auto" />
        </View>
    );
}