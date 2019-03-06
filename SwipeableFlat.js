import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SwipeableFlatList, TouchableHighlight } from 'react-native';

const CITY_NAMES = ['1', '2', '3', '4', '5'];
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwipeableFlatList
         
          data={CITY_NAMES}

          renderItem={(data) => <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
          </View>}
          renderQuickActions={() => this.getQuickActions()}
          maxSwipeDistance={80}
          bounceFirstRowOnMount={false}
        />
      </View>
    );
  }
  //侧滑菜单渲染
  getQuickActions = () => {
    return <View style={styles.quickAContent}>
      <TouchableHighlight
        onPress={() => this.delete()}
      >
        <View style={styles.quick}>
          <Text style={styles.delete}>删除</Text>
        </View>
      </TouchableHighlight>
    </View>
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#aeffb1',
    height: 70,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,//漂浮的效果
    borderRadius: 5,//圆角
  },
  text: {
    color: '#444444',
    fontSize: 20,
  },
  //侧滑菜单的样式
  quickAContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginBottom: 10,
  },
  quick: {
    backgroundColor: "#ff1d49",
    flex: 1,
    alignItems: 'flex-end',//水平靠右
    justifyContent: 'center',//上下居中
    width: 100,
    borderRadius: 5,
    elevation: 5,//漂浮的效果

  },
  delete: {
    color: "#d8fffa",
    marginRight: 30
  }
});