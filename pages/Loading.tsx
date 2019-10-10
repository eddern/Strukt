import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import firebase from './../utils/firebase';

const LoadingComponent = ({ navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {
    const [fontReady, setFontReady] = useState(false)

    // Initialize fonts
    const loadFont = async () => {
        await Font.loadAsync({
            Roboto: require('./../assets/fonts/Roboto-Regular.ttf'),
            Roboto_medium: require('./../assets/fonts/Roboto-Medium.ttf'),
            ...Ionicons.font,
        });
        setFontReady(true);
    }

    // Load font and check User first time the component mounts
    useEffect(() => {
        loadFont();
    }, []);

    // Check if font is ready, and redirect to appropriate page
    useEffect(() => {
        if (fontReady) {
            firebase.auth().onIdTokenChanged( (user) => {
                user ? navigation.navigate('Home') : navigation.navigate('Login');
            })
        }
    })

    return (
        <AppLoading />
    );
};

export default LoadingComponent;
