import React, { useRef, useState } from 'react'
import './AddBar.css'

const AddBar = ({todoList, setTodoList}) => {

    const titleRef = useRef()
    const descriptionRef = useRef()

    const addTodo = () => {
        let todo = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            completeFlag: false
        }
        setTodoList([...todoList, todo])
    }

    return (
        <>
            <div className="bar-container">
                <div className="input-container">
                    <p>Title</p>
                    <input ref={titleRef} />
                </div>
                <div className="input-container">
                    <p>Description</p>
                    <textarea ref={descriptionRef} rows="2" />
                </div>
                <button class="add-button" onClick={addTodo}>Add Todo</button>
            </div>
        </>
    )

}

export default AddBar