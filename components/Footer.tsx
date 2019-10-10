import React from 'react';
import { Footer, Button, Text, FooterTab, Icon} from 'native-base';

const CustomFooter = () => {
    return (
        <Footer>
            <FooterTab>
                <Button active>
                    <Icon name="checkbox"/>
                    <Text>Todos</Text>
                </Button>
                <Button>
                    <Icon name="cart"/>
                    <Text>Shopping</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default CustomFooter
