import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const WebviewServerScreen = () => {
    return (
        <View style={styles.container}>
            <Text>WebviewServerScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default WebviewServerScreen;