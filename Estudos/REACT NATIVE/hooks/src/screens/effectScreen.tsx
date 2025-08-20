import React, { useEffect }  from 'react';
import {View, Text, Button } from 'react-native';

export function effectHook() {
    const [count, setCount] = React.useState(0);
    const [price, setPrice] = React.useState(0);

    useEffect(() => {
        return () => {
            console.log('Component unmounted');
        };
    }, [count, price]);

    async function increment() {
        setCount(prevCount => prevCount + 1);
        console.log('Count incremented:', count + 1);
    }

    async function fetchPrice() {
        const newPrice = Math.floor(Math.random() * 100);
        setPrice(newPrice);
        console.log('Price fetched:', newPrice);
    }

    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Button title="Increment" onPress={increment} />
                <Text style={{ fontSize: 20 }}>{count}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Button title="Fetch Price" onPress={fetchPrice} />
                <Text style={{ fontSize: 20 }}>{price}</Text>
            </View>
        </>
    );
}