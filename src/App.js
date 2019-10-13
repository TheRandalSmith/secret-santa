import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PeopleList from "./PeopleList";
import mockPeople from "../mock-data";
import {shuffle} from 'underscore';

const App = () => {
    const [newName, setNewName] = useState("");
    const [people, setPeople] = useState(mockPeople);
    const [secretPeople, setSecretPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName.length > 0 && !people.includes(newName)) {
            setPeople([...people, newName]);
            setNewName("");
            setSecretPeople([]);
        }
    };

    const handleShuffle = (e) => {
        e.preventDefault();
        if (people.length > 1) {
            let hasDifferentPerson = false;
            let stopInfiniteLoop = 0;
            while (!hasDifferentPerson) {
                if (stopInfiniteLoop >= 1000) throw new Error(`Shuffle iterations exceeded 1000`);
                let randomizingSecret = shuffle(people);
                if (people.every((person, i) => person !== randomizingSecret[i])) {
                    setSecretPeople(randomizingSecret);
                    hasDifferentPerson = true;
                }
                stopInfiniteLoop++;
            }
        }
    };

    const handleDelete = (name) => {
        let newList = people.filter(e => e !== name);
        setPeople(newList);
        setSecretPeople([]);
    };

    return (
        <div>
            <h1>Secret Santa!</h1>
            <form>
                <label htmlFor="">Enter Name
                    <input value={newName} placeholder="Name" onChange={(e) => setNewName(e.target.value)}/>
                </label>
                <button onClick={handleSubmit}>Enter</button>
                <button onClick={handleShuffle}>shuffle</button>
            </form>
            <div className="people-list">
                <PeopleList people={people} deletePerson={handleDelete}/>
                <PeopleList people={secretPeople} secret={true}/>
            </div>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector("#root"));