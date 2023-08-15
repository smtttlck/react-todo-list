import React, { useState } from 'react'
import './App.css'
import AddBar from './components/addBar/AddBar'
import TaskList from './components/taskList/taskList'

function App() {

  const [todoList, setTodoList] = useState([])


  return (
    <div className="container">

      <AddBar
        todoList={todoList}
        setTodoList={setTodoList}
      />
      
      <TaskList 
        todoList={todoList}
        setTodoList={setTodoList}
      />


    </div>
  )
}

export default App
