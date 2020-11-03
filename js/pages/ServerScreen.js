import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const ServerScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ServerScreen</Text>
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

export default ServerScreen;