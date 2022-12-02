import React from "react";
import MyComponent from "./Components/02. Component/MyComponent";

function TestAll () {
    return (
        <>
            <MyComponent></MyComponent>
            <MyComponent />
            <MyComponent>With children</MyComponent>
            <hr></hr>

            
        </>
    );
}

export default TestAll;