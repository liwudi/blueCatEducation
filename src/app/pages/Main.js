/**
 * Created by mapbar_front on 2018/3/26.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import { Layout, Menu, Icon, Modal } from 'antd';

import Home from './Home/Home';
import MyCareer from './MyCareer/MyCareer';
import FreeCourse from './FreeCourse/FreeCourse';
import ProjectExcise from './ProjectExcise/ProjectExcise';

import WrappedNormalLoginForm from './components/LoginForm/LoginForm';
import WrappedNormalRegisterForm from './components/RegisterForm/RegisterForm';

import '../css/Main.css';

const { Header, Footer, Sider, Content } = Layout;


export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            isShowModal: true,
            isLogin: true
        }
    }
    ModalCancel(){
        this.setState({
            isShowModal:false
        })
    }
    /**
     * 这里要写登录逻辑。
     */
    loginEvent(){
        this.setState({
            isShowModal: false
        })
    }
    /**
     * 这里要写注册逻辑。
     */
    registerEvent(){
        this.setState({
            isShowModal: false
        })
    }

    clickEvent(value){
        if(value){
            this.setState({
                isShowModal: true,
                isLogin: true
            })
        }else {
            this.setState({
                isShowModal: true,
                isLogin: false
            })
        }
    }
    goPage(){
        alert(1);
        this.props.history.push('/freecourse')
    }
    render(){
        return (
            <div className="wrapper flex-box">
                <Router>
                <Layout>
                    <Header className="flex-box" style={{backgroundColor: '#fff'}}>

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
                                        <span onClick={()=>this.clickEvent(1)} className="padding-item login">登录</span>
                                        <span className="padding-item">/</span>
                                        <span onClick={()=>this.clickEvent(0)} className="padding-item register">注册</span>
                                    </div>
                                </div>
                            </div>


                    </Header>
                    <Content className="center">
                        Content
                        <Route path="/home" component={Home} />
                        <Route path="/freecourse" component={FreeCourse} />
                        <Route path="/macareer" component={MyCareer}/>
                        <Route path="/project" component={ProjectExcise} />
                    </Content>
                    <Footer>Footer</Footer>

                    {/*用户登录注册Modal模态框*/}
                    <Modal
                        style={{width:'300px'}}
                        className='center'
                        visible={this.state.isShowModal}
                        title={this.state.isLogin?'用户登录':'用户注册'}
                        footer={null}
                        onCancel={()=>this.ModalCancel()}
                    >
                        {
                            this.state.isLogin?
                                <WrappedNormalLoginForm
                                    loginEvent = {()=>this.loginEvent()}
                                    goRegister = {()=>this.clickEvent(0)}
                            />: <WrappedNormalRegisterForm
                                    registerEvent = {()=>this.registerEvent()}
                                    goLogin = {()=>this.clickEvent(1)}
                            />
                        }

                    </Modal>
                </Layout>
                </Router>
            </div>
        )
    }
}
