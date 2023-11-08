import React, { useState } from 'react';

function UserCreate() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const addUser = () => {
        if (name && surname) {
            if (editIndex !== null) {
                const updatedUsers = [...users];
                updatedUsers[editIndex] = { name, surname };
                setUsers(updatedUsers);
                setEditIndex(null); 
            } else {
                const newUser = { name, surname };
                setUsers([...users, newUser]);
            }

            setName("");
            setSurname("");
        }
    };

    const editUser = (index) => {
        const user = users[index];
        setName(user.name);
        setSurname(user.surname);
        setEditIndex(index); 
    };


    return (
        <div className='col-12 mt-3'>
            <h2>Users</h2>
            <div className="input-group col-6 mb-3">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Name"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="form-control"
                    placeholder="Surname"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <button onClick={addUser} className="btn btn-outline-secondary" type="button" id="button-addon2">
                    {editIndex !== null ? 'Update User' : 'Add User'}
                </button>
            </div>
            <ul className="list-group">
                {users.map((userItem, index) => (
                    <li key={index} className="list-group-item">
                        <strong>Name:</strong> {userItem.name} <strong>Surname:</strong> {userItem.surname}
                        <button onClick={() => setUsers(users.filter((_, i) => i !== index))} type="button" class="btn btn-danger float-end ">Delete</button>
                        <button onClick={() => editUser(index)} type="button" className="btn btn-warning float-end me-2">
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserCreate;



