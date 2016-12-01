/**
 * Created by liuwei on 16/11/3.
 */

//  导入系统的东西
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    ScrollView,
} from 'react-native';

var LVCommonCell = require('../More/LVCommonCell');
var LVMineHeadView = require('./LVMineHeadView');
var LVMineBottomView = require('./LVMineBottomView');

var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;
var ScreenH = Dimensions.get('window').height;

//  创建组件
var LVMine = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>

                    {/*头部的View*/}
                    <LVMineHeadView />
                    {/*中间的内容*/}
                    <View style={{marginTop:15}}>
                        {/*上部分*/}
                        <LVCommonCell
                            mainTitle="我的订单"
                            subTitle="查看全部订单"
                            leftIcon="collect"
                        />
                        {/*下部分*/}
                        <LVMineBottomView />
                    </View>


                    {/*下边的内容*/}
                    <View style={{marginTop:15}}>
                        <LVCommonCell
                            mainTitle= '我的钱包'
                            leftIcon= 'draft'
                        />
                        <LVCommonCell
                            mainTitle= '余额'
                            subTitle= '¥0'
                            leftIcon= 'like'
                        />
                        <LVCommonCell
                            mainTitle= '抵用券'
                            subTitle= '0'
                            leftIcon= 'like'
                        />
                        <LVCommonCell
                            mainTitle= '会员卡'
                            leftIcon= 'card'
                        />
                    </View>
                    <View style={{marginTop:15}}>

                        <LVCommonCell
                            mainTitle= '会员中心'
                            subTitle= 'V1'
                            leftIcon= 'card'
                        />
                        <LVCommonCell
                            mainTitle= '积分商城'
                            subTitle= '好礼已上线'
                            leftIcon= 'card'
                        />
                    </View>
                    <View style={{marginTop:15}}>
                        <LVCommonCell
                            mainTitle = "今日推荐"
                            leftIcon="new_friend"
                            rightIcon="me_new"
                        />
                    </View>
                    <View style={{marginTop:15}}>
                        <LVCommonCell
                            mainTitle = "我要合作"
                            subTitle="轻松开店,招财进宝"
                            leftIcon="pay"
                        />
                    </View>
                </ScrollView>
            </View>
        )
    },


})

//  创建样式
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#e8e8e8'
    }
})

//  导出组件
module.exports = LVMine;