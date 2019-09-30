import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import firebase from "../utils/firebase";
import { NavigationScreenProp, NavigationState } from "react-navigation";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    textInput: {
        borderColor: "gray",
        borderWidth: 1,
        height: 40,
        marginTop: 8,
        width: "90%",
    },
});

const SignUp = ({navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch( (err) => setErrorMessage(err.message)) ;
    };

    const toLogin = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            { errorMessage.length ?
                <Text style={{ color: "red" }}>
                    {errorMessage}
                </Text>
                :
                <></>
            }
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={(emailText) => setEmail(emailText)}
                value={email}
            />
            <TextInput
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={(passwordFieldText) => setPassword(passwordFieldText)}
                value={password}
            />
        <Button title="Sign Up" onPress={handleSignUp} />
        <Button
            title="Already have an account? Login"
            onPress={toLogin} />
        </View>
    );

};

export default SignUp;
