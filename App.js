import React, { Component } from "react";
// StackNavigator用于实现各个页面间的跳转。TabNavigator切换组件，实现同一页面上不同界面的切换。
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Text } from 'react-native'
import HomeScreen from './SwipeableFlat'  // 从HomeScreen页面导入HomeScreen组件，HomeScreen其实是表示HomeScreen.js。./表示当前页面，不可删除
import Login from './Login' // 从NewsScreen页面导入NewsScreen组件
import Account from './Account'
import Message from './Message'

export default class App extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}
const Home = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({
            navigation
        }) => {
            return {
                tabBarLabel: '首页',
                title: '设备状态',
                tabBarIcon: ({
                    focused,
                    tintColor
                }) => {

                    return (<Text >aa</Text >
                  
                    );
                },
            };
        },
    },

    Account: {
        screen: Account,
        navigationOptions: ({
            navigation
        }) => {
            // alert(JSON.stringify(navigation.state.params));

            return {
                tabBarLabel: '我的',
                title: '设备状态2',
                tabBarIcon: ({
                    focused,
                    tintColor
                }) => {

                    return (<Text >bb</Text >
                    );
                },
            };
        },
    },
    Accounts: {
        screen: Message,
        navigationOptions: ({
            navigation
        }) => {

            return {
                tabBarLabel: 'text',
                title: '设备状态2',
                tabBarIcon: ({
                    focused,
                    tintColor
                }) => {

                    return (<Text >bb</Text >
                    );
                },
            };
        },
    },
})

const MainRouter = createStackNavigator(
    {

        HomeScreen1: {
            screen: Home,
            navigationOptions: {
                headerMode: 'none',
                header: null,
            },
        },
        Login: {
            screen: Login,
            navigationOptions: {
                headerMode: 'none',
                header: null,
            },
        },
        Message1: {
            screen: Message,
            navigationOptions: {
                headerMode: 'none',
                header: null,
            },
        },
        
    }, 
    {
        headerMode: 'screen',
        gesturesEnabled: true,
        initialRouteName: 'Login',
        
        animationEnabled: false, // 切换页面时是否有动画效果
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 是否可以左右滑动切换tab
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#ff8500', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#fff', // TabBar 背景色
            },
            labelStyle: {
                fontSize: 14, // 文字大小
            },
        },
    }
)


// StackNavigator 导航组件，用来实现各个界面跳转
// const Navigator =createAppContainer(createStackNavigator(StackRouteConfigs, StackNavigatorConfigs));
const Navigator = createAppContainer(MainRouter);
