import React, { useContext, useState, useRef, useEffect, useCallback } from 'react'
import { SessionContext } from '../component/session'
import Message from '../component/message'
import { render } from '@testing-library/react';

let step = 0;
let targetNum = 0;

export default function Test() {
    const setSession = useContext(SessionContext);
    const setMessage = useContext(Message);
    const [state,setState] = useState({user:'张三',totalNum:0});
    // const [totalNum,setTotalNum] = useState(()=>{
    //     console.log('inital count');
    //     return props.defaultCount || 0;
    // });

//  console.log('inital count');
//  return props.defaultCount || 0;

    const inputRef = useRef(null);

    

    const changeName = () => {
        // console.log('我这里按了按钮')
        setState({...state,user:'李四'})
        setMessage({message:'123456'})
    }

    const renderNum = useCallback(
        () => {
            if(targetNum === state.totalNum){
                step = 0;
                return;
            }
            if(step === 0){
                step = Math.round((targetNum-state.totalNum)/40)
                if(step === 0) step = (targetNum-state.totalNum>0)?1:-1 
            }
            console.log(state.totalNum,"totalNum")
            console.log(step,'step')
            let newNum = state.totalNum + step;
            // console.log(newNum,'newNum')
            setState((prevState) =>{return {...state,totalNum:prevState.totalNum+step}});
    
            if(step < 0){
                console.log('BBBBB')
                if(state.totalNum < targetNum) setState({...state,totalNum:targetNum});
            }else{
                if(state.totalNum > targetNum){
                    setState({...state,totalNum:targetNum})
                    return
                } 
                 
            }
            console.log(state.totalNum,'最终')
    
            setTimeout(()=>{
                console.log(state.totalNum,'最终AAAAA')
                console.log('AAAAAA')
                renderNum();
            },50)
        },
        [state],
    )
    
    // () => {
    //     if(targetNum === state.totalNum){
    //         step = 0;
    //         return;
    //     }
    //     if(step === 0){
    //         step = Math.round((targetNum-state.totalNum)/40)
    //         if(step === 0) step = (targetNum-state.totalNum>0)?1:-1 
    //     }
    //     console.log(state.totalNum,"totalNum")
    //     console.log(step,'step')
    //     let newNum = state.totalNum + step;
    //     console.log(newNum,'newNum')
    //     setState({...state,totalNum:newNum});

    //     // if(step < 0){
    //     //     console.log('BBBBB')
    //     //     if(state.totalNum < targetNum) setState({...state,totalNum:targetNum});
    //     // }else{
    //     //     // if(totalNum < targetNum) setTotalNum(targetNum)
    //     // }
    //     console.log(state.totalNum,'最终')

    //     setTimeout(()=>{
    //         console.log(state.totalNum,'最终AAAAA')
    //         console.log('AAAAAA')
    //         renderNum();
    //     },2000)
    // } 

    useEffect(()=>{
        console.log(state);
    },[state])

    const comfirmNum = () => {
        // setTotalNum((inputRef.current?.value)*1)
        targetNum = (inputRef.current?.value)*1;
        renderNum()
        // console.log(inputRef.current?.value,'6666')
    }

    // console.log(totalNum,'totalNum')
    return (
        <div>
            总金额为：<h1>{state.totalNum}</h1>  <br/>
            <input ref={inputRef}/>
            <button onClick={comfirmNum}>确认</button> <br/>
            姓名是：{state.user}-----啦啦啦这里是test页面
            <button onClick={changeName}>这里点击改变名字</button>
        </div>
    )
}
