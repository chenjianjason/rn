import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginByPwdScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>LoginByPwdScreen</Text>
            <Button
                title="change go to code login"
                onPress={() => navigation.navigate('LoginByCodeScreen')}
            />
            <Button
                title="login"
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabScreen' }]
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

export default LoginByPwdScreen;