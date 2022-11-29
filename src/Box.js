import React from 'react';
import './Box.css';

/** Individually colored boxes */
function Box(props) {
    return (
        <div 
            className="Box"
            style={{backgroundColor: props.color}}
        >
        </div>
    );
}

export default Box;