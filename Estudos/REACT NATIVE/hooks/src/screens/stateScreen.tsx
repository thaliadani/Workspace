import React from 'react';
import { View, Text, Button } from 'react-native';

export function stateHook() {
    const [quantity, setQuantity] = React.useState<number>(12);

    const removeNumber = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity > 0) {
                return prevQuantity - 1;
            } else {
                return 0;
            }
        });

    }

    const addNumber = () => {
        setQuantity((prevQuantity) => {
            return prevQuantity + 1
        });
    }

    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Button title='-' onPress={() => removeNumber()} />
                <Text style={{ fontSize: 20 }}>{quantity}</Text>
                <Button title='+' onPress={() => addNumber()} />
            </View>


        </>
    );
}