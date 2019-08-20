import React, { Component } from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd'
export default class Index extends Component {
    render() {
        return (
            <div className="nav">
                <div className="left">
                    <ul>
                        <li>
                            <NavLink to="/home" exact>首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/honor">
                                王者荣耀
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <Icon type="align-center" />
                </div>
            </div>
        )
    }
}
