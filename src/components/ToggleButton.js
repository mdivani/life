import React from 'react';

const ToggleButton = (props) => (
    <div 
        className='checkbox'
        onClick={() => props.toggleButton(props.value)} >
        <input 
            className='checkbox__input'
            type='checkbox' 
            checked={props.value} />
        <div 
            className='checkbox__check'></div>
    </div>
);

export default ToggleButton;