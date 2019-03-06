import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    FlatList,
    PanResponder,
    Button
} from 'react-native';

/**
 * 滑动删除列表
    @param listStyle 列表样式
    @param shadowStyle 遮罩层样式
    @param shadowButtonImg 删除按钮图片
    @param shadowButtonImgStyle 删除按钮图片样式
    @param itemWidth 列表元素宽度
    @param listData 列表数据
    @param itemRender 列表元素render方法
    @param deleteItem 列表元素删除方法
    @param loadMore 列表加载更多方法
    @param refresh 列表刷新方法
    @param refreshing 列表刷新状态标示
 */
export default class SlideDeleteList extends Component {
    state = {
        pan:{},
        pan1:{},
        showResponder:{},
        hideResponder:{},
        listData:[],
        showFlag:false,
    };
    dataPhoto = [];

    constructor(props) {
        super(props);
        if(!this.props.itemWidth) {
            throw 'SlideDeleteList缺少参数 itemWidth（列表元素宽度）';
        }
        if(!this.props.listData) {
            throw 'SlideDeleteList缺少参数 listData（列表数据）';
        }
        if(!this.props.itemRender || typeof this.props.itemRender != 'function') {
            throw 'SlideDeleteList缺少参数 itemRender（列表元素render方法）';
        }
        if(!this.props.deleteItem || typeof this.props.deleteItem != 'function') {
            throw 'SlideDeleteList缺少参数 deleteItem（列表元素删除方法）';
        }
        this.processData(props.listData, true);
    }

    _keyExtractor = (item, index) => item.__id;

    getShadowShowResponder(id) {
        return {
            onStartShouldSetPanResponder: () => false,
            onMoveShouldSetPanResponder:  (evt, gestureState) => {
                if(gestureState.dx < -10 && !this.state.showFlag) {
                    return true;
                }else {
                    return false;
                }
            },
            onPanResponderGrant: (evt, gestureState) => {},
            onPanResponderMove: (evt, gestureState) => {
                this.state.pan[id].setValue(gestureState.dx);
            },
            onPanResponderRelease: (evt, gestureState) => {
                Animated.timing(this.state.pan[id],{
                    toValue:-this.props.itemWidth,
                }).start();
                this.state.showFlag = true;
            },
            onPanResponderTerminate: (evt, gestureState) => {
                Animated.timing(this.state.pan[id],{
                    toValue:-this.props.itemWidth,
                }).start();
                this.state.showFlag = true;
            },
        }
    }

    getShadowHideResponder(id) {
        return {
            onStartShouldSetPanResponder: () => false,
            onMoveShouldSetPanResponder:  (evt, gestureState) => {
                if(gestureState.dx > 10) {
                    return true;
                }else {
                    return false;
                }
            },
            onPanResponderGrant: (evt, gestureState) => {},
            onPanResponderMove: (evt, gestureState) => {
                this.state.pan[id].setValue(gestureState.dx-this.props.itemWidth);
            },
            onPanResponderRelease: (evt, gestureState) => {
                Animated.timing(this.state.pan[id],{
                    toValue:0,
                }).start();
                this.state.showFlag = false;
            },
            onPanResponderTerminate: (evt, gestureState) => {
                Animated.timing(this.state.pan[id],{
                    toValue:0,
                }).start();
                this.state.showFlag = false;
            },
        }
    }

    componentWillReceiveProps(newProps) {
        this.processData(newProps.listData);
    }

    processData(sourceData, init = false) {
        let listData = [],
            pan = this.state.pan,
            pan1 = this.state.pan1,
            showResponder = this.state.showResponder,
            hideResponder = this.state.hideResponder;
        let newDataPhoto = [];
        for(let i = 0; i < sourceData.length; i++) {
            let item = Object.assign({},sourceData[i]);
            item.__id = md5(JSON.stringify(item)).toString();
            listData.push(item);
            newDataPhoto.push(item.__id);
            if(this.dataPhoto.indexOf(item.__id) == -1) {
                pan[item.__id] = new Animated.Value(0);
                pan1[item.__id] = new Animated.Value(0);
                showResponder[item.__id] = PanResponder.create(this.getShadowShowResponder(item.__id));
                hideResponder[item.__id] = PanResponder.create(this.getShadowHideResponder(item.__id));
            }
        }
        this.dataPhoto = newDataPhoto;
        if(init) {
            this.state.listData = listData;
            this.state.pan = pan;
            this.state.pan1 = pan1;
            this.state.showResponder = showResponder;
            this.state.hideResponder = hideResponder;
            this.state.showFlag = false;
        } else {
            this.setState({
                listData : listData,
                pan : pan,
                pan1 : pan1,
                showResponder : showResponder,
                hideResponder : hideResponder,
                showFlag : false,
            });
        }
    }

    deleteItem(item) {
        Animated.timing(
            this.state.pan1[item.__id],
            {
                toValue:-this.props.itemWidth,
            },
        ).start(()=>this.props.deleteItem(item));
    }

    loadMore() {
        if(typeof this.props.loadMore == 'function') {
            this.props.loadMore();
        }
    }

    refresh() {
        if(typeof this.props.loadMore == 'function') {
            this.props.refresh();
        }
    }

    shadowRender(item) {
        return (
            <View style={[styles.list_shadow,this.props.shadowStyle]}>
                <Button 
                    onPress={this.deleteItem.bind(this,item)} 
                    imageStyle={[styles.list_shadow_button_img,this.props.shadowButtonImgStyle]} 
                    source={this.props.shadowButtonImg||Icon.delete} />
            </View>
        );
    }

    renderItem(item) {
        let _item = item.item;
        return (
            <Animated.View 
                {...this.state.showResponder[_item.__id].panHandlers}
                style={{
                    width:this.props.itemWidth,
                    flexDirection:"row",
                    overflow:"hidden",
                    transform:[{translateX:this.state.pan1[_item.__id]}],
                }}>
                {this.props.itemRender(_item)}
                <Animated.View
                    {...this.state.hideResponder[_item.__id].panHandlers}
                    style={{
                        transform:[{translateX:this.state.pan[_item.__id]}],
                    }}>
                    {this.shadowRender(_item)}
                </Animated.View>
            </Animated.View>
        );
    }

    render() {
        return (
            <View style={[styles.list,this.props.listStyle]}>
                <FlatList
                    data={this.state.listData}
                    keyExtractor={this._keyExtractor}
                    onEndReachedThreshold={0.1}
                    renderItem={this.renderItem.bind(this)}
                    onEndReached={this.loadMore.bind(this)}
                    onRefresh={this.refresh.bind(this)}
                    refreshing={this.props.refreshing}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems:'center',
    },
    list_shadow: {
        backgroundColor:'#373F48',
        width:100,
        height:50,
        opacity:0.6,
        borderRadius:10,
        marginTop:8,
        alignItems:'center',
        justifyContent:'center',
    },
    list_shadow_button_img: {
        width:34,
        height:34,
    },
});