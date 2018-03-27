/**
 * Created by mapbar_front on 2018/3/27.
 */
import React,{ Component } from 'react';
import { Carousel, Avatar, Icon } from 'antd';
import Styles from './HomeStyles';
import '../../css/Main.css';
import Config from '../../config';
const TypeList = Config.careerListConfig;
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            proList: [
                {title:'Spring Cloud微服务实战',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img3.mukewang.com/szimg/5a9ca4e80001786305400300.jpg'},
                {title:'Swoole 入门到实战打造高性能赛事直播平台',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img3.mukewang.com/szimg/5ab0fd1400010d7d10800600.jpg'},
                {title:'全网最热门的Python3入门+进阶更快上手实际开发',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img1.mukewang.com/szimg/59b8a486000107fb05400300.jpg'},
                {title:'系统学习Docker 践行DevOps理念',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img3.mukewang.com/szimg/5a9614850001bc3405400300.jpg'},
                {title:'Vue核心技术 Vue+Vue-router+Vuex',type:'实战',lever:'高级',price:'366.00',imgSrc:'https://img4.mukewang.com/szimg/5aab7f270001909810800600.jpg'},
            ]
        }
    }
    render(){
        return (
            <div className="wrapper autoBox bgWhite center">
                <div style={{width:'1200px'}}>
                    {/*第一部分*/}
                    <div className="center" style={Styles.height400}>

                        <div className="flex-box" style={Object.assign({},Styles.height400,Styles.bannerBox)} >
                            <div style={Object.assign(Styles.width200,Styles.height400)}>
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
                                        <div key={index} style={Styles.itemStyle}>
                                            <img style={Styles.itemImg} src={item.imgSrc} alt=""/>
                                            <div>
                                                <h3 style={{padding: '20px 20px 0 20px'}}>{item.title}</h3>
                                                <p className="font-note" style={{padding:'0 20px'}}>
                                                    <span>{item.type}</span>
                                                    <span>{item.lever}</span>
                                                </p>
                                                <p className="lineHeight20" style={{padding:'0 20px'}}>
                                                    ￥{item.price}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}