import React from "react";
import MyComponent from "./Components/02. Component/MyComponent";
import Composition from "./Components/03. Composition/Composition";

function TestAll () {
    return (
        <>
            <MyComponent></MyComponent>
            <MyComponent />
            <MyComponent>With children</MyComponent>
            <hr></hr>

            <Composition />
        </>
    );
}

export default TestAll;