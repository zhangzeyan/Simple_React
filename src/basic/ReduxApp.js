import React, {Component} from "react";
import {Button} from 'antd-mobile'

class ReduxApp extends Component {
    render() {
        const store = this.props.store
        const addCourse = this.props.addCourse
        const removeCourse = this.props.removeCourse
        const addCourseAsync = this.props.addCourseAsync
        return (
            <div>
                <h1>{store.getState()}门</h1>
                <Button type='primary' onClick={()=>{store.dispatch(addCourse())}}>添加课程</Button><br/>
                <Button type='primary' onClick={()=>{store.dispatch(removeCourse())}}>删除课程</Button><br/>
                <Button type='primary' onClick={()=>{store.dispatch(addCourseAsync())}}>晚点添加课程</Button>
            </div>
        )
    }
}

export default ReduxApp;