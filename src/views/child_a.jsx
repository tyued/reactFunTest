import React from 'react'

export default function child_a(props) {
    console.log(props,'A组件的props')
    return (
        <div>
            <h1>这里是子组件A</h1>
        </div>
    )
}
