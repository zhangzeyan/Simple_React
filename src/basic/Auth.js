import React from 'react'
import {login,getUserData} from './Auth.Redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Button} from 'antd-mobile'
// import './config'
// import axios from 'axios'


@connect(
    state => state.auth,
    {login,getUserData})
class Auth extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state={
    //         name:{}
    //     }
    // }
    //
    // componentDidMount() {
    //     axios.get('./simple_user/search_first')
    //         .then(res => {
    //             if (res.status === 200) {
    //                 this.setState({name: res.data})
    //             }
    //             console.log(res)
    //         })
    // }

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        const redirectToLogin = <Redirect to='/dashboard'/>
        return (
            <div>
                {/*<h2>我的名字是: {this.state.name.name}, 我今年{this.state.name.age}岁</h2>*/}
                <h2>我的名字是: {this.props.name}, 我今年{this.props.age}岁</h2>
                {this.props.isAuth ? redirectToLogin : null}
                <h2>您没有权限，需要登录才能查看</h2>
                <Button type='primary' onClick={this.props.login}>登录</Button>
            </div>
        )
    }
}

export default Auth