import React, {useState} from 'react';

const Person = ({name, isSecret, deletePerson, number, anotherOpen, setAnotherOpen}) => {
    const [revealed, setRevealed] = useState(false);

    let styles = {
        listItem: {
            color: "white",
            backgroundColor: "red",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            alignItems: "center",
            fontSize: "1.3em"
        },
        btnStyle: {
            padding: "10px",
            borderRadius: "10%",
            backgroundColor: "#d4d3d6",
            fontSize: "1rem"
        }
    };

    if (isSecret) number++;
    if (number % 2 === 0) styles.listItem = Object.assign(styles.listItem, {backgroundColor: "green"});


    if (isSecret && !revealed) {
        return (
            <li style={styles.listItem}>
                <p>secret</p>
                <button
                    style={styles.btnStyle}
                    onClick={() => {
                        if (anotherOpen) alert("only one secret at a time");
                        else {
                            setAnotherOpen(true);
                            setRevealed(true);
                        }
                    }}>show
                </button>
            </li>
        );
    } else {
        return (
            <li style={styles.listItem}>
                <p>{number + 1}: {name}</p>
                <button
                    style={styles.btnStyle}
                    onClick={() => {
                        setAnotherOpen(false);
                        deletePerson(name);
                    }}>
                    {isSecret ? 'got it!' : 'delete'}
                </button>
            </li>
        )
    }
};

export default Person;