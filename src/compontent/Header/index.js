import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Icon} from 'antd'
import './index.scss'
let imgLog = require('../../common/img/log.png')
class Index extends Component {
    search = () => {
        this.props.history.push('/search')
    }
    home = () => {
        this.props.history.push('/')
    }
    app = () => {
        alert('禁止打开App')
    }
    render() {
        return (
            <div className="header">
                <div className="left">
                    <img src={imgLog} alt="0" onClick={this.home}/>
                </div>
                <div className="right">
                    <div className="search">
                        <div className="box" onClick={this.search}>
                            <Icon className="con" type="search" />
                        </div>
                    </div>
                    <div className="app" onClick={this.app}>
                        打开App
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Index)