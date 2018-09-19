import React, {Component} from "react";
import {Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {addCourse, removeCourse, addCourseAsync} from "./ReduxApp.redux";


// const mapStatetoProps = (state) => {
//     return {num: state}
// }

// const actionCreators = {addCourse, removeCourse, addCourseAsync}

// ReactReduxApp = connect(mapStatetoProps, actionCreators)(ReactReduxApp)

@connect(
    //你要state什么属性放到props里
    state=>({num:state.counter}),
    //你要什么方法，放到props里，自动dispatch
    {addCourse, removeCourse, addCourseAsync})
class ReactReduxApp extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.num}门</h1>
                <Button type='primary' onClick={this.props.addCourse}>添加课程</Button><br/>
                <Button type='primary' onClick={this.props.removeCourse}>删除课程</Button><br/>
                <Button type='primary' onClick={this.props.addCourseAsync}>晚点添加课程</Button>
            </div>
        )
    }
}


export default ReactReduxApp;