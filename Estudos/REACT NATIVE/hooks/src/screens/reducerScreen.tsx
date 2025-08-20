import React, { useRef, useReducer } from 'react';
import { View, TextInput, Button } from 'react-native';

const ActionTypes = {
    SET_TEXT: 'SET_TEXT',
    RESET: 'RESET',
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case ActionTypes.SET_TEXT:
            return { ...state, text: 'teste' };
        case ActionTypes.RESET:
            return { ...state, text: '' };
    }
}

export function reducerHook() {
    const initialState = {
        textInputRef: useRef<TextInput>(null),
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChangeText = () => {
        dispatch({ type: ActionTypes.SET_TEXT });
    }

    const resetButton = () => {
        dispatch({ type: ActionTypes.RESET });
    }

    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                
                <TextInput 
                ref={state.textInputRef} 
                style={{ fontSize: 18, borderWidth: 1 }} 
                placeholder='Digite aqui'
                value={state.text}/>

                <Button
                    onPress={handleChangeText}
                    title='Enviar'/>

                <Button
                    onPress={resetButton}
                    title='Reset'/>
            </View >
        </>
    );
}