import React, {useEffect, useRef,useState } from 'react'


// 自定义的Hooks  CustomHooks
export default function CustomHooks() {
    const [title,setTitle] = useState('我是原本的title') 
    const useChangeTitle = (title)=> {
        // useEffect副作用处理钩子
        useEffect (()=>{
            document.title = title
        },[title])
    }
    useChangeTitle(title)
    const inputValue = useRef()
    const changeTitle = ()=>{
        const newTitle = inputValue.current.value
        console.log(inputValue.current.value)
       return setTitle(newTitle)

    }
    
    return (
        <div>
            <h1>演示自定义的Hooks</h1>
            <input ref={inputValue} />
            <button onClick={changeTitle}>修改标题</button>
        </div>
    )
}
