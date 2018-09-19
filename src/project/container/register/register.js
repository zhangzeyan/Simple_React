import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Radio, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from "../../redux/user.redux";
import '../../index.css'


@connect(
    state => state.user,
    {register})
class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatPwd: '',
            type: 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleRegister() {
        this.props.register(this.state)
    }

    render() {
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        {this.props.msg ?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={v => this.handleChange('repeatPwd', v)}>确认密码</InputItem>
                        <WhiteSpace/>
                        <Radio.RadioItem
                            onChange={() => this.handleChange('type', 'genius')}
                            checked={this.state.type == 'genius'}>牛人</Radio.RadioItem>
                        <WhiteSpace/>
                        <Radio.RadioItem
                            onChange={() => this.handleChange('type', 'boss')}
                            checked={this.state.type == 'boss'}>boss</Radio.RadioItem>
                    </List>
                    <WhiteSpace/>

                    <Button onClick={this.handleRegister} type='primary'>提交</Button>

                </WingBlank>
            </div>)
    }
}

export default Register