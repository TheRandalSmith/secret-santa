import React, {useState} from 'react';

const Person = ({name, secret = false, deletePerson, color}) => {
    const [revealed, setRevealed] = useState(false);

    let styles = {
        color: "white",
        backgroundColor: "red",
        height: "85px",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        alignItems: "center",
        fontSize: "1.3em"
    };

    if (secret && !revealed) {
        styles.justifyContent = "center";
    }

    if(secret) color++;
    if (color % 2 === 0) styles = Object.assign(styles, {backgroundColor: "green"});

    let btnStyle = {
        color: "white"
    };

    if (secret && !revealed) {
        return (
            <div style={styles}>
                <button onClick={() => setRevealed(true)}>reveal</button>
            </div>
        );
    }

    return (
        <li style={styles}>
            {name}
            <button
                onClick={() => deletePerson(name)}>
                {secret ? 'o' : 'x'}
            </button>
        </li>
    )
};

export default Person;