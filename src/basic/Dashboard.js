import React from 'react'
import {Button, List} from 'antd-mobile'
import {Route, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from './Auth.Redux'
import {logout} from './Auth.Redux'


@connect(
    //你要state什么属性放到props里
    state => state.name,
    //你要什么方法，放到props里，自动dispatch
    {login, logout})
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const redirectToLogin = <Redirect to='/login'/>
        const pageList = ['第一个页面', '第二个页面', '第三个页面']
        const routerList = ['/dashboard/first', '/dashboard/second', '/dashboard/third']

        const app = (<div>
            <List renderHeader={() => '页面'}>
                <List.Item><Link to={routerList[0]}>{pageList[0]}</Link></List.Item>
                <List.Item><Link to={routerList[1]}>{pageList[1]}</Link></List.Item>
                <List.Item><Link to={routerList[2]}>{pageList[2]}</Link></List.Item>
            </List>
            {this.props.isAuth ? <button onClick={this.props.history}>{this.props.name}, 注销 </button> : null}
        </div>)


        return this.props.isAuth ? app : redirectToLogin
    }

}


export default Dashboard