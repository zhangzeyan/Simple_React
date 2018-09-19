const ADD_COURSE = '加课程'
const REMOVE_COURSE = '减课程'

//1.新建store
//通过reducer建立
//根据老的state和action 生成新的state
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_COURSE:
            return state + 1
        case REMOVE_COURSE:
            return state - 1
        default:
            return 15
    }
}




export function addCourse() {
    return {type: ADD_COURSE}
}

export function removeCourse() {
    return {type: REMOVE_COURSE}
}


export function addCourseAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addCourse())
        }, 2000)
    }
}


// function listener() {
//     const current = store.getState()
//     console.log(`现在有${current}门课程`)
// }
// store.subscribe(listener)