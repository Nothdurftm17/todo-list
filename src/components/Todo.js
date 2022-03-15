import React, { useState } from 'react';

const Todo = (props) => {
    const [checked,setChecked] = useState(false)

    return (
        <div className=" task d-flex mx-auto" >
            {
                checked ? <h1 className="tasks"><del> Task: {props.task}</del></h1> : <h1 className="tasks">Task: {props.task}</h1>
            }
            <input type="checkbox" checked={checked} onChange={(e)=>{setChecked(e.target.checked)}}/>
            <button onClick={props.onDelete}>Delete</button>
            
        </div>
    )
}
export default Todo