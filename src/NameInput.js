import React, {useState} from 'react';

const NameInput = ({ handleSubmit, handleShuffle}) => {

    const [newName, setNewName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (newName.length > 0 ) {
            handleSubmit(newName);
            setNewName("");
        }
    };

    return (
        <form>
            <label htmlFor="">Enter Name
                <input value={newName} placeholder="Name" onChange={(e) => setNewName(e.target.value)}/>
            </label>
            <button onClick={onSubmit}>Enter</button>
            <button onClick={handleShuffle}>shuffle</button>
        </form>
    )
};

export default NameInput;