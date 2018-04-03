/**
 * Created by mapbar_front on 2018/4/3.
 */
import React, { Component } from 'react';
import { Router, NavLink, Route, Switch } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class About extends Component{
    render(){
        return (
            <Router history={this.props.history}>
                <div className="center margin-top">
                    <div className="width1200 boxSizing flex-box">
                        <div className="boxSizing width200">
                            <Menu>
                                <Menu.Item key="1">关于我们</Menu.Item>
                                <Menu.Item key="2">团队介绍</Menu.Item>
                                <Menu.Item key="3">企业合作</Menu.Item>
                                <Menu.Item key="4">人才招聘</Menu.Item>
                                <Menu.Item key="5">讲师招募</Menu.Item>
                                <Menu.Item key="6">联系我们</Menu.Item>
                                <Menu.Item key="7">友情链接</Menu.Item>
                            </Menu>
                        </div>
                        <div className="margin-left flex1"></div>
                    </div>
                </div>
            </Router>
        )
    }
}