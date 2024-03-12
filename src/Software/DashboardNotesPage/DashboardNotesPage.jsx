import React from 'react';
import '/src/Software/DashboardNotesPage/DashboardNotesPage.css'
import { useState } from 'react';
import slimeLogo from '/slimeLogo.png'
import { useEffect } from 'react';
import axios from 'axios';
import todoMan from '/todoMan.png'
import deleteTodologo from '/deleteTodo.png'
import completeTodologo from '/completeTodo.png'

function DashboardNotesPage() {

    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([])

    useEffect(() => {

        fetchTodos();
        document.body.style.backgroundColor = '#B9DCE1';
        
        return () => {
          document.body.style.backgroundColor = 'black'; 
        };
      }, []);


      const fetchTodos = () => {
        axios.get('http://localhost:3001/getTodos', { withCredentials: true })
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error:', error));
    };

    const addTask = () => {
        axios.post('http://localhost:3001/user_todos', { description: task }, { withCredentials: true })
            .then(() => {
                fetchTodos();
                setTask('');
            })
            .catch(error => console.error('Error:', error));
    };

    const deleteTodo = (todoId) => {
        axios.delete(`http://localhost:3001/user_todos/${todoId}`, { withCredentials: true })
            .then(() => fetchTodos())
            .catch(error => console.error('Error:', error));
    };

    const toggleCompleted = (todoId) => {
        axios.patch(`http://localhost:3001/user_todos/toggle/${todoId}`, {}, { withCredentials: true })
            .then(() => fetchTodos())
            .catch(error => console.error('Error:', error));
    };

    return (
        <>
            <h1 className='dashboardNotesPage-title'>TODO LIST</h1>
            <h4 className='dashboardNotesPage-description'>Here you can keep track of you need to do. You can cross or delete your completed tasks</h4>
        
        <div className='dashboardNotesPage-main-layout'>
            <img src={todoMan}></img>
        <div className='dashboardNotesPage-layout-map'>
            <div className='dashboardNotesPage-input-layout'> 
            <input
                className='dashboardNotesPage-input'
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='ENTER TASK'
            />
            <button className='dashboardNotesPage-input-button' onClick={addTask}>ADD</button>
            </div>
            
            {todos.map(todo => (
                <div className='dashboardNotesPage-todos' key={todo._id}>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.description}
                    </span>
                    <div className='dashboardNotesPage-todos-buttons'>
                        <img src={completeTodologo} className="dashboardNotesPage-todos-completeBtn" onClick={() => toggleCompleted(todo._id)}></img>
                        <img src={deleteTodologo} className= "dashboardNotesPage-todos-deleteBtn" onClick={() => deleteTodo(todo._id)}></img>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </>
    );
}

export default DashboardNotesPage;