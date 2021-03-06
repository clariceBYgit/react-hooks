import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// useContext的使用
import UseContext from './UseContext/Context'
// useReducer的使用
import UseReducerCom from './UseReducerCom/UseReducerCom.js'
// 其他的hooks的使用合集
import OtherHooks from './OtherHooks'
// 自定义的hooks
import CustomHooks from "./CustomHooks";
ReactDOM.render(
  // 自定义的hooks
  <CustomHooks></CustomHooks>,
  // 其他的hooks的使用合集
  // <OtherHooks></OtherHooks>,
  // useReducer的使用
  // <UseReducerCom></UseReducerCom>,
   // useContext的使用
  //  <UseContext></UseContext>,
  document.getElementById('root')
);


