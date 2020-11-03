import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const MyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>MyScreen</Text>
            <Button
                title="go Payment"
                onPress={() => navigation.navigate('PaymentScreen')}
            />
            <Button
                title="webview"
                onPress={() => navigation.navigate('WebviewProductScreen', {
                    title: 'baidu',
                    url: 'https://reactnative.dev/'
                })}
            />
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

export default MyScreen;