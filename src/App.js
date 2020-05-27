import React, { useState, useEffect } from 'react';

//在这个组件中使用useEffect
function Effect(){
  const [ count, setCount ] = useState(0)
  useEffect(()=>{
    // 处理副作用逻辑
    document.title=`你点击了${count}次`
    return ()=>console.log('组件卸载或更新了')
  },[count]) //这里的数组Array:用于控制useEffect的执行   
  /*数组有三种情况 
  1）空数组：只会执行一次，相当于componentDidMount.   
  2)非空数组，useEffect会在数组发生变化后执行
  3)不填array,useEffect每次渲染都会执行
  */

  return(
    <div>
      <div>你点击了{count}次</div>
      <button onClick={()=>setCount(count+1)}>点击+1</button>
    </div>
  )
}



function App() {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      函数式组件，学习react hook
      <div>你点击了{count}次</div>
      <button onClick={()=>setCount(count+1)}>点击+1</button>
      <button onClick={()=>setCount(count-1)}>点击-1</button>
      <h2>使用使用了useEffect的组件</h2>
      {count >= 10 ? <Effect></Effect>: null  }
     
    </div>
  );
}

export default App;
