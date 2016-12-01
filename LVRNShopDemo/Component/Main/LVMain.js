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
    Navigator,
    Platform,//判断系统
} from 'react-native';

//  因为要同时适配iOS和Android,因此使用第三方组件TabNavigator
//  安装导航tabbar `npm i react-native-tab-navigator —save`
import TabNavigator from 'react-native-tab-navigator';


//导入4大组件
var LVHome = require('../../Component/Home/LVHome');
var LVShop = require('../../Component/Shop/LVShop');
var LVMore = require('../../Component/More/LVMore');
var LVMine = require('../../Component/Mine/LVMine');


//  创建组件
var LVMain = React.createClass({

    //状态机
    getInitialState(){
        return{
            selectedTab:'home'
        }
    },

    //渲染组件
    render(){
        return(
            //TabBar 
            <TabNavigator>
                {/*首页*/}
                {this.renderTabItem('icon_tabbar_homepage', 'icon_tabbar_homepage_selected', '首页', 'home', 'home', LVHome, '')}
                {/*商城*/}
                {this.renderTabItem('icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', '商家', 'shop', 'shop', LVShop, '')}
                {/*更多*/}
                {this.renderTabItem('icon_tabbar_misc', 'icon_tabbar_misc_selected', '更多', 'more', 'more', LVMore, '')}
                {/*我的*/}
                {this.renderTabItem('icon_tabbar_mine', 'icon_tabbar_mine_selected', '我的', 'mine', 'mine', LVMine, '10')}
            </TabNavigator>
        )
    },

    // 单独的Item
    renderTabItem(icon, selectedIcon, title, selectedTab, initialRouteName, component, badgeText){
        return(
            <TabNavigator.Item
                renderIcon={() => <Image source={{uri: icon}} style={styles.tabIconStyle}/> }
                renderSelectedIcon={() => <Image source={{uri: selectedIcon}} style={styles.tabIconStyle} />}
                title={title}
                selectedTitleStyle={{color:'rgba(255,96,0,1.0)'}}
                renderBadge={()=> this.renderBadgeView(badgeText)}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
                <Navigator
                    initialRoute={{ name: initialRouteName, component: component }}
                    configureScene={(route) => { //过渡动画
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                    renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }}
                />
            </TabNavigator.Item>
        )
    },

    renderBadgeView(badgeText){
        if (badgeText.length == 0) return;
        return(
            <View style={styles.badgeViewStyle}>
                <Text style={styles.badgeTextStyle}>{badgeText}</Text>
            </View>
        )
    }
    
})

//  创建样式
const styles = StyleSheet.create({
    tabIconStyle:{
        width:Platform.OS == 'ios'? 30:25,
        height:Platform.OS == 'ios'? 30:25,
    },
    badgeViewStyle:{
        width:16,
        height:16,
        backgroundColor:'red',
        borderRadius:8,
        marginTop:5,
        justifyContent:'center',
        alignItems:'center'
    },

    badgeTextStyle:{
        backgroundColor:'rgba(0,0,0,0)',
        color:'white',
        fontSize:10,
    }
})

//  导出组件
module.exports = LVMain;