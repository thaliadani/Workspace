import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export function GalleryScreen() {
    return (
        <View style={{backgroundColor:'#ffffff', alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>
            <Text style={{color:'#FFB4B4', fontSize:30}}
            >Gallery Screen</Text>

            <StatusBar style="auto" />
        </View>
    );
}