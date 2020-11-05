import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const AuthenticScreen = () => {
    return (
        <View style={styles.container}>
            <Text>AuthenticScreen</Text>
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

export default AuthenticScreen;