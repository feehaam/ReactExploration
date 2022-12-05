import React from "react";
function EventListeners() {
    const OC = () => {
        alert("Clicked")
    }
    const OS = () => {
        alert("Submitted")
    }
    return (
        <div>
            <button onClick={OC}>On click</button>
            <br></br>
            <form onsubmit={OS}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EventListeners;