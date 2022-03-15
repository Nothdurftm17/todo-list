import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([
    {task: "Clean Your Room"}
  ])

  const [form, setForm] = useState({
    task: "",
    completed: false
  })

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  
  const onSubmitHandler = (event) => {
    event.preventDefault();

    setTasks([
      ...tasks,
      form
    ])

    setForm({
      task : " "
    })


  }

  const onDeleteHandler = (index) => {
    console.log(index);

    const copyState = [...tasks];
    copyState.splice(index, 1);
    setTasks(copyState);
  }

  return (
    <div className="App">
      <h1 className="header">Todo List</h1>
        <form onSubmit={onSubmitHandler}>
        <div className="col-auto">
            <input onChange={onChangeHandler} type="text" name="task" placeholder="Type the Task" className="input" value={form.task} />
        </div>
        <div>
            <input type="submit" className='btn btn-primary btn-lg d-block mx-auto my-2' value="Add" />
          </div>
        </form>
        {
          tasks.map((item, i) => {
            return <Todo key={i} task={item.task} onDelete={() => { onDeleteHandler(i) }}/>
          })
        }
      </div>
  );
}

export default App;
