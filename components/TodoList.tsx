import React, { useState } from 'react';
import { Text, FlatList, StyleSheet, View, ScrollView } from 'react-native';

import Todo from './Todo'
const mockData: {name: String, created: Date}[] = [
    {name: "eddern", created: new Date()},
    {name: "pizza", created: new Date()},
    {name: "tomat", created: new Date()}] 

    
const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        backgroundColor: 'red',
        flex: 1,
    },
    container: {
        marginTop: 50,
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

const TodoList = () => {
    const [items, setItems] = useState([
        {name: "eddern", created: new Date()},
        {name: "pizza", created: new Date()},
        {name: "tomat", created: new Date()}]);

    return (
        <ScrollView style={styles.container}>
        <Text
            style={styles.header}>
            Liste Ofc
        </Text>
        <FlatList
            data={items}
            renderItem={({item}) => <Todo name={item.name} created={item.created} key={item.name}></Todo>}
        />
        </ScrollView>
    )
}
export default TodoList