import React from 'react';
import '/src/Software/DashboardNotesPage/DashboardNotesPage.css'
import { useState } from 'react';
import slimeLogo from '/slimeLogo.png'
import { useEffect } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Notes</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='ENTER TASK'
            />
            <button onClick={addTask}>ADD</button>
            {todos.map(todo => (
                <div key={todo._id}>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.description}
                    </span>
                    <button onClick={() => toggleCompleted(todo._id)}>Toggle</button>
                    <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default DashboardNotesPage;