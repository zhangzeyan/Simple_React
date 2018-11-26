import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ReduxApp from './ReduxApp'
import ReactReduxApp from './ReactReduxApp'
import Dashboard from './Dashboard'
import Auth from './Auth'
import {store} from "./Store";
import {Provider} from 'react-redux'
// import {addCourse,removeCourse,addCourseAsync} from "./ReduxApp.redux";
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import registerServiceWorker from '.././registerServiceWorker';
import ReduxApp from "./ReduxApp";

//React基础知识，没有使用Redux
// ReactDOM.render(<App />, document.getElementById('root'));

//单独使用Redux
// function render() {
//     ReactDOM.render(<ReduxApp store={store} addCourse ={addCourse} removeCourse={removeCourse} addCourseAsync={addCourseAsync}/>, document.getElementById('root'));
// }
//
// render()
// store.subscribe(render)

// 使用React-Redux
ReactDOM.render(
    <Provider store={store}>
        <ReactReduxApp />
    </Provider>,
    document.getElementById('root')
)
// console.log(store.getState())

//使用Router4
//
//
// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <div>
//                 <Switch>
//                     <Route path='/login' exact component={Auth}/>
//                     <Route path='/dashboard' exact component={Dashboard}/>
//                     <Route path='/dashboard/first' exact component={FirstApp}/>
//                     <Route path='/dashboard/second' exact component={SecondApp}/>
//                     <Route path='/dashboard/third' exact component={ThirdApp}/>
//                     <Route path='/:location' exact component={Test}/>
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
// )
//
// function FirstApp() {
//     return <div>第一个页面</div>
// }
//
// function SecondApp() {
//     return <div>第二个页面</div>
// }
//
// function ThirdApp() {
//     return <div>第三个页面</div>
// }
//
// function Test() {
//     return <div>404页面</div>
// }

registerServiceWorker();
