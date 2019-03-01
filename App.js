/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const Dimensions =require('Dimensions');//获取系统得Dimensions类
// const {width,height,scale}=Dimensions.get('window');

// type Props = {};
export default class App extends Component<Props> {
  render() {
  
    return (
      <View style={{marginTop:50}}>
        <Text style={{color:'yellow',fontSize:18}}> 
        <Text style={styles.textStyle} numberOfLines={5}>
        我是一段个性文字，我的名字"去去去"
        </Text>
        </Text>
      </View>
    );
  }
}


//StyleSheet.create 样式布局
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',//伸缩项目在主轴线的对齐方式
    backgroundColor: '#F5FCFF',
    flexDirection:'column', //主轴方向
    alignItems:'center',//交叉轴对齐方式
    flexWrap:'wrap',// 定义如何换行
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
  yellow:{width:102,
    height:60,
    backgroundColor:'yellow',
    textAlign:'center',
    fontSize:20
  },
  red:{width:103,
    height:60,
    backgroundColor:'red',
    textAlign:'center',
    fontSize:20

  },
  green:{width:103,
    height:60,
    backgroundColor:'green',
    textAlign:'center',
    fontSize:20
  },
  textStyle:{
    backgroundColor:'red'
    }
});
