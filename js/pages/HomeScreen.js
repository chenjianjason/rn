import React from 'react'
import { View, Text, Button, Platform, BackHandler, ToastAndroid, StyleSheet, FlatList, RefreshControl, Dimensions } from 'react-native';
import BackPressComponent from '../common/BackPressComponent';
import ProductItem from '../components/ProductItem'

class HomeScreen extends React.Component {
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

    onBackPress() {
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

    renderItem(data) {
        const item = data.item;
    
        return (
            <ProductItem
                item={item}
            />
        );
    };

    render() {
        const list = [
            {
                id: 1,
                url: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
                name: 'name',
                description: ['desA', 'desB'],
                applyNum: '12421',
                range: '2000-5000',
                term: '1 years',
                paymentDate: '30 days'
            },
            {
                id: 2,
                url: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
                name: 'name2',
                description: ['desA', 'desB'],
                applyNum: '12421',
                range: '2000-5000',
                term: '1 years',
                paymentDate: '30 days'
            },
            {
                id: 3,
                url: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
                name: 'name2',
                description: ['desA', 'desB'],
                applyNum: '12421',
                range: '2000-5000',
                term: '1 years',
                paymentDate: '30 days'
            }
        ]
        const {height, width} = Dimensions.get('window');

        return (
                <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Button
                    title="go to Borrow"
                    onPress={() => this.props.navigation.navigate('BorrowScreen')}
                />

                

                <FlatList
                    data={list}
                    renderItem={data => this.renderItem(data)}
                    keyExtractor={item => item.id.toString()}
                    style={{width: width}}
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

export default HomeScreen;