import React from "react";
import MyComponent from "./Components/02. Component/MyComponent";
import Composition from "./Components/03. Composition/Composition";
import EventListeners from "./Components/04. Event listeners/EL";
import Chart from "./Components/05. Bar chart/Chart";

function TestAll () {
    return (
        <>
            <MyComponent></MyComponent>
            <MyComponent />
            <MyComponent>With children</MyComponent>
            <hr></hr>

            <Composition />
            <hr></hr>

            <EventListeners />
            <hr></hr>

            <Chart />
            <hr></hr>
        </>
    );
}

export default TestAll;