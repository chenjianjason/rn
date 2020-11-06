import React from 'react'
import { View, Text, Button, Platform, BackHandler, ToastAndroid, StyleSheet } from 'react-native';
import BackPressComponent from '../common/BackPressComponent';

class MyScreen extends React.Component {
    constructor(props) {
        super(props)
        this.backPress = Platform.OS === 'android'? new BackPressComponent({backPress: (e) => this.onBackPress(e)}) : null;
        this.lastBackPressed = null;
    }

    componentDidMount() {
        this.backPress?.componentDidMount();
    }

    componentWillUnmount() {
        this.backPress?.componentWillUnmount();
    }

    onBackPress(e) {
        if(this.props.navigation.isFocused()) {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
              BackHandler.exitApp();
            }else{
              this.lastBackPressed = Date.now();
              ToastAndroid.show('再按一次退出应用', 1000);
              return true;
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MyScreen</Text>
                <Button
                    title="go Payment"
                    onPress={() => this.props.navigation.navigate('PaymentScreen')}
                />
                <Button
                    title="webview"
                    onPress={() => this.props.navigation.navigate('WebviewProductScreen', {
                        title: 'baidu',
                        url: 'https://reactnative.dev/'
                    })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MyScreen;