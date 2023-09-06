import React from 'react'
"use client"
import Image from 'next/image'
import { useState } from 'react'
// import styles from './page.module.css'
// import { useClient } from 'react'
// import styles from './page.module.css'
// import { useClient } from 'react'
import "./page.css"


function Counter() {
    const [count, setCount] = useState(0)

    function inc() {
      setCount(count + 1)
    }
  
    function dec() {
      setCount(count - 1)
    }
    return (
      <>
        <div className='counter'>
          <p>{count}</p>
          <div className='buttons'>
            <button onClick={inc}>Increment</button>
  
            <button onClick={dec}>Decriment</button>
          </div>
  
        </div>
      </>
    )
}

export default Counter