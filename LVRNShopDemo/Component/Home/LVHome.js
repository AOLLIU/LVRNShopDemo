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
    Image,
    TouchableOpacity,
    TextInput,
    Platform,
} from 'react-native';

var LVHomeDetail = require('./LVHomeDetail');

var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;

//  创建组件
var LVHome = React.createClass({
    render(){
        return(
        <View style={styles.outViewStyle}>
            {/*导航条*/}
            {this.renderNavBar()}
            {/*中间部分*/}

        </View>
        )
    },

    // 导航条
    renderNavBar(){
        return(
            <View style={[styles.navBarStyle]}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{alert('点左边')}}>
                    <Text style={styles.leftTextStyle}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="输入商家 商圈 品类"
                />
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点右边1')}}>
                        <Image source={{uri: 'icon_homepage_message'}} style={[styles.rightNavImgStyle,{}]}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点右边2')}}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.rightNavImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },


    onPressNextPageButton(){
        this.props.navigator.push({
            component:LVHomeDetail
        })
    }

})

//  创建样式
const styles = StyleSheet.create({
    outViewStyle:{
        flex: 1,
        backgroundColor: 'white',
    },
    navBarStyle:{
        height:Platform.OS == 'ios'? 64 : 64,
        width:ScreenW,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    leftTextStyle:{
        // iOS
        marginTop:Platform.OS == 'ios'? 10 : 0,
        color:'white',
    },
    textInputStyle:{
        width:ScreenW * 0.75,
        height:Platform.OS == 'ios'? 34:40,
        backgroundColor:'white',
        fontSize:14,
        borderRadius:17,
        paddingLeft:10,
        // iOS
        marginTop:Platform.OS == 'ios'? 22 : 0,
    },
    rightViewStyle:{
        marginTop:Platform.OS == 'ios'? 10 : 0,
        flexDirection:'row'
    },
    rightNavImgStyle:{
        width:24,
        height:24,
    },

})

//  导出组件
module.exports = LVHome;