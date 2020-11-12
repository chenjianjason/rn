import React  from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    flex: {
        display: 'flex'
    },
    flexColCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexMainCenter: {
        justifyContent: 'center'
    },
    flexMainStart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    flexMainBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexMainAround: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flexCrossCenter: {
        alignItems: 'center' 
    }
    ,red: {
        color: 'red'
    },
    themeColor: {
        color: '#252A39'
    }
});