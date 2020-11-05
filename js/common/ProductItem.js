import React from 'react';
import {ViewPropTypes, Text, StatusBar, StyleSheet, View, Platform, DeviceInfo} from 'react-native';
import {PropTypes} from 'prop-types';

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;
        if (list && list.length === 0) {
            return null;
        }
        return (
            <View></View>
        )
    }
}