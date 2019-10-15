import React, {useState} from "react";
import mockPeople from "../mock-data";
import {shuffle} from "underscore";
import PeopleList from "./PeopleList";
import NameInput from "./NameInput";

export const SecretSanta = () => {
    const [people, setPeople] = useState(mockPeople);
    const [secretPeople, setSecretPeople] = useState([]);

    const handleSubmit = (newName) => {
        if (!people.includes(newName)) {
            setPeople([...people, newName]);
            setSecretPeople([]);
        } else {
            alert(`That name is already taken`);
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

    const handleSecretDelete = (name) => {
        const indexOf = secretPeople.indexOf(name);
        let newList = people.filter((e, i) => i !== indexOf);
        let newSecretList = secretPeople.filter((e, i) => i !== indexOf);
        setPeople(newList);
        setSecretPeople(newSecretList);
    };

    const styles = {
        display: "flex",
        secretSanta: {
            maxWidth: "1000px",
            margin: "0 auto",
        },
        peopleListContainer: {
            display: "flex"
        }
    };

    return (
        <div style={styles.secretSanta}>
            <NameInput
                handleSubmit={handleSubmit}
                handleShuffle={handleShuffle}
            />
            {people.length > 0 ?
                <div style={styles.peopleListContainer}>
                    <PeopleList people={people} deletePerson={handleDelete}/>
                    {secretPeople.length > 0 &&
                    <PeopleList people={secretPeople} secret={true} deletePerson={handleSecretDelete}/>
                    }
                </div>
                :
                <p>Please Enter a Name</p>
            }
            <p>Size: {people.length}</p>

        </div>
    )
};