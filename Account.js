import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Button } from 'react-native';



export default class Message extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>我的界面</Text>
                <Button title={"退出登录"}
                    onPress={() => navigate('Login')}
                ></Button>
            </View>
        );
    }
}