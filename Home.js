import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'JillianJil'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>
          {item.key}
          </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width:400,
    marginTop:5,
    textAlign: 'center',
    fontSize:20,
    borderWidth:1

  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',//伸缩项目在主轴线的对齐方式
    backgroundColor: '#F5FCFF',
    flexDirection:'column', //主轴方向
    alignItems:'center',//交叉轴对齐方式
    flexWrap:'wrap',// 定义如何换行
  },
})