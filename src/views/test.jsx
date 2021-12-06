import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import { SessionContext } from '../component/session';
import Message from '../component/message';
import { render } from '@testing-library/react';
import A from './child_a';

let step = 0;
let targetNum = 0;
let curNum = 0;
export default function Test() {
    const setSession = useContext(SessionContext);
    const setMessage = useContext(Message);
    const [state,setState] = useState({user:'张三',totalNum:0});
    const [totalCount,setTotalCount] = useState(0);

    // 1.利用useRef做缓存来解决totalCount闭包时，每次都是0
    // 2.可以把useRef封装起来...便于以后方便调用
    const latestCount = useRef(totalCount)
    let timer;
    const inputRef = useRef(null);
    const changeName = () => {
        setState({...state,user:'李四'})
        setMessage({message:'123456'})
    }
    const renderNum = () => {
        if(targetNum === latestCount.current){
            step = 0;
            return;
        }
        if(step === 0){
            step = Math.round((targetNum-state.totalNum)/40)
            if(step === 0) step = (targetNum-state.totalNum>0)?1:-1 
        }
        setState((prevState) => {
            return {...state,totalNum:prevState.totalNum+step}
        });
        
        if(step < 0){
            // if(state.totalNum < targetNum) setState({...state,totalNum:targetNum});
        }else{
            if(latestCount.current > targetNum){
                console.log(targetNum,'停了')
                clearInterval(timer)
                setTotalCount(targetNum)
                return
            }    
        }
        setTotalCount(totalCount => totalCount + step);
    }

    useEffect(()=>{
        // 更新缓存
        latestCount.current = totalCount;
    },[totalCount])

    const comfirmNum = () => {
        targetNum = (inputRef.current?.value)*1;

        timer = setInterval(()=>{
            console.log(totalCount,"setInterval中的值")
            renderNum()
        },50)
    }

    return (
        <div>
            总金额为：<h1>{totalCount}</h1>  <br/>
            <input ref={inputRef}/>
            <button onClick={comfirmNum}>确认</button> <br/>
            姓名是：{state.user}-----啦啦啦这里是test页面
            <button onClick={changeName}>这里点击改变名字</button>
            <A a={1}></A>
        </div>
    )
}
