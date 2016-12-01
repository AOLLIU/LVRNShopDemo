/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//导入系统组件
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';


//启动图片安卓
var LVAndroidLaunchPage = require('./Component/Main/LVAndroidLaunchPage');

//创建组件
export default class LVRNShopDemo extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ name: 'Launch', component: LVAndroidLaunchPage }}
            configureScene={(route) => { //过渡动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
            renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator}                                   />
                        }}
        />
    );
  }
}
//创建样式
const styles = StyleSheet.create({
  container: {
    
  },
});

//注册整个应用组件
AppRegistry.registerComponent('LVRNShopDemo', () => LVRNShopDemo);
