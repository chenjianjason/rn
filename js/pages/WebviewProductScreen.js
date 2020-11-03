import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {WebView} from 'react-native-webview';
import BackPressComponent from '../common/BackPressComponent';

export default class WebViewPage extends React.Component {
   
    render() {
        return (
            <View>
                {/* <View>
                    <Button
                        title="goback"
                        onPress={() => this.onBackPress()}
                    />
                    <Text>{this.state.title}</Text>
                </View> */}
                <WebView
                    source={{uri: 'https://reactnative.dev/'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
