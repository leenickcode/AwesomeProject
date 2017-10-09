/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PropsTest extends Component {
    constructor(props){
        super(props)

    }
    //定义默认属性
  static  defaultProps={
        name:"小明"
    }
    /***
     * 属性检查
     * @type {{name: (string|*|shim|string|string|React$PropType$Primitive.<string>)}}
     */

    // static propTypes={
    //     name:PropTypes.string
    // }
    render() {

        return (
            <View >
                <Text >
                    {this.props.name}
                </Text>

            </View>
        );
    }
}
