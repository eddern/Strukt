import React, { useState, useEffect } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Container, Content, Form, Item, Label, Input, Button, Text, Toast, View, Icon } from 'native-base';

import CustomHeader from '../../components/Header'
import firebase from '../../utils/firebase';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        width: 135,
        marginTop: 10,
        padding: 10,
    },
})

const Login = ({navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(resp => {
                // TODO: handle storing of user info
                console.log("Response:", resp)
            })
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                        setErrorMessage('Invalid email.')
                    case 'auth/user-not-found':
                        setErrorMessage('Could not find any user with that email.')
                    case 'auth/wrong-password':
                        setErrorMessage('Wrong password.')
                    default:
                        setErrorMessage(err.message)
                }
            });
    };

    useEffect(() => {
        if (errorMessage) {
            Toast.show({
                text: errorMessage,
                type: 'danger',
                buttonText: 'Okay',
                duration: 5000,
                onClose: () => setErrorMessage(''),
            })
        }
    }, [errorMessage]);

    const toSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <Container>
            <CustomHeader pageTitle="Log in"/>
            <Content>
                <Form>
                    <Item fixedLabel>
                        <Label>Email:</Label>
                        <Input
                            placeholder="my@email.ofc"
                            autoFocus
                            autoCapitalize="none"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                            />
                    </Item>
                    <Item fixedLabel>
                        <Label>Password:</Label>
                        <Input
                            placeholder="password"
                            textContentType="password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            />
                    </Item>
                </Form>
                <View style={styles.buttonWrapper}>
                    <Button
                        iconLeft
                        style={styles.button}
                        onPress={handleLogin}
                        >
                            <Icon name="log-in"/>
                            <Text> Log in </Text>
                    </Button>
                </View>
                <Button
                    full
                    transparent
                    onPress={toSignUp}
                    >
                    <Text> Not signed up yet? Register an account </Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Login;
