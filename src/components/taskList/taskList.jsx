import React from 'react'
import './taskList.css'

const TaskList = ({ todoList, setTodoList }) => {

    const deleteTodo = targetTitle => {
        const newTodoList = []
        todoList.map(todo => {
            if (todo.title != targetTitle)
                newTodoList.push(todo)
        })
        setTodoList(newTodoList)
    }

    const completeTodo = targetTitle => {
        const newTodoList = []
        todoList.map(todo => {
            let newTodo = todo
            if (newTodo.title == targetTitle)
                newTodo.completeFlag = true    
            newTodoList.push(todo)
        })
        setTodoList(newTodoList)
    }

    return (
        <div className="list-container">
            {todoList.map((todo, index) => (
                <div className="todo" key={index}>
                    {(todo.completeFlag) ?
                        (<div className="deleted-text-container">
                            <h2>{todo.title}</h2>
                            <p>{todo.description}</p>
                        </div>) : 
                        (<div className="text-container">
                            <h2>{todo.title}</h2>
                            <p>{todo.description}</p>
                        </div>)
                    }
                    <div className="button-container">
                        {(todo.completeFlag) ?
                            (<button disabled>Completed</button>) :
                            (<button className="complete-button"
                                onClick={() => completeTodo(todo.title)}>
                                Complete
                            </button>)
                        }
                        <button className="delete-button" onClick={() => deleteTodo(todo.title)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}


        </div>
    )

}

export default TaskList