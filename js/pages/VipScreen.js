import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const VipScreen = () => {
    return (
        <View style={styles.container}>
            <Text>VipScreen</Text>
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

export default VipScreen;