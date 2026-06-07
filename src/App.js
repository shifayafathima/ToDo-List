import './App.css';
import Display from './components/Display';
import { useEffect, useState } from 'react';
import InputPanel from './components/InputPanel';

function App() {

  const [task, setTask] = useState([]);

  // LOAD TASKS
  useEffect(() => {

    const savedTask =
      JSON.parse(localStorage.getItem("tasks"));

    if (savedTask) {
      setTask(savedTask);
    }

  }, []);

  // SAVE TASKS
  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(task)
    );

  }, [task]);

  // ADD TASK
  function addTask(data) {

    if (data.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: data,
      completed: false,
      time: new Date().toLocaleTimeString()
    };

    setTask([...task, newTask]);
  }

  // DELETE TASK
  function deletetask(id) {

    let fa = task.filter((myval) => {
      return id !== myval.id
    });

    setTask(fa);
  }

  // COMPLETE TASK
  function completeTask(id) {

    const updatedTask = task.map((val) => {

      if (val.id === id) {

        return {
          ...val,
          completed: !val.completed
        };
      }

      return val;
    });

    setTask(updatedTask);
  }

  return (

    <div className="App">

      <Display
        task={task}
        delete={(val) => { deletetask(val) }}
        complete={(id) => { completeTask(id) }}
      />

      <InputPanel
        send={(data) => { addTask(data) }}
      />

    </div>
  );
}

export default App;