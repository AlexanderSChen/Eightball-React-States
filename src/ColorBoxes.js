import React, { useState } from 'react';
import Box from './Box';
import './ColorBoxes.css';
import { choice } from './helpers'

function ColorBoxes(props) {
    const [boxes, setBoxes] = useState(
        Array.from({ length: props.numBoxes }, () => choice(props))
    )
    
    /** on click: pick random box and change it into a random color */
    const handleClick = e => {
        let idx = Math.floor(Math.random() * props.numBoxes);

        setBoxes(boxes => {
            let boxCopy = [...boxes];
            boxCopy[idx] = choice(props.allColors);
            return boxCopy;
        });
    };

    const boxComponents = boxes.map((color, i) => 
        <Box key={i} color= {color} />
    );

    return (
        <div>
            <section className="BoxesContainer">{boxComponents}</section>
            <button onClick={handleClick}>Change Box</button>
        </div>
    );
}

ColorBoxes.defaultProps = {
    numBoxes: 16,
    allColors: [
      "Aqua",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "Chocolate",
      "DodgerBlue",
      "Lavender",
      "LawnGreen",
      "Peru",
      "Plum",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Yellow",
      "YellowGreen"
    ]
  };

export default ColorBoxes;