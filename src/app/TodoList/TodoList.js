"use client"
import React, { useState } from 'react'

function TodoList() {

    const[input, setInput ]=useState("")

    const[lists , setList ]=useState([])

     console.log(input)
    function handleSubmit(e){
        e.preventDefault()
        setList([...lists,input])
        setInput("")


    }
    function handleDelete(index){

        const newLists = lists.filter((list, i) => i !== index);
        setList(newLists)

    }

  return (
   <>
   <form onSubmit={handleSubmit}>

    <input  value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter list name'></input>

    <button type='Submit'>Print</button>

    </form>

    <div className='lists'>
        <ul>
            <li></li>

        {
            lists.map((list,index)=>{
                return( <li key={index}>
                    {list} 
                    <button onClick={()=>handleDelete(index)}>DELETE</button>
                    
                    </li>)
            })
        }
        </ul>
    </div>
   </>
  )
}

export default TodoList