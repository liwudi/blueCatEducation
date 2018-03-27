/**
 * Created by mapbar_front on 2018/3/27.
 */
import React,{ Component } from 'react';
import { Carousel, Avatar } from 'antd';
import Styles from './HomeStyles';
import '../../css/Main.css';
export default class Home extends Component{
    render(){
        return (
            <div className="wrapper autoBox bgWhite">

                {/*第一部分*/}
                <div className="center" style={Styles.height400}>

                    <div className="flex-box" style={Object.assign({},Styles.height400,Styles.bannerBox)} >
                        <div style={{width: '200px',height:'400px'}}>
                            <div style={{width: '200px',height:'200px'}}>
                                <img style={{width: '200px',height:'200px'}} src="https://img.mukewang.com/5a5d55de00015cba05120512.jpg" alt=""/>
                            </div>
                            <div style={{width: '200px',height:'200px'}}>
                                <img style={{width: '200px',height:'200px'}} src="https://img.mukewang.com/5a5d55de00015cba05120512.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="flex1" style={{overflow: 'hidden'}}>
                            <div style={{height: '300px',overflow:'hidden'}}>
                                <Carousel autoplay={true}>
                                    <img src="https://img.mukewang.com/5ab37c330001fcfe09360316.jpg" alt=""/>
                                    <img src="https://img.mukewang.com/5a9d2f6b0001056209360316.jpg" alt=""/>
                                    <img src="https://img.mukewang.com/5ab8bb2f00016ea009360316.jpg" alt=""/>
                                </Carousel>
                            </div>
                            <div className="flex-box" style={{height: '100px'}}>
                                <div style={{alignItems:'center',marginTop:'5px'}} className="flex1 flex-box flex-col">
                                    <Avatar size="large" icon="user"/>
                                    <p>Web前端攻城狮</p>
                                    <p className="font-note">互联网时代最火热的技术</p>
                                </div>
                                <div style={{alignItems:'center',marginTop:'5px'}} className="flex1 flex-box flex-col">
                                    <Avatar size="large" icon="user"/>
                                    <p>Java攻城狮</p>
                                    <p className="font-note">综合就业排名第一</p>
                                </div>
                                <div style={{alignItems:'center',marginTop:'5px'}} className="flex1 flex-box flex-col">
                                    <Avatar size="large" icon="user"/>
                                    <p>Android攻城狮</p>
                                    <p className="font-note">移动设备市场份额第一</p>
                                </div>
                                <div style={{alignItems:'center',marginTop:'5px'}} className="flex1 flex-box flex-col">
                                    <Avatar size="large" icon="user"/>
                                    <p>PHP攻城狮</p>
                                    <p className="font-note">世界上最好的语言</p>
                                </div>
                                <div style={{alignItems:'center',marginTop:'5px'}} className="flex1 flex-box flex-col">
                                    <Avatar size="large" icon="user"/>
                                    <p>IOS攻城狮</p>
                                    <p className="font-note">可能是全球最好用的系统</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}