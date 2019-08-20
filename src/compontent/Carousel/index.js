import React, { Component } from 'react'
import { Carousel } from 'antd'
import './index.scss'
export default class Index extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousel autoplay>
                    <div>
                    <img src="http://img5.imgtn.bdimg.com/it/u=1638695478,3359394321&fm=26&gp=0.jpg" alt="0"/>
                    </div>
                    <div>
                    <img src="http://pic13.nipic.com/20110425/668573_150157400119_2.jpg" alt="0"/>
                    </div>
                    <div>
                    <img src="http://i9.hexun.com/2018-11-24/195299307.jpg" alt="0"/>
                    </div>
                    <div>
                    <img src="http://static01.lvye.com/portal/201604/28/093110pb7151d134r1rvet.jpg" alt="0"/>
                    </div>
                </Carousel>
            </div>
        )
    }
}
