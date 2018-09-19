import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import {obj3} from './mytest/objectTest'
import {Button} from 'antd-mobile'
import {List} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

// import {createStore} from 'redux'

class App extends Component {
    render() {
        let message = ['男', 28]
        let obj = {name: 'simple', age: 28, sex: 'man'}

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Simple React</h1>
                </header>
                <p className="App-intro">
                    {helloSomeBody('Simple')}<br/>
                    {information(...message)}<br/>
                    {Object.keys(obj)}<br/>
                    {Object.values(obj)}<br/>
                    {Object.entries(obj)}<br/>
                    {console.log(obj3)}
                </p>
                <MyTextView text="Zhang Zeyan"></MyTextView>
                <MyTextView2 text="Zhang2 Zeyan"></MyTextView2>

            </div>
        );
    }


}

class MyTextView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: ['Chinese', 'Math', 'English']
        }
    }

    addNewSubject(subjectName) {
        this.setState({
            subject: [...this.state.subject, subjectName]
        })
    }

    render() {
        console.log("正在加载组件")
        return (
            <div>
                <p>This is MyTextView, it's value is {this.props.text}</p>

                <p>  {this.state.subject.map(item => {
                    return <li key={item + Math.random()}>{item}</li>
                })}</p>

                <List renderHeader={() => '学科'}>
                    {this.state.subject.map(item => {
                        return <List.Item key={item + Math.random()}>{item}</List.Item>
                    })}
                </List>


                <Button onClick={() => this.addNewSubject('Physical'+ Math.random())}>add New Subject</Button>
            </div>
        )
    }

    componentWillMount() {
        console.log("马上就要加载组件")
    }

    componentDidMount() {
        console.log("组件加载完毕")
    }

}

function MyTextView2(props) {
    return <p>This is MyTextView2, it's value is {props.text}</p>
}

function information(sex, age) {
    return `the person is ${sex}, ${age}`
}

const helloSomeBody = (name1 = 'admin') => {
    return `Hello, ${name1}`
}

export default App;
