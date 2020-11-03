import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginByCodeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>LoginByCodeScreen</Text>
            <Button
                title="go to pwd login"
                onPress={() => navigation.navigate('LoginByPwdScreen')}
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

export default LoginByCodeScreen;