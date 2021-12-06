import { useInterval } from 'ahooks'
import React, { useState } from 'react'
// import styles from './index.less'

export default function Test() {
  const [originNum, setOriginNum] = useState(50)
  const [targetNum, setTargetNum] = useState(0)
  const [interval, setInterval] = useState(null)
  useInterval(() => {
    const totalNum = Number(targetNum) || 0
    if (originNum + 500 >= totalNum) {
      setOriginNum(totalNum)
      setInterval(null)
      return false
    }
    setOriginNum(originNum + 500)
  }, interval)

  const sure = () => {
    const totalNum = Number(targetNum) || 0
    if (totalNum <= originNum) {
      return false
    }
    setInterval(1000)
  }
  return <div>
    <span>{originNum}</span>
    <input value={targetNum} onChange={(e) => setTargetNum(e.target.value)}/>
    <button onClick={sure}>确认</button>
  </div>
}