import React ,{ useContext }from 'react'
import Child from './Child'
// 方式二：在store中创建数据
import {qx } from '../Store/index'

// 方式一：直接在此页面中，创建context队象
const Context = React.createContext({name:'易烊千玺',age:'20'})
export default function UseContext() {
    const ctx =  useContext(Context)
    console.log(ctx)  // {name: "易烊千玺", age: "20"}
    const life = useContext(qx)
    return (
        <div>
            <h1>使用useContext</h1>
            {/* 使用useContext */}
            <div>姓名：{ ctx.name }</div>
            <div>年龄：{ ctx.age }</div>
            <h2>使用的方式二，在store中创建数据</h2>
            <div>早：{ life.up}</div>
            <div>晚：{ life.down }</div>
            <h3>子组件中使用</h3>
            <Child Context={ctx}></Child>
        </div>
    )
}

