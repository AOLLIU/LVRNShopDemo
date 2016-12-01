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
    ScrollView,
    Platform,
    TouchableOpacity,
    Image,
} from 'react-native';


var LVCommonCell = require('./LVCommonCell');

//  创建组件
var LVMore = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {/*头部导航条*/}
                {this.renderNavigationBar()}

                {/*内容*/}
                <ScrollView>
                    <View style={{marginTop:15}}>
                        <LVCommonCell
                            mainTitle="扫一扫"
                        />
                    </View>
                    <View style={{marginTop:15}}>
                        <LVCommonCell
                            mainTitle="省流量模式"
                            isSwitch={true}
                        />
                        <LVCommonCell
                            mainTitle="消息提醒"
                        />
                        <LVCommonCell
                            mainTitle="邀请好友使用"
                        />
                        <LVCommonCell
                            mainTitle="清空缓存"
                            subTitle="9.99MB"
                        />
                    </View>
                    <View style={{marginTop:15}}>
                        <LVCommonCell
                            mainTitle="省流量模式"
                            isSwitch={true}
                        />
                        <LVCommonCell
                            mainTitle="消息提醒"
                        />
                        <LVCommonCell
                            mainTitle="邀请好友使用"
                        />
                        <LVCommonCell
                            mainTitle="省流量模式"
                            isSwitch={true}
                        />
                        <LVCommonCell
                            mainTitle="消息提醒"
                        />
                        <LVCommonCell
                            mainTitle="邀请好友使用"
                        />
                        <LVCommonCell
                            mainTitle="清空缓存"
                            subTitle="9.99MB"
                        />
                    </View>
                    <View style={{marginTop:15}}>
                        <LVCommonCell
                            mainTitle="省流量模式"
                            isSwitch={true}
                        />
                        <LVCommonCell
                            mainTitle="消息提醒"
                        />
                        <LVCommonCell
                            mainTitle="邀请好友使用"
                        />
                    </View>
                </ScrollView>

            </View>
        )
    },

    //头部导航条
    renderNavigationBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{alert('点左边')}}>
                    <Image source={{uri: ''}} style={[styles.rightNavImgStyle, {marginLeft:8}]}/>
                </TouchableOpacity>
                {/*中间*/}
                <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>更多</Text>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点右边1')}}>
                        <Image source={{uri: 'icon_mine_setting'}} style={[styles.rightNavImgStyle, {marginRight:8}]}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
})

//  创建样式
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8'
    },
    navBarStyle:{
        height:Platform.OS == 'ios'? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // iOS
        paddingTop:Platform.OS == 'ios'? 10 : 0
    },
    rightNavImgStyle:{
        width:24,
        height:24
    }

})

//  导出组件
module.exports = LVMore;