import { React, useState } from 'react';
function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [newtask, setNewTodo] = useState("");


    const addTodo = () => {
        if (newtask) {
            setTodoList([...todoList, newtask]);
            setNewTodo("");
        }
    }

    return (

        <div className='col-12 mt-3'>
            <h2>To Do List</h2>
            <div className="input-group col-4 mb-3">
                <input type="text" value={newtask} onInput={(e) => setNewTodo(e.target.value)} className="form-control" placeholder="To Do Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button onClick={() => addTodo()} className="btn btn-outline-secondary" type="button" id="button-addon2">Add Task</button>
            </div>
            <ul className="list-group">
                {todoList.map((listItem, index) => (
                    <li key={index} className="list-group-item">{listItem}</li>

                ))};
            </ul>
        </div>
    );
}

export default TodoList;