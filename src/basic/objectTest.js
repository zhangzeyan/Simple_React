let message1 = ['man', 28]
const obj1 = {name: 'zhangsan', course: 'chinese'}
const obj2 = {sex: 'woman', age: 29, name:'lisi', [message1]: 'haha'}
export const obj3 = {...obj1, ...obj2}
