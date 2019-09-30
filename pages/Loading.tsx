import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";

import firebase from "../utils/firebase";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});

const LoadingComponent = ({ navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {
    useEffect(() => {
        firebase.auth().onIdTokenChanged( (user) => {
            user ? navigation.navigate("Home") : navigation.navigate("SignUp");
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
};

export default LoadingComponent;
