import React, { useRef, useReducer } from 'react';
import { View, TextInput, Button } from 'react-native';

const ActionTypes = {
    SET_TEXT: 'SET_TEXT',
    RESET: 'RESET',
}
const initialState = {
    textInputRef: useRef<TextInput>(null),
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case ActionTypes.SET_TEXT:
            state.textInputRef.current.setNativeProps({ text: 'teste' });
            return state;
        case ActionTypes.RESET:
            state.textInputRef.current.clear();
            return state;
    }
}

export function reducerHook() {



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
                <TextInput ref={state.textInputRef} style={{ fontSize: 18, borderWidth: 1 }} placeholder='Digite aqui'></TextInput>

                <Button
                    onPress={handleChangeText}
                    title='Enviar'>
                </Button>

                <Button
                    onPress={resetButton}
                    title='Reset'>
                </Button>
            </View >
        </>
    );
}