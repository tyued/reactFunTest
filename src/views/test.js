import React, { useContext, useState } from 'react'
import { SessionContext } from '../component/session'
import Message from '../component/message'

export default function Test() {
    const setSession = useContext(SessionContext);
    const setMessage = useContext(Message);
    const [userName,setUserName] = useState('张三');
    
    const changeName = () => {
        console.log('我这里按了按钮')
        setUserName('李四')
        setMessage({message:'123456'})
    }

    console.log(setSession,'setSession')
    return (
        <div>
            姓名是：{userName}-----啦啦啦这里是test页面
            <button onClick={changeName}>这里点击改变名字</button>
        </div>
    )
}
