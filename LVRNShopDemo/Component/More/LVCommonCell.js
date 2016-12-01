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
    View,
    Image,
    Platform,
    TouchableOpacity,
    Switch,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;


// 创建组件类
var LVCommonCell = React.createClass({
    getDefaultProps(){
        return{
            mainTitle: '',
            subTitle: '',
            isSwitch: false,
            leftIcon: '',
            rightIcon: ''
        }
    },

    getInitialState(){
        return{
            switchValue: false
        }
    },

    render(){
        return(
            <TouchableOpacity onPress={()=>{alert('跳转')}}>
                <View style={styles.outViewStyle}>
                    {/*左边*/}
                    {this.renderLeftView()}
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },

    // 处理左边的内容
    renderLeftView(){
        return(
            <View style={styles.leftViewStyle}>
                <Image source={{
                       uri: this.props.leftIcon}}
                       style={[styles.leftImgStyle, {width:this.props.leftIcon.length == 0 ? 0 :24,
       height:this.props.leftIcon.length == 0 ? 0 :24, marginRight:this.props.leftIcon.length == 0 ? 0 :5}]}
                />
                <Text style={styles.leftTextStyle}>{this.props.mainTitle}</Text>
            </View>
        )
    },

    // 处理右边的内容
    renderRightView(){
        // 临时变量
        var component;
        // 判断
        if(this.props.isSwitch){
            component = <Switch
                onValueChange ={()=>{this.setState({switchValue:!this.state.switchValue})}}
                value={this.state.switchValue}
                style={styles.rightImgStyle}
            />
        }else{
            component = <View style={styles.rightViewStyle}>
                {this.renderRightSubView()}
                <Image source={require('image!icon_cell_rightArrow')} style={styles.rightImgStyle}/>
            </View>
        }
        // 返回
        return component;
    },

    // 右边显示的内容
    renderRightSubView(){
        if(this.props.rightIcon.length == 0){
            return <Text style={{color:'gray'}}>{this.props.subTitle}</Text>
        }else{
            return <Image source={{uri: this.props.rightIcon}}  style={{width:24, height:13}} />
        }
    },

});


// 创建样式类
var styles = StyleSheet.create({
    outViewStyle:{
        height:Platform.OS=='ios' ? 44 : 35,
        // 设置主轴的方向
        flexDirection:'row',
        // 设置主轴的对齐方式
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        // 下边框
        borderBottomColor:'#dddddd',
        borderBottomWidth:1
    },

    leftViewStyle:{
        // 左边距
        marginLeft:8,
        // 主轴的方向
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
    },

    leftImgStyle:{
        borderRadius:12
    },

    leftTextStyle:{
        fontSize:15,
        width:150,
    },

    rightViewStyle:{
        // 主轴的方向
        flexDirection:'row',
        alignItems:'center'
    },

    rightImgStyle:{
        marginRight:8,
        marginLeft:5
    }
});


//  导出组件
module.exports = LVCommonCell;