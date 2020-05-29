import React,  { useMemo, useCallback, useRef } from 'react'

const UseRefCom = () => {
    const inputValue = useRef()
    const getValue = ()=>{
        console.log(inputValue.current.value)
    }
    return (
        <div>
            <h1>使用useRef</h1>
            <input type="text" ref={inputValue}  />
            <button onClick={getValue}>获取input值</button>
        </div>
    )
}

export default function OtherHooks() {
    const obj1 = {taller:'180',age:'24',name:"tim"}
    const obj2 = {taller:'170',age:'18',sex:"女",name:'coco'}
    // 使用useMemo ，useCallback跟useMemo不一样的是返回值是callback本身，⽽useMemo返回的是callback函数的返回值
    const memoValue = useMemo( () => Object.assign(obj1,obj2), [obj1,obj2] )
    // 使用useCallback
    const memoCallback = useCallback( () => Object.assign(obj1,obj2), [obj1,obj2] )
    console.log(memoCallback) //返回值是callback本身  () => Object.assign(obj1, obj2)
    return (
        <div>
            <h1>使用useMemo</h1>
            <p> 姓名：{memoValue.name}</p>
            <h1>使用useCallback</h1>
           <p>年龄：{memoCallback().age}</p>
           <UseRefCom></UseRefCom>
        </div>
    )
}
