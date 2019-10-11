import React, { useState } from 'react'
import { Item, Input, Button, Text } from 'native-base'

const NewItem = ({ listName }: {listName: string}) => {
    const [inputValue, setInputValue] = useState('');

    const addItemToList = () => {
        console.log(`adding ${inputValue} to ${listName}`);
    }

    return (
        <Item>
            <Input
                placeholder={`new ${listName.toLowerCase()}`}
                value={inputValue}
                onChangeText={setInputValue}>
            </Input>
            <Button
                iconLeft
                transparent
                onPress={addItemToList}>
                <Text>Add</Text>
            </Button>
        </Item>
    )
}

export default NewItem
