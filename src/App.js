import React from 'react';
import ReactDOM from 'react-dom';
import {SecretSanta} from "./SecretSanta";

const App = () => {
    const style = {
        textAlign: "center",
        background: "pink",
        width: "100%",
    };

    return (
        <div>
            <h1 style={style}>Secret Santa!</h1>
            <SecretSanta/>
        </div>

    )
};

ReactDOM.render(<App/>, document.querySelector("#root"));