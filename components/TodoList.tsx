import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

import Todo from './Todo';

const TodoList = () => {
    const [items, setItems] = useState([
        {name: 'eddern', created: new Date()},
        {name: 'pizza', created: new Date()},
        {name: 'tomat', created: new Date()}]);

    return (
        <FlatList
            data={items}
            renderItem={({item}) => <Todo name={item.name} created={item.created}></Todo>}
            keyExtractor={(_item, index) => index.toString() }
        />
    );
};

export default TodoList;
