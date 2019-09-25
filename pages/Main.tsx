import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});

const Main = () => {
    const [currentUser, setCurrentUser] = useState({
        email: "",
    });

    return (
        <View style={styles.container}>
            <Text>
                Hi {currentUser && currentUser.email}!
            </Text>
        </View>

    );
};

export default Main;
