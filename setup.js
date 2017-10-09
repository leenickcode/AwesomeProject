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
import LifecycleComponent from "./LifecycleComponent";
import  EIComponent,{name,age,sum}  from "./EIComponent";
import PropsTest from "./PropsTest";
import StateTest from "./StateTest";
import Student from"./Student"
import MingStudent from "./MingStudent";

export default class setup extends Component {
    constructor() {
        super()
        this.state = ({
            remove: false
        })
        this.stu=new Student("嚣张",18,"女")
        this.minstu=new MingStudent();
    }

    render() {
        // var params={ name:"aa",age:18,sex:'aaa'}
        // var {name,sex}=params
        return (
            <View>
             <Text>
                 {this.stu.getDescription()}
                 {this.minstu.getDescription()}
             </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});