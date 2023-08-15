import './App.css';
import Input from './input';
import { useState } from 'react'
import Task from './task';

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleClickDelete = (id) => {
    const filtedArr = tasks.filter(item => item.id !== id);
    setTasks([...filtedArr])
  }
  const handleEdit = (id, text) => {
    console.log(id, text)
    const arr = tasks.map(item => item.id === id ? { ...item, title: text } : item);
    setTasks([...arr])
  }

  return (
    <div className="App">
      <h1>What's the plan for today</h1>
      <Input tasks={tasks} setTasks={setTasks} />
      {tasks.map(item =>
        <Task item={item} handleClickDelete={handleClickDelete} handleEdit={handleEdit}></Task>
      )}
    </div >
  );
}


export default App;
