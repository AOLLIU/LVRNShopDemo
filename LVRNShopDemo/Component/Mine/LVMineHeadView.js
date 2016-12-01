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
    ScrollView,
    Platform,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;
var ScreenH = Dimensions.get('window').height;

//  创建组件
var LVMineHeadView = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {/*上部分*/}
                <TopHeadView />
                {/*下部分*/}
                <TopBottomView />
            </View>
        )
    },
})

/**--------创建头部的组件类-----------**/

var TopHeadView = React.createClass({


    getDefaultProps(){
        return{
            topData:{"icon":"see", "title":"电商应用", "rank":"avatar_vgirl"}
        }
    },

    render(){
        return(
            <TouchableOpacity onPress={()=>alert('点了')}>
                <View style={styles.topOuterViewStyle}>
                    {/*左边*/}
                    <Image source={{uri:this.props.topData.icon}} style={[styles.topLeftImageStyle]}/>
                    {/*中部*/}
                    <View style={styles.middleViewContainerStyle}>
                        <Image source={{uri:this.props.topData.rank}} style={[styles.topMiddleImageStyle]}/>
                        <Text style={styles.topMiddleTextStyle}>
                            {this.props.topData.title}
                        </Text>
                    </View>
                    {/*右边*/}
                    <Image source={require('image!icon_cell_rightArrow')} style={[styles.topRightImageStyle]}/>
                </View>
            </TouchableOpacity>
        )
    }
})

var CenterData = require('./CenterData.json');


/**--------创建DI部的组件类-----------**/
var TopBottomView = React.createClass({
    
    render(){
        return(
            <View style={styles.bottomViewContainerStyle}>
                {this.renderAllBottomItem()}
            </View>
        )
    },

    renderAllBottomItem(){
        var allItems=[];
        for(var i=0;i<CenterData.length;i++){
            //取出每一个数据
            var item = CenterData[i];
            
            //将组件装入数组
            allItems.push(
                <TouchableOpacity key={i} onPress={()=>alert('点了')}>
                    <View style={styles.bottomViewItemContainerStyle}>
                        <Text  style={{color: 'white'}}>{item.number}</Text>
                        <Text style={{color: 'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return allItems;
    }
})




//  创建样式
const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(255,96,0,1.0)',
    },

    topOuterViewStyle:{
        height:ScreenH / 3,
        width:ScreenW,
        flexDirection:'row',
        alignItems:'center',

        // 设置主轴对齐方式
        justifyContent:'space-around'
    },
    topLeftImageStyle:{
        width:Platform.OS == 'ios'? 70:60,
        height:Platform.OS == 'ios'? 70:60,
        borderRadius:Platform.OS == 'ios'? 35:30
    },
    middleViewContainerStyle:{

        flexDirection:'row',
        // 宽度
        width: ScreenW * 0.65,
        // 侧轴对齐方式
        alignItems:'center'
    },
    topMiddleImageStyle:{
        width:18,
        height:18,
    },
    topMiddleTextStyle:{
        color:'white',
        fontSize:15,
    },
    
    
    
    bottomViewContainerStyle:{
        backgroundColor:'rgba(0,5,5,0.3)',
        height:44,
        flexDirection:'row',
        alignItems:'center',
        // 绝对定位
        position:'absolute',
        bottom:0
    },
    bottomViewItemContainerStyle:{
        width: ScreenW / 3.0 + 1,
        // 对齐方式
        justifyContent:'center',
        alignItems:'center',

        borderRightColor:'white',
        borderRightWidth:1
    },
    
})

//  导出组件
module.exports = LVMineHeadView;