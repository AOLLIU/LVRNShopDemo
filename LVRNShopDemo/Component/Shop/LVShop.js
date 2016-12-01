
//  导入系统的东西
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//  创建组件
var LVShop = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Text>商城</Text>
            </View>
        )
    }
})

//  创建样式
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    }
})

//  导出组件
module.exports = LVShop;