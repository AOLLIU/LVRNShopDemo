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
  View
} from 'react-native';

//导入外部组件
var LVMain = require('./Component/Main/LVMain');

//创建组件
export default class LVRNShopDemo extends Component {
  render() {
    return (
        <LVMain />
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
