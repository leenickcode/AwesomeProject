/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
var name ='小明';
var age='22';
export {name,age}
export default class HelloComponent extends Component {
    render() {
        return (
            <View >
                <Text >
                   试试试试
                </Text>

            </View>
        );
    }

}
export  function sum( a,b) {
    return a+b;
}
