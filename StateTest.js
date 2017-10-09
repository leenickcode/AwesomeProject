/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var name = '小明';
var age = '22';
export {name, age}
export default class StateTest extends Component {
    // state={
    //     size:80
    // }
    constructor(props) {
        super(props)
        this.state = {
            size: 80
        }
    }

    render() {
        return (
            <View>

                <Text onPress={
                    () => {
                        this.setState({
                                size: this.state.size + 10
                            }
                        )
                    }
                }
                >
                    大大大大
                </Text><Text onPress={
                    () => {
                        this.setState({
                                size: this.state.size - 10
                            }
                        )
                    }
                }
                >
                    小小小小
                </Text>
                <Text backgroundColor="red">
                    {this.state.size}
                </Text>
            </View>
        );
    }

}

export function sum(a, b) {
    return a + b;
}
