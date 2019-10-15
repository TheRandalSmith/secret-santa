import React from "react";
import Person from "./Person";

const PeopleList = ({people, deletePerson, secret}) => {
    let olStyle = {
        paddingLeft: "0",
    };

    let peopleListStyle = {
        flexGrow: '1',
    };

    return (
        <div id="people-list" style={peopleListStyle}>
            <ol style={olStyle}>
                {people.map((person, i) => (
                    <Person key={person}
                            color={i}
                            name={person}
                            deletePerson={deletePerson}
                            secret={secret}/>
                ))}
            </ol>
        </div>
    )
};

export default PeopleList;