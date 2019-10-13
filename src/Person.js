import React from 'react';

const Person = ({name, secret = false, deletePerson}) => {
    return (
        <li>
            {name}
            <button style={secret ? {display: "none"} : {display: "inline-block"}}
                    onClick={() => deletePerson(name)}>x
            </button>
        </li>
    )
};

export default Person;