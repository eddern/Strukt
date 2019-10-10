import React, { useState, useEffect } from 'react';
import { Button, Container, Content, Form, Item, Input, Label, Text, Toast } from 'native-base';
import { StyleSheet } from 'react-native'
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import firebase from '../utils/firebase';
import CustomHeader from '../components/Header'

const styles = StyleSheet.create({
    button: {
        width: '20%',
        left: 120,
    },
})
const SignUp = ({navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = () => {
        if (password2 === password) {
            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .catch( (err) => setErrorMessage(err.message))
        } else {
            setErrorMessage('Passwords does not match');

        }
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

    const toLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <Container>
            <CustomHeader pageTitle="Sign Up"/>
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
                            placeholder="new password"
                            textContentType="newPassword"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            />
                    </Item>
                    <Item fixedLabel>
                        <Label>Confirm:</Label>
                        <Input
                            placeholder="new password"
                            textContentType="newPassword"
                            secureTextEntry
                            value={password2}
                            onChangeText={setPassword2}
                            />
                    </Item>
                </Form>
                <Button
                    block
                    style={{marginTop: 5, marginBottom: 5}}
                    onPress={handleSignUp}
                    >
                        <Text> Sign up </Text>
                </Button>
                <Button
                    full
                    transparent
                    onPress={toLogin}
                    >
                    <Text> Already signed up? Log in instead </Text>
                </Button>
            </Content>
        </Container>
    );

};

export default SignUp;
