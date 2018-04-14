/**
 * Created by mapbar_front on 2018/3/27.
 */
import React,{ Component } from 'react';
import { Carousel, Avatar, Icon, Pagination } from 'antd';
import VideoComponent from '../../components/VideoContainer/VideoComponent';
import Styles from './HomeStyles';
import '../../css/Main.css';
import Config from '../../config';
const TypeList = Config.careerListConfig;
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewport: {},
            proList: [
                {title:'Spring Cloud微服务实战',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img3.mukewang.com/szimg/5a9ca4e80001786305400300.jpg'},
                {title:'Swoole 入门到实战打造高性能赛事直播平台',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img3.mukewang.com/szimg/5ab0fd1400010d7d10800600.jpg'},
                {title:'全网最热门的Python3入门+进阶更快上手实际开发',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img1.mukewang.com/szimg/59b8a486000107fb05400300.jpg'},
                {title:'系统学习Docker 践行DevOps理念',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img3.mukewang.com/szimg/5a9614850001bc3405400300.jpg'},
                {title:'Vue核心技术 Vue+Vue-router+Vuex',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img4.mukewang.com/szimg/5aab7f270001909810800600.jpg'},
            ],
            newCourseList: [
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
    componentDidMount(){
        window.addEventListener('scroll', () => {
            this.updateViewport();
        }, false);
        window.addEventListener('resize', () => {
            this.updateViewport();
        }, false);
        this.updateViewport();
    }
    componentWillUnMount(){
        window.removeEventListener('scroll', () => {
            this.updateViewport();
        });
        window.removeEventListener('resize', () => {
            this.updateViewport();
        });
    }
    updateViewport(){
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            console.log(window.pageYOffset,window.innerHeight);
            this.setState({
                viewport: {
                    top: window.pageYOffset,
                    height: window.innerHeight
                }
            })
        },200);
    }
    render(){
        return (
            <div className="wrapper autoBox bgWhite center">
                <div style={{width:'1200px'}}>
                    {/*第一部分*/}
                    <div className="center" style={Styles.height400}>

                        <div className="flex-box" style={Object.assign({},Styles.height400,Styles.bannerBox)} >
                            <div style={Object.assign({},Styles.width200,Styles.height400)}>
                                <div style={Styles.img}>
                                    <img style={Styles.img} src="https://img.mukewang.com/5a5d55de00015cba05120512.jpg" alt=""/>
                                </div>
                                <div style={Styles.img}>
                                    <img style={Styles.img} src="https://img.mukewang.com/5a5d55de00015cba05120512.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="flex1 hiddenBox">
                                <div style={{height: '300px'}}>
                                    <Carousel style={Styles.height300} autoplay={true}>
                                        <img style={Styles.height300} src="https://img.mukewang.com/5ab37c330001fcfe09360316.jpg" alt=""/>
                                        <img style={Styles.height300} src="https://img.mukewang.com/5a9d2f6b0001056209360316.jpg" alt=""/>
                                        <img style={Styles.height300} src="https://img.mukewang.com/5ab8bb2f00016ea009360316.jpg" alt=""/>
                                    </Carousel>
                                </div>
                                <div className="flex-box" style={{height: '100px'}}>
                                    {
                                        TypeList.map((item,index) => {
                                            return (
                                                <div key={index} style={{alignItems:'center',marginTop:'5px'}} className="flex1 flex-box flex-col">
                                                    <Avatar size="large" icon={item.icon}/>
                                                    <p>{item.work}</p>
                                                    <p className="font-note">{item.detail}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*第二部分*/}
                    <div>
                        <div className="center" style={Styles.height64}><Icon type="loading" /><h3 className="padding">实战推荐</h3><Icon type="loading" /></div>
                        <div className="flex-box spaceBetween">
                            {
                                this.state.proList.map((item, index)=>{
                                    return (
                                        <VideoComponent viewport={this.state.viewport} key={index} item={item}></VideoComponent>
                                    )
                                })
                            }

                        </div>
                    </div>

                    {/*第三部分*/}
                    <div>
                        <div className="center" style={Styles.height64}><Icon type="loading" /><h3 className="padding">新上好课</h3><Icon type="loading" /></div>
                        <div className="flex-box spaceBetween flex-wrap">
                            {
                                this.state.newCourseList.map((item, index)=>{
                                    return (
                                        <VideoComponent viewport={this.state.viewport} key={index} item={item}></VideoComponent>
                                    )
                                })
                            }

                        </div>
                    </div>

                    {/*第四部分*/}
                    <div>
                        <div className="center" style={Styles.height64}><Icon type="loading" /><h3 className="padding">技能提升</h3><Icon type="loading" /></div>
                        <div className="flex-box spaceBetween flex-wrap">
                            {
                                this.state.newCourseList.map((item, index)=>{
                                    return (
                                        <VideoComponent viewport={this.state.viewport} key={index} item={item}></VideoComponent>
                                    )
                                })
                            }

                        </div>
                    </div>

                    {/*第五部分*/}
                    <div>
                        <div className="center" style={Styles.height64}><Icon type="loading" /><h3 className="padding">前沿技术</h3><Icon type="loading" /></div>
                        <div className="flex-box spaceBetween flex-wrap">
                            {
                                this.state.newCourseList.map((item, index)=>{
                                    return (
                                        <VideoComponent viewport={this.state.viewport} key={index} item={item}></VideoComponent>
                                    )
                                })
                            }

                        </div>
                    </div>

                    {/*第六部分*/}
                    <div className="center height100">
                        <Pagination defaultCurrent={1} total={500} />
                    </div>
                </div>

            </div>
        )
    }
}