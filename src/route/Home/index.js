import React, { Component } from 'react'
import {Icon} from 'antd'
import './index.scss'
import Carousel from '../../compontent/Carousel'
let data = [
    {
        id:1,
        icon:"edit",
        navName:'全部直播',
        list:[
            {
                id:1,
                img:'http://img2.imgtn.bdimg.com/it/u=2557872237,3486452505&fm=26&gp=0.jpg',
                title:'C9 1:0 CLG LCS夏季赛季后',
                left:'lcs职业',
                right:'12.9万'
            },
            {
                id:2,
                img:'http://img2.imgtn.bdimg.com/it/u=2557872237,3486452505&fm=26&gp=0.jpg',
                title:'C9 1:0 CLG LCS夏季赛季后',
                left:'lcs职业',
                right:'12.9万'
            },
        ]
    },
    {
        id:2,
        icon:"highlight",
        navName:'英雄联盟',
        list:[
            {
                id:1,
                img:'http://img2.imgtn.bdimg.com/it/u=2557872237,3486452505&fm=26&gp=0.jpg',
                title:'C9 1:0 CLG LCS夏季赛季后',
                left:'lcs职业',
                right:'12.9万'
            },
            {
                id:2,
                img:'http://img2.imgtn.bdimg.com/it/u=2557872237,3486452505&fm=26&gp=0.jpg',
                title:'C9 1:0 CLG LCS夏季赛季后',
                left:'lcs职业',
                right:'12.9万'
            },
        ]
    },
    {
        id:3,
        icon:"highlight",
        navName:'星宿',
        list:[
            {
                id:1,
                img:'http://img2.imgtn.bdimg.com/it/u=2557872237,3486452505&fm=26&gp=0.jpg',
                title:'C9 1:0 CLG LCS夏季赛季后',
                left:'lcs职业',
                right:'12.9万'
            },
            {
                id:2,
                img:'http://img2.imgtn.bdimg.com/it/u=2557872237,3486452505&fm=26&gp=0.jpg',
                title:'C9 1:0 CLG LCS夏季赛季后',
                left:'lcs职业',
                right:'12.9万'
            },
        ]
    }]
export default class Index extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <div className="main">
                {
                    data&&data.map(item=>{
                        return <div key={item.id} className="item">
                        <div className="nav">
                            <div className="left">
                                <Icon type={item.icon} />
                                <span>{item.navName}</span>
                            </div>
                            <div className="right">
                                more 》
                            </div>
                        </div>
                        <ul className="Box">
                        {
                           item.list&& item.list.map(v=>{
                               return <li key={v.id} className="item">
                                   <img      
                                       className="img"
                                   src={v.img} alt="0" />
                                   <h3 className="h3">
                                       {v.title}</h3>
                                   <ul className="footer">
                                       <li>{v.left}</li>
                                       <li>{v.right}</li>
                                   </ul>
                               </li>
                           
                           })
                        }
                        </ul>
                        
                    </div>
                    })
                }
                </div>
            </div>
        )
    }
}
