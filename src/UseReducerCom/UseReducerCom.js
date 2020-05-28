import React, { useReducer } from 'react'

const initState = {count: 0}

const reducer = (state, action)=>{   
    // 根据dispatch的action，去更新state
    switch (action.type) {
        case 'reset':
            return initState;
        case 'increment':
            return {count:state.count + 1}
        case 'decrement':
            return {count:state.count - 1}
        default:
            return state
    }

}
export default function UseReducerCom() {
    const [ state, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <p>当前数量：{state.count}</p>
            <div>
                
                <button onClick={()=>dispatch({type:'reset'})}>重置</button>
                <button onClick={()=>dispatch({type:'increment'})}>加1</button>
                <button onClick={()=>dispatch({type:'decrement'})}>减一</button>
            </div>
            
        </div>
    )
}
