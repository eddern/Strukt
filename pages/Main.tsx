import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import TodoList from "../components/TodoList";
import NewTodo from '../components/NewTodo';

import firebase from "../utils/firebase";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});

const Main = () => {
    const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser);

    return (
        <View style={styles.container}>
            <Text>
                Hi {currentUser && currentUser.email}!
            </Text>
            <TodoList />
            <NewTodo></NewTodo>
        </View>

    );
};

export default Main;
