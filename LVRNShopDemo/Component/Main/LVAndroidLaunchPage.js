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

//导入外部组件
var LVMain = require('./LVMain');


//  创建组件
var LVAndroidLaunchPage = React.createClass({

    getDefaultProps(){
      return{
          timeInterval:2000,
      }
    },

    render(){
        return(
            <View style={styles.container}>
                <Text>launchPage</Text>
            </View>
        )
    },

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.replace({
                component:LVMain
            })
        },this.props.timeInterval)
    },

})

//  创建样式
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})

//  导出组件
module.exports = LVAndroidLaunchPage;