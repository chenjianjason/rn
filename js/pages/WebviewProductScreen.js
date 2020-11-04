import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class WebViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '11'}
    }
    onNavigationStateChange(navState) {
        console.log(navState)
        this.setState({
            title: navState.title
        });
    }

    render() {
        return (
            <>
                <Text>{this.state.title}</Text>
                <WebView
                    source={{uri: 'http://lxfq.smqr.net/login_'}}
                    onNavigationStateChange={e => this.onNavigationStateChange(e)}
                />
            </>
        );
    }
}

const styles = StyleSheet.create({
});
