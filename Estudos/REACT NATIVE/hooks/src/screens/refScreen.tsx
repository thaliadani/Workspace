import React, { useRef } from 'react';
import {View, TextInput, Button } from 'react-native';

export function refHook() {
    const [name, setName] = React.useState('');

    const nameInputRef = useRef<TextInput>(null);    

    function handleChangeText(text: string) {
        if(nameInputRef.current) {
            setName(text);
            console.log('Input changed:', text);
        }else {
            console.log('Input ref is not set');
        }
    }

    function resetInput() {
        if(nameInputRef.current) {
            nameInputRef.current.clear();
            setName('');
            console.log('Input reset');
        }else {
            console.log('Input ref is not set');
        }
    }


    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <TextInput ref={nameInputRef} value={name} onChangeText={handleChangeText} style={{ fontSize: 18, borderWidth: 1 }} placeholder='Digite seu nome'></TextInput>

                <Button onPress={resetInput} title="Reset" />
            </View>
        </>
    );
}