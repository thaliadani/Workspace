import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Text, Button } from 'react-native';

export default function HomeScreen({navigation} : any) {
    function navToGallery() {
        navigation.navigate('Gallery');
    }

    return (
        <View style={{ backgroundColor:'#202024', alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>
            <Text style={{color:'#B2A4FF', fontSize:30}}>Home Screen</Text>

            <Button title="Go to Gallery" onPress={navToGallery} />

            <StatusBar style="auto" />
        </View>
    );
}