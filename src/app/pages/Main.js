/**
 * Created by mapbar_front on 2018/3/26.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';

import '../css/Main.css';

const { Header, Footer, Sider, Content } = Layout;


export default class Main extends Component{
    render(){
        return (
            <div className="wrapper flex-box">
                <Layout>
                    <Header className="flex-box" style={{backgroundColor: '#fff'}}>
                        <Router>
                            <div className="wrapper flex-box" id="nav">
                                <div className="logo" >
                                    <img className="logo-img" src="https://www.imooc.com/static/img/index/logo.png" alt=""/>
                                </div>
                                <Menu
                                    style={{ lineHeight: '62px' }}
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                >
                                    <Menu.Item key="1">
                                        <Icon type="user" />
                                        <span className="nav-text">免费课程</span>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Icon type="user" />
                                        <span className="nav-text">职业发展</span>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Icon type="user" />
                                        <span className="nav-text">项目实战</span>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Icon type="user" />
                                        <span className="nav-text">猫友论坛</span>
                                    </Menu.Item>
                                </Menu>
                                <div className="nav-right flex-box">
                                    <div className="padding-item loadApp">下载App</div>
                                    <div>
                                        <span className="padding-item login">登录</span>
                                        <span className="padding-item">/</span>
                                        <span className="padding-item register">注册</span>
                                    </div>
                                </div>
                            </div>

                        </Router>
                    </Header>
                    <Content className="center">Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}