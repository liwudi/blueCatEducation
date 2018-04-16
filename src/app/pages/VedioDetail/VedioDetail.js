/**
 * Created by mapbar_front on 2018/4/17.
 */
import React, { Component } from 'react';

export default class VedioDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieSrc:'http://pic.ibaotu.com/00/56/77/28b888piCuvW.mp4'
        }
    }
    render(){
        return (
            <div>

                <video style={{width:'100%',height:'500px'}} controls="controls">
                    <source style={{width:'100%',height:'500px'}} src={this.state.movieSrc} type="video/mp4" />
                    <source style={{width:'100%',height:'500px'}} src={this.state.movieSrc} type="video/ogg" />
                    <source style={{width:'100%',height:'500px'}} src={this.state.movieSrc} type="video/webm" />
                    <object style={{width:'100%',height:'500px'}} data={this.state.movieSrc} width="320" height="240">
                        <embed style={{width:'100%',height:'500px'}} src={this.state.movieSrc} width="320" height="240" />
                    </object>
                </video>
                <div>
                    <h2>推荐课程</h2>
                </div>
            </div>
        )
    }
}