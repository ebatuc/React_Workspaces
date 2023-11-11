import React, { useState } from 'react'

//! House array and selected function 
function HouseRent() {
    const [selectedHouse, setHouseSelected] = useState("");
    const houses = [
        { id: "1", label: "London -- 1+1 -- 1000$ per/week" },
        { id: "2", label: "Manchester -- 2+1 -- 1500$ per/week" },
        { id: "3", label: "Newcastle -- 4+1 -- 3000$ per/week" },
    ];

    //! House selection target
    const handleChange = (e) => {
        setHouseSelected(e.target.value);
    };

    //! Guest selection target
    const [guestChosen, setGuestChosen] = useState("");
    const handleChangeGuest = (e) => {
        setGuestChosen(e.target.value);
    };


    //! defined empty array to show final reservation informations
    const [rented, setRented] = useState([]);
    //! function for edit has defined
    const [editIndex, setEditIndex] = useState(null);
    //! define update reservation class name change
    const [buttonClassName, setButtonClassName] = useState("btn btn-success");
    //! Button function to create list for selections

    const Reservation = () => {
        if (selectedHouse && guestChosen) {
            if (editIndex !== null) {
                const updateRent = [...rented];
                updateRent[editIndex] = {
                    selectedHouse: selectedHouse,
                    guestChosen: guestChosen
                };
                setRented(updateRent);
                setEditIndex(null);
                setButtonClassName("btn btn-success");
            }
            else {
                const doneReservation = { selectedHouse, guestChosen };
                setRented([...rented, doneReservation]);
            }
            setHouseSelected("");
            setGuestChosen("");

        }
    }


    const editReservation = (index) => {
        const rentHouse = rented[index];
        setHouseSelected(rentHouse.selectedHouse);
        setGuestChosen(rentHouse.guestChosen);
        setEditIndex(index);
        setButtonClassName("btn btn-warning");
    };

    return (
        <div className='col-6 '>
            <h3 className='fw-bold mb-4 text-danger'>Rental Houses</h3>

            {/* House selection */}
            <select options={houses} onChange={handleChange} defaultValue={"placeholderHouse"} className="form-select form-select-lg mb-3 fs-5 text-center" aria-label="Large select example">
                <option value={"placeholderHouse"} disabled>Please Choose House</option>
                {houses.map((house) => (

                    <option disabled={
                        rented.find((i) => i.selectedHouse === house.label)
                    }
                        key={house.id}
                        value={house.label}>{house.label}</option>
                ))}
            </select>
            <p>
                <strong> Selected House:</strong> {selectedHouse}
            </p>
            {/* Guest selection */}
            <select onChange={handleChangeGuest} defaultValue={"placeholderGuest"} className="form-select form-select-sm fs-6 text-center" aria-label="Small select example">
                <option value={"placeholderGuest"} disabled>Please Choose Number of Guests (min.1 & max.5)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p className='mt-3'>
                <strong> Number of Guest:</strong> {guestChosen}
            </p>

            {/* Accept Button */}
            <div class="d-grid gap-2">
                <button onClick={Reservation} className={`d-grid gap-2 ${buttonClassName}`} type="button">{editIndex !== null ? "Update Reservation" : "Accept Reservation"} </button>
            </div>

            <ul className='list-group mt-3'>
                {rented.map((rentItem, index) => (
                    <li key={index} className='list-group-item'>
                        <strong className='text-decoration-underline'>Rented House</strong><br /> {rentItem.selectedHouse} <br /> <strong className='text-decoration-underline'>Number of Guests</strong><br /> {rentItem.guestChosen}
                        <br /> <button onClick={() => editReservation(index)} type="button" className="btn btn-warning me-2">
                            Edit Reservation
                        </button>
                        <button onClick={() => setRented(rented.filter((_, i) => i !== index))} type='button' className='btn btn-danger'>Delete Reservation</button>

                    </li>
                ))}
            </ul>
        </div>

    );

};

export default HouseRent;
