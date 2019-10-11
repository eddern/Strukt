import React from 'react';
import { Footer, Button, Text, FooterTab, Icon} from 'native-base';
import { withNavigation, NavigationState, NavigationScreenProp, NavigationRoute } from 'react-navigation';

const CustomFooter = ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute, NavigationState> }) => {

    const navigateToTodo = () => {
        navigation.navigate('Todo')
    }

    const navigateToShopping = () => {
        navigation.navigate('Shopping');
    }

    return (
        <Footer>
            <FooterTab>
                <Button
                    active={navigation.state.routeName === 'Todo'}
                    onPress={navigateToTodo}
                    >
                    <Icon name="checkbox"/>
                    <Text>Todos</Text>
                </Button>
                <Button
                    active={navigation.state.routeName === 'Shopping'}
                    onPress={navigateToShopping}
                    >
                    <Icon name="cart"/>
                    <Text>Shopping</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default withNavigation(CustomFooter)
