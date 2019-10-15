import React from 'react';
import ReactDOM from 'react-dom';
import {SecretSanta} from "./SecretSanta";

const App = () => {
    const style = {
        container: {
            margin: "0 auto"
        },
        h1: {
            textAlign: "center",
            marginTop: "0",
            padding: "20px",
            width: "100%",
            background: "linear-gradient(90deg, rgba(0,143,16,1) 18%, rgba(129,14,14,1) 100%)",
            color: "white",
        },


    };

    return (
        <div style={style.container}>
            <h1 style={style.h1}>Secret Santa!</h1>
            <SecretSanta />
        </div>

    )
};

ReactDOM.render(<App/>, document.querySelector("#root"));