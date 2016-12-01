/**
 * Created by liuwei on 16/11/4.
 */

//  导入系统的东西
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TochableOpacity,
} from 'react-native';

var BottomJson = require('./MineBottomView.json');

//  创建组件
var LVMineBottomView = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {/*创建组件*/}
                {this.renderAllItems()}
            </View>
        )
    },
    renderAllItems(){
        //创建组件数组
        var ItemsArr = [];
        //遍历数据,创建组件放到组件数组中
        for(var i=0;i<BottomJson.length;i++){
            //取出每一数据数组中的对象
            var item = BottomJson[i];
            //创建组件放入组件数组中
            ItemsArr.push(
                <View style={styles.outerViewStyle}>
                    <Image source={{uri:item.icon}} style={styles.imageStyle}/>
                    <Text style={styles.textStyle}>{item.title}</Text>
                </View>
            )

        }
        return ItemsArr;
    },
})

//  创建样式
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5
    },
    outerViewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle:{
        width:50,
        height:30,
        resizeMode:'contain'
    },
    textStyle:{
        fontSize:12,
        color:'gray'
    },
})

//  导出组件
module.exports = LVMineBottomView;