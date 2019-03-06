import React, {Component} from 'react';
import {Platform,StyleSheet,Text, View,Button} from 'react-native';


export default class Message extends React.Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Message界面</Text>
                <Button title={"Exit"}
            onPress={() => navigate('Login')}
          ></Button>
            </View>
        );
    }
}