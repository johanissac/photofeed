import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class profile extends Component<Props>{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View >
                <Text>Profile</Text>
            </View>
        )
    }
}