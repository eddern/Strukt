import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'

type Todo = {
    name: String,
    created: Date
}

const styles = StyleSheet.create({
    todoItem: {
        flex: 1,
    },
    todoTitle: {
        color: "red"
    },
})

const Todo = (props: Todo): JSX.Element => {
    const [edit, setEdit] = useState(false)

    
    return (
        <View>
            <Button title="Edit" onPress={() => setEdit(!edit)} />
            <Text style={styles.todoTitle}>
                {props.name}
            </Text>
            <Text>
                {props.created.toLocaleDateString()}
            </Text>
        </View>
    )
}
export default Todo