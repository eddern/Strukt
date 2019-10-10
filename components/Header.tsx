import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
import { StyleSheet, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
    header: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
    },
})

const CustomHeader = ({ pageTitle }: { pageTitle: string }) => {
    return (
        <Header style={styles.header}>
            <Left>
            </Left>
            <Body>
                <Title>{pageTitle}</Title>
            </Body>
            <Right>
            </Right>
        </Header>
    )
}

export default CustomHeader
