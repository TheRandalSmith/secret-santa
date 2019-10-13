import React from "react";
import Person from "./Person";

const PeopleList = ({people, deletePerson, secret}) => {
    return <div id="people-list">
        <ol>
            {people.map(person => (
                <Person key={person} name={person} deletePerson={deletePerson} secret={secret}/>
            ))}
        </ol>
    </div>;
};

export default PeopleList;