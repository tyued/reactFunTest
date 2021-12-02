import { createContext } from 'react'

export var sessionID = 'sessionNo';

export const SessionContext = createContext({
    sessionID,
    testUrl:'http://127.0.0.1:9527',
})