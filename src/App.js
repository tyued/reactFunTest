import logo from './logo.svg';
import './App.scss';
import { SessionContext, sessionID } from './component/session'
import Message from './component/message'
import Test from './views/test'
import Timer from './views/timer'
import { useState, useCallback, useEffect } from 'react';
import { Snackbar, Typography } from '@material-ui/core'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import AddUser from './views/adduser'

function App() {
    const sessObj = sessionID

    const [message,setMessage] = useState ({
        message:'',
        messageType:''
    })
    // const handleSetMessage = (message) => {
    //     setMessage(()=>{
    //         return {
    //             ...message
    //         }
    //     })
    // }



    const handleSetMessage = useCallback(
        (message) => {
            setMessage(()=>{
                return {
                    ...message
                }
            })
        },
        [setMessage],
    )
    const handleClose = useCallback(
        () => {
            setMessage(()=>{
                return {
                    message:'',
                    messageType:''
                }
            })
        },
        [setMessage],
    )

    // console.log(message,'message')
    return (
        /**
         * 1、 Provider value如果是属性值那么其被包含的组件可以使用 useContent(xxx)需引入 就可以直接使用这个常量
         * 2、 Provider value如果是方法那么再其他组件中就可以直接控制最外层的State  例如：[message,setMessage] = useState 中就可以在任意组件中修改message的值
         * 
         *  */ 
        <Router>
            <SessionContext.Provider value={sessObj}>
                <Message.Provider value={handleSetMessage}>
                    <Snackbar
                        open={!!message.message}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message={message.message}
                    />
                    {/* <Timer></Timer> */}
                    <Test></Test>
                    <Switch>
                        <Route exact path='/Typography'>
                            <Typography variant='h3'>
                                这里是啥
                            </Typography>
                        </Route>
                        {/* <Route exact path='/addUser' component={()=><AddUser/>}></Route> */}
                        <Route exact path='/addUser' render={ (props) =>{
                            return (<AddUser {...props}></AddUser>)
                        }}></Route>
                    </Switch>
                </Message.Provider>
            </SessionContext.Provider>
        </Router>
    );
}

export default App;
