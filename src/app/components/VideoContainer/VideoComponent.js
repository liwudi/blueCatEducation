import React, { Component } from 'react';
import Styles from "../../pages/Home/HomeStyles";
export default class VideoComponent extends Component{

    render(){
        var item = this.props.item;
        return (
            <div style={Styles.itemStyle}>
                <img style={Styles.itemImg} src={item.imgSrc} alt=""/>
                <div>
                    <h3 className='titleStyle' style={{padding: '20px 20px 0 20px'}}>{item.title}</h3>
                    <p className="font-note" style={{padding:'3px 20px'}}>
                        <span>{item.type}</span>
                        <span style={{marginLeft:'10px'}}>{item.lever}</span>
                    </p>
                    <p className="lineHeight20" style={{padding:'0 20px'}}>
                        ￥{item.price}
                    </p>
                </div>
            </div>
        )
    }
}