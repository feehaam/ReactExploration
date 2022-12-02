import React from "react";
import Par from "./Par";

// # Composition: Children props
// It passes elements added inside of opening and closing of a component. 
// Then the referenced component can display all the children items 
// in its jsx body using props.children.

function Composition () {
    return <Par>
        Children data sent from the composition
        <br></br>
        This can be anything, can be a lot of other Components
        <br></br> 
        That is passed to child component.
        </Par>
}
export default Composition;