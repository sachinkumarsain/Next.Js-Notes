"use client"
import React, { useState } from 'react'
import "./TodoList.css"

function TodoList() {

    const [input, setInput] = useState("")

    const [lists, setList] = useState([])

    const [updateIndex, setUpdateIndex] = useState(-1)

    //  console.log(input)
    function handleSubmit(e) {
        e.preventDefault()

        if (updateIndex !== -1) {
            const updateList = [...lists]
            updateList[updateIndex] = input;
            setList(updateList)
            setUpdateIndex(-1)
            console.log(updateList)

        } else {
            // Add new item
            if (input.length !== 0) {
                setList([...lists, input]);
            }

        }

        setInput("")


    }
    function handleDelete(index) {

        const newLists = lists.filter((list, i) => i !== index);
        setList(newLists)
    }

    function handleUpdate(index) {
        setInput(lists[index])
        setUpdateIndex(index)
        console.log(index)
        console.log(lists[index])

    }


    return (
        <>
            <div className='Wapper'>

                <div className='box'>
                    <h1>Todo <span>List</span></h1>
                    <form onSubmit={handleSubmit}>

                        <input autoFocus value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter list name'></input>

                        <button type='Submit'>Print</button>

                    </form>

                    <div className='lists'>
                        <ol>

                            {
                                lists.map((list, index) => {
                                    return (<li key={index}>
                                        {list}

                                        <button className='update' onClick={() => handleUpdate(index)}>
                                            UPDATE
                                        </button>
                                        <button className='delete' onClick={() => handleDelete(index)}>DELETE</button>

                                    </li>)
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList