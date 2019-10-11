import React, { useState, useEffect } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Container, Content, Input, Label, Item, Button } from 'native-base';

import firebase from '../../utils/firebase';
import CustomHeader from '../../components/Header';
import CustomFooter from '../../components/Footer';
import NewItem from '../../components/NewItem';

const ShoppingList = ({navigation }: { navigation: NavigationScreenProp<NavigationState>}) => {
    return (
        <Container>
            <CustomHeader pageTitle="Shopping"/>
            <Content>
                <NewItem listName="Shopping" />
            </Content>
            <CustomFooter />
        </Container>

    );
};

export default ShoppingList;
