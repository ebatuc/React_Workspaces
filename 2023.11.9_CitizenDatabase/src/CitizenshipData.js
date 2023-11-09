import React, { useState } from 'react';

function CitizenshipData() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [ctNumber, setCtNumber] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [nationality, setNationality] = useState("");
    const [martialstat, setMartialst] = useState("");
    const [momname, setMomname] = useState("");
    const [dadname, setDadname] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const addUser = () => {
        if (name && surname && ctNumber && gender && birthdate && birthplace
            && nationality && martialstat && momname && dadname) {
            if (editIndex !== null) {
                const updatedUsers = [...users];
                updatedUsers[editIndex] = {
                    name, surname, ctNumber, gender, birthdate,
                    birthplace, nationality, martialstat, momname, dadname
                };
                setUsers(updatedUsers);
                setEditIndex(null);
            } else {
                const newUser = {
                    name, surname, ctNumber, gender, birthdate,
                    birthplace, nationality, martialstat, momname, dadname
                };
                setUsers([...users, newUser]);
            }

            setName("");
            setSurname("");
            setCtNumber("");
            setGender("");
            setBirthdate("");
            setBirthplace("");
            setNationality("");
            setMartialst("");
            setMomname("");
            setDadname("");
        }
    };

    const editUser = (index) => {
        const user = users[index];
        setName(user.name);
        setSurname(user.surname);
        setCtNumber(user.ctNumber);
        setGender(user.gender);
        setBirthdate(user.birthdate);
        setBirthplace(user.birthplace);
        setNationality(user.nationality);
        setMartialst(user.martialstat);
        setMomname(user.momname);
        setDadname(user.dadname);
        setEditIndex(index);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h2>Citizen Information Input Area</h2>
                    <div className="input-group mb-3 mt-3">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className="form-control"
                            placeholder="Surname"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={ctNumber}
                            onChange={(e) => setCtNumber(e.target.value)}
                            className="form-control"
                            placeholder="Citizenship Number"
                        />
                        <input
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="form-control"
                            placeholder="Gender"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={birthplace}
                            onChange={(e) => setBirthplace(e.target.value)}
                            className="form-control"
                            placeholder="Birthplace"
                        />
                        <input
                            type="text"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            className="form-control"
                            placeholder="BirthDate"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                            className="form-control"
                            placeholder="Nationality"
                        />
                        <input
                            type="text"
                            value={martialstat}
                            onChange={(e) => setMartialst(e.target.value)}
                            className="form-control"
                            placeholder="Martial Status"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={momname}
                            onChange={(e) => setMomname(e.target.value)}
                            className="form-control"
                            placeholder="Mother Name"
                        />
                        <input
                            type="text"
                            value={dadname}
                            onChange={(e) => setDadname(e.target.value)}
                            className="form-control"
                            placeholder="Father Name"
                        />
                    </div>


                    <div className="d-grid gap-2">
                        <button onClick={addUser} className="d-grid gap-2 btn btn-success" type="button">
                            {editIndex !== null ? 'Update Citizen Information' : 'Add Citizen'}
                        </button>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <h2>Citizen Information Output Area</h2>
                    <ul className="list-group mt-3 ">
                        {users.map((userItem, index) => (
                            <li key={index} className="list-group-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Name:</strong>{userItem.name}
                                        </div>
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Surname:</strong>{userItem.surname}
                                        </div>
                                    </div>
                                </div>
                                <div className="container  mt-2">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Citizenship Number:</strong>{userItem.ctNumber}
                                        </div>
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Gender:</strong>{userItem.gender}
                                        </div>
                                    </div>
                                </div>
                                <div className="container  mt-2">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Birthdate:</strong>{userItem.birthdate}
                                        </div>
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Birthplace:</strong>{userItem.birthplace}
                                        </div>
                                    </div>
                                </div>
                                <div className="container  mt-2">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Nationality:</strong>{userItem.nationality}
                                        </div>
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Martial Status:</strong>{userItem.martialstat}
                                        </div>
                                    </div>
                                </div>
                                <div className="container  mt-2">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Mother Name:</strong>{userItem.momname}
                                        </div>
                                        <div className="col-md-6 ">
                                            <strong className='me-2'>Father Name:</strong>{userItem.dadname}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button onClick={() => editUser(index)} type="button" className="btn btn-warning d-grid gap-2 mt-3 mb-2">
                                        Edit Citizen
                                    </button>
                                </div>
                                <div className="d-grid gap-2">
                                    <button onClick={() => setUsers(users.filter((_, i) => i !== index))} type="button" className="d-grid gap-2 btn btn-danger ">
                                        Delete Citizen
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CitizenshipData;


{/* <strong>Name:</strong>{userItem.name}<strong className='ms-5'>Surname:</strong>{userItem.surname} */ }