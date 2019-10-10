import React, { useState } from 'react';
import { View, Modal, Text, Alert, TouchableHighlight } from 'react-native';

const NewTodo = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{flex: 1}}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');  
                }}>
                <View style={{marginTop: 22}}>
                <View>
                    <Text>Hello World!</Text>
                    <TouchableHighlight
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <Text>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </Modal>

            <TouchableHighlight
                onPress={() => {
                setModalVisible(true);
                }}>
                <Text>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};

export default NewTodo;
