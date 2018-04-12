import React, { Component } from 'react';
import Styles from "../../pages/Home/HomeStyles";
import { Rate, Icon } from 'antd';
import componentStyles from './VideoComponentStyles';

export default class VideoComponent extends Component{

    render(){
        var item = this.props.item;
        return (
            <div style={Styles.itemStyle}>
                <img style={Styles.itemImg} src={item.imgSrc} alt=""/>
                <div>
                    <h3 className='titleStyle' style={componentStyles.titleStyle}>{item.title}</h3>
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