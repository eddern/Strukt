import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = () => {
        // TODO: Firebase stuff...
        console.log("handleLogin");
    };

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            {
                errorMessage.length ?
                <Text style={{ color: "red" }}>
                    {errorMessage}
                </Text>
                :
                <></>
            }
            <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={(emailInputText) => setEmail(emailInputText)}
            value={email}
            />
            <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={(passwordInputText) => setPassword(passwordInputText)}
            value={password}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button
            title="Don't have an account? Sign Up"
            onPress={() => console.log("navigate to SignUp")}
            />
        </View>
    );
};

export default Login;
