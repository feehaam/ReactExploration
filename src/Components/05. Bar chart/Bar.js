import React, { useEffect, useState } from "react";
import './Bar.css'

export default function Bar({ val, max }) {
    const colors = ['#FDB1FD', '#FF0000', '#8800FF', '#FF770F', '#01B804', '#00C8FF',];

    return (
        <>
            <div class="flex-item bar fill"
                style={{
                    "background-color": colors[Math.floor(Math.round((Math.random() * 10)) / 2)],
                    'height': 500 / max * val
                }}>{val}</div>
        </> 
    );
}
