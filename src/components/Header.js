import React from "react";

const Header =({ onDarkModeClick })=>{
    return (
        <header>
            <h1>Header Component</h1>
            <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
        </header>
    );
}
export default Header;