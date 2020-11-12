// 产品item
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, Button} from 'react-native';
import {PropTypes} from 'prop-types';
import gs from '../styles/styles'
import  LinearGradient from 'react-native-linear-gradient';

const ProductItem = ({ item }) => {
    const des = item.description.map((des, i) => (
        <View style={{border: '1px solid red', padding: 10}}>
            <Text>{des}</Text>
        </View>
    ))
    return (
        <TouchableOpacity style={styles.container}>
            <View style={[gs.flexMainBetween, styles.row1]}>
                <View style={gs.flexMainStart}>
                    <Image
                        style={styles.icon}
                        source={{uri: item.url}}
                    ></Image>
                    <Text style={{backgroundColor: 'blue'}}>{item.name}</Text>
                    {des}
				</View>
                <Text style={{backgroundColor: 'green'}}>已有{item.applyNum}人申请</Text>
            </View>
            <View style={gs.flexMainAround}>
                <View style={gs.flexColCenter}>
					<Text>{item.range}</Text>
					<Text>额度</Text>
				</View>
				<View style={gs.flexColCenter}>
					<Text>{item.term}</Text>
					<Text>{item.paymentDate}</Text>
				</View>
                <LinearGradient tart={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#262E3E', '#54607A']} style={gs.flexColCenter}>
                    {/* <Button title="立即申请" /> */}
                    <Text>立即申请</Text>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    icon: {
        width: 22,
        height: 22
    },
    row1: {
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 2
    }
});

export default ProductItem;