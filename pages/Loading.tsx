import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { firebase } from '@react-native-firebase/auth'


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});

const LoadingComponent = ({ navigation }) => {
    console.log(navigation)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            navigation.navigate(user ? 'Main' : 'SignUp')

        })
    })
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
};

export default LoadingComponent;
