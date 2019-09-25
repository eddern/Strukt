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

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignUp = () => {
        // TODO: firebase stuff
        console.log("handle sign up");
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
            onPress={() => console.log("redirect to login site")} />
        </View>
    );

};

export default SignUp;
