import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import Todo from './Todo';
import NewTodo from './NewTodo';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 3,
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'red',
        fontSize: 20,
    },
    item: {
        fontSize: 18,
        height: 44,
        padding: 10,
    },
});

const TodoList = () => {
    const [items, setItems] = useState([
        {name: 'eddern', created: new Date()},
        {name: 'pizza', created: new Date()},
        {name: 'tomat', created: new Date()}]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <FlatList
            data={items}
            renderItem={({item}) => <Todo name={item.name} created={item.created}></Todo>}
            keyExtractor={(_item, index) => index.toString() }
        />
        </ScrollView>
    );
};

export default TodoList;
