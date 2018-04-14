import React, { Component } from 'react';
import Styles from "../../pages/Home/HomeStyles";
import { Rate, Icon } from 'antd';
import componentStyles from './VideoComponentStyles';

export default class VideoComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loadingImg: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
            showImg: false
        }
    }
    showImage(nextProps){
        if (this.state.showImg) {
            return;
        }
        var min = nextProps.viewport.top;
        var max = nextProps.viewport.top + nextProps.viewport.height;
        var height = this.refs.myImg.offsetTop;

        if((height >= min) && (max >= height)){
            this.setShowImage(true);
        }
    }
    setShowImage(isTrue){
        this.setState({
            showImg: !!(isTrue)
        });
    }
    componentWillReceiveProps(nextProps,nextState){
        console.log(nextProps,nextState);
        nextProps.viewport && this.showImage(nextProps);
    }
    render(){
        var item = this.props.item;
        return (
            <div style={Styles.itemStyle}>
                <img style={Styles.itemImg} ref='myImg' src={this.state.showImg ? item.imgSrc : this.state.loadingImg} alt=""/>
                <div>
                    <h3 className='titleStyle' style={{padding: '20px 20px 0 20px',height:'70px'}}>{item.title}</h3>
                    <p className="font-note" style={{padding:'3px 20px'}}>
                        <span>{item.type}</span>
                        <span className="margin-left10">{item.lever}</span>
                        <span className="margin-left10"><Icon type="user" />{item.num||'无数据'}</span>
                    </p>
                    <Rate style={componentStyles.titlePadding} defaultValue={item.stars || 5}/>
                    <p className="lineHeight20" style={componentStyles.titlePadding}>
                        ￥{item.price}
                    </p>
                </div>
            </div>
        )
    }
}