import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { useState, useReducer } from 'react';

const listener = (state: any, action: any) => {
    switch (action.type) {
        case 'add-task':
            return {
                tasks:
                    [...state.tasks, { name: action.inputValue, isDone: false }]
            };
        default:
            return state;
    }
};

export function App2() {
    const [state, dispatch] = useReducer(listener, { tasks: [] });
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        const action = { type: 'add-task', inputValue };
        dispatch(action);
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    style={styles.input}
                    placeholder='Digite sua tarefa' />

                <Button title='Adicionar'
                    onPress={handleAddTask} />
            </View>

            {state.tasks.map((task: any) => (
                <Text key={task.name}>{task.name}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        borderColor: '#000',
        borderWidth: 1
    }
});