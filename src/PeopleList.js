import React, {useState} from "react";
import Person from "./Person";

// TODO Move list into this component
const PeopleList = ({people, deletePerson, secret}) => {
    const [anotherIsOpen, setAnotherIsOpen] = useState(false);

    let ulStyle = {
        paddingLeft: "0" , // TODO hmmm maybe some padding here?
        flexBasis: "100%",
    };

    return (
        <ul className={secret && "animated bounceInRight"}
            style={ulStyle}>
            {people.map((person, i) => (
                <Person key={person}
                        name={person}
                        number={i}
                        deletePerson={deletePerson}
                        isSecret={secret}
                        anotherOpen={anotherIsOpen}
                        setAnotherOpen={setAnotherIsOpen}/>
            ))}
        </ul>
    )
};

export default PeopleList;