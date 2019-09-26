import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});

const LoadingComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
};

export default LoadingComponent;
