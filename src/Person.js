import React, {useState, useEffect} from 'react';

// TODO make it a hook
// it will help with animations

const Person = ({name, isSecret, deletePerson, number, anotherOpen, setAnotherOpen}) => {
    const [revealed, setRevealed] = useState(false);
    const [showShake, setShowShake] = useState(false);
    const [deleteAnimation, setDeleteAnimation] = useState(false);
    const [fosho, setFosho] = useState(false);

    useEffect(() => {
        let resetTimer = setTimeout(() => setFosho(false), 3000);
        return () => clearTimeout(resetTimer);
    }, [fosho, setFosho]);

    const noCheating = () => {
        setShowShake(true);
        setTimeout(() => setShowShake(false), 500);
    };

    let styles = {
        listItem: {
            color: "white",
            backgroundColor: "red",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            alignItems: "center",
            fontSize: "1.3em",
            marginBottom: "9px",
            borderTopRightRadius: 0,
            borderBottomRightRadius: "31px",
        },
        btnStyle: {
            padding: "10px",
            borderRadius: "15px",
            backgroundColor: "#d4d3d6",
            fontSize: "1rem"
        }
    };

    if (!isSecret) {
        styles.listItem.borderTopLeftRadius = "31px";
        //styles.listItem.borderBottomLeftRadius = "35px";
        styles.listItem.borderTopRightRadius = 0;
        styles.listItem.borderBottomRightRadius = 0;
        styles.listItem.marginRight = "2px";
    }
    // maybe maybe

    if (isSecret) number++;
    if (number % 2 === 0) {
        styles.listItem = Object.assign(styles.listItem, {backgroundColor: "green"});
    }

    if (isSecret && !revealed) {
        return (
            <li
                className={showShake && "animated shake"}
                style={styles.listItem}>
                <p>secret</p>
                <button
                    style={styles.btnStyle}
                    onClick={() => {
                        if (anotherOpen) noCheating();
                        else if (!fosho) {
                            setFosho(true);
                            //setTimeout(() => setFosho(false), 3000);
                        } else {
                            setAnotherOpen(true);
                            setRevealed(true);
                        }
                    }}>{fosho ? "sure?" : "show"}
                </button>
            </li>
        );
    } else {
        return (
            <li className={!revealed ? "animated fadeInDown" : deleteAnimation ? "animated zoomOutRight" : "animated flipInX"}
                style={styles.listItem}>
                <p>{name}</p>
                <button
                    style={styles.btnStyle}
                    onClick={() => {
                        setAnotherOpen(false);
                        setDeleteAnimation(true);
                        deletePerson(name);
                    }}>
                    {isSecret ? 'got it!' : 'delete'}
                </button>
            </li>
        )
    }
};

export default Person;