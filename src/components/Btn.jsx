import React from 'react';
import "../sass/main.scss"

const Btn = ({onClick,...props}) => {
    return ( <button className="button" onClick={onClick}>
        {props.children}
    </button> );
}
 
export default Btn;