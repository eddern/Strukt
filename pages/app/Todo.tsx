import React, { useState, useEffect } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Container, Content, Input, Label, Item } from 'native-base';

import firebase from '../../utils/firebase';
import CustomHeader from '../../components/Header';
import CustomFooter from '../../components/Footer';

const TodoScreen = ({navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {

    return (
        <Container>
            <CustomHeader pageTitle="Todo"/>
            <Content>
                <Item>
                    <Label>Eddern</Label>
                    <Input placeholder="new todo">
                    </Input>
                </Item>
            </Content>
            <CustomFooter />
        </Container>

    );
};

export default TodoScreen;
