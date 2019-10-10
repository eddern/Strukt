import React, { useState, useEffect } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Container, Content, Input, Label, Item } from 'native-base';

import firebase from '../../utils/firebase';
import CustomHeader from '../../components/Header';
import CustomFooter from '../../components/Footer';

const Main = ({navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {
    return (
        <Container>
            <CustomHeader pageTitle="Shopping"/>
            <Content>
                <Item>
                    <Label>Shopping</Label>
                    <Input placeholder="new shopping list item">
                    </Input>
                </Item>
            </Content>
            <CustomFooter />
        </Container>

    );
};

export default Main;
