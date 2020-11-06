import React from 'react'
import { View, Text,Button, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>PaymentScreen</Text>
            <Button
                title="go 首页"
                onPress={() => navigation.navigate('首页')}
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

export default PaymentScreen;