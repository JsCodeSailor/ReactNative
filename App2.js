/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput} from 'react-native';


export default class App extends Component {
  render() {
    console.log('ImageResizeMode')
    return (
     <View style={styles.container}>
       <Image source={{uri:'https://www.baidu.com/img/bd_logo1.png'}} style={{flex:1,width:200,
height:100, resizeMode: 'stretch'}}>
        {/* //<Text style={{marginTop: 60, backgroundColor: 'red'}}>3132</Text> */}
</Image>
    <TextInput style={{paddingTop:50}}
    placeholder="132132"
    >
    </TextInput>

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
