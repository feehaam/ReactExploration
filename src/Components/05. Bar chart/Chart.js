import React from "react";
import { useState } from "react";
import Bar from "./Bar";
import './chart.css';

export default function Chart() {
    const [values, setValues] = useState([]);
    const [input, setInput] = useState(0);
    const [max, setMax] = useState(0)

    function addValue() {
        let val = parseInt(input);
        if (val == null || val <= 0) {
            alert("Invalid input!");
            return;
        }
        if (max < val) setMax(val);
        let ar = []
        for (let i = 0; i < values.length; i++)
            ar[i] = values[i];
        ar[ar.length] = val;
        setValues(ar);
    }

    function inputUpdate(event) {
        setInput(event.target.value);
    }

    return (
        <div className="container">
            <div className="bars">
                <div class="flex-container flex-end">
                {values?.map((val) => {
                    return <Bar key={Math.random} val={val} max={max} />
                })}
            </div></div>
            <div className="sep"></div>
            <input type={'number'} onChange={inputUpdate} />
            <button onClick={addValue}>Add Point</button>
        </div>
    );
}