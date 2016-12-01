/**
 * Created by liuwei on 16/11/3.
 */
/**
 * Created by liuwei on 16/11/3.
 */

//  导入系统的东西
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//  创建组件
var LVHomeDetail = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Text>首页详情页</Text>
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
        backgroundColor: 'blue',
    }
})

//  导出组件
module.exports = LVHomeDetail;