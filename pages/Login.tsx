import React, { useState, useEffect } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Container, Content, Form, Item, Label, Input, Button, Text, Toast } from 'native-base';

import CustomHeader from '../components/Header'
import firebase from '../utils/firebase';

const Login = ({navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((err) => setErrorMessage(err.message));
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
                <Button
                    block
                    style={{marginTop: 5, marginBottom: 5}}
                    onPress={handleLogin}
                    >
                        <Text> Sign in </Text>
                </Button>
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
