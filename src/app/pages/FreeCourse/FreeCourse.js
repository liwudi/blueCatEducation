/**
 * Created by mapbar_front on 2018/3/27.
 */
import React,{ Component } from 'react';
import Config from '../../config';
import Styles from './FreeCourseStyle';
import { Pagination } from 'antd';
import VideoComponent from '../../components/VideoContainer/VideoComponent';

const directionConfig = Config.directionConfig;
const classifyConfig = Config.classifyConfig;
const typeConfig = Config.typeConfig;

export default class FreeCourse extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex:{
                direction: 0,
                classify: 0,
                type: 0
            },
            FreeList: [
                {title:'系统学习Docker 践行De',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img1.mukewang.com/szimg/5a9614850001bc3405400300.jpg'},
                {title:'微信小程序入门与实战',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img2.mukewang.com/szimg/5a7279250001e10705400300.jpg'},
                {title:'Go语言语法入门篇',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img.mukewang.com/5aaf5f370001c40306000338-240-135.jpg'},
                {title:'Elastic Stack从入门到实战',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img2.mukewang.com/szimg/5a7441e30001d4f805400300.jpg'},
                {title:'Java企业级电商项目架构演进之路',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img1.mukewang.com/szimg/5a16336900014ca405400300.jpg'},
                {title:'Java高并发编程与高并发解决方案',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img4.mukewang.com/szimg/5aaa55850001a3ef10800600.jpg'},
                {title:'Ruff物联网应用开发入门',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img3.mukewang.com/5aa77f4c0001f0a706000338-240-135.jpg'},
                {title:'Spring Cloud微服务实战',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img2.mukewang.com/szimg/5a9ca4e80001786305400300.jpg'},
                {title:'IOS开发之网络协议',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img.mukewang.com/5aaf826f00017e6306000338-240-135.jpg'},
                {title:'基于Python玩转人工智能最火框架',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img3.mukewang.com/szimg/5a5ddeda000145b405400300.jpg'},
            ]
        }
    }
    typeEvent(type,index){
        var obj = {};
        if(type == 1){
            obj.direction = index;
        } else if(type == 2){
            obj.classify = index;
        } else if(type == 3){
            obj.type = index;
        }
        console.log(Object.assign({},this.state.currentIndex,obj));
        this.setState({
            currentIndex: Object.assign({},this.state.currentIndex,obj)
        })
    }
    render(){
        return (
            <div className="wrapper autoBox bgWhite center flex-col">
                <div className="width1200">
                    <div className="flex-box border-bottom">
                        <h3 className="width50 lineHeight50">方向</h3>
                        <div className="flex1 flex-box flex-wrap">
                            {
                                directionConfig.map((item,index) => {
                                    return <span
                                        onClick={()=>this.typeEvent(1,index)}
                                        className="itemPad center"
                                        style={Object.assign({},Styles.itemPad,this.state.currentIndex.direction == index ? Styles.checked: {})}
                                        key={index}
                                    >{item}</span>
                                })
                            }

                        </div>
                    </div>
                    <div className="flex-box border-bottom">
                        <h3 className="width50 lineHeight50">分类</h3>
                        <div className="flex1 flex-box flex-wrap">
                            {
                                classifyConfig.map((item,index) => {
                                    return <span
                                        onClick={()=>this.typeEvent(2,index)}
                                        className="center itemPad"
                                        style={Object.assign({},Styles.itemPad,this.state.currentIndex.classify == index ? Styles.checked: {})}
                                        key={index}
                                    >{item}</span>
                                })
                            }

                        </div>
                    </div>
                    <div className="flex-box border-bottom">
                        <h3 className="width50 lineHeight50">类型</h3>
                        <div className="flex1 flex-box flex-wrap">
                            {
                                typeConfig.map((item,index) => {
                                    return <span
                                        onClick={()=>this.typeEvent(3,index)}
                                        className="center itemPad"
                                        style={Object.assign({},Styles.itemPad,this.state.currentIndex.type == index ? Styles.checked: {})}
                                        key={index}>{item}</span>
                                })
                            }

                        </div>
                    </div>
                </div>
                <div style={{width: '100%'}} className="center bgGrey">
                    <div className="width1200">

                        <div className="flex-box spaceBetween flex-wrap" style={{paddingTop: '40px'}}>
                            {
                                this.state.FreeList.map((item, index)=>{
                                    return (
                                        <VideoComponent NoLazy={true} key={index} item={item}/>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
                <div className="center height100">
                    <Pagination defaultCurrent={1} total={500} />
                </div>
            </div>
        )
    }
}