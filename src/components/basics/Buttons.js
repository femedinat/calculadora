import React from 'react';


const Buttons = (props) => {

    return (
        <button
        onClick={_ => props.click && props.click(props.label)}
        className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
            {props.label}
        </button>
    )
}

export default Buttons;