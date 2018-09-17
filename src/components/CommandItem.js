import React from 'react';

const CommandItem = (props) => {
    
    return (
        <button className='btn btn--command' onClick={props.onClickCommand}>
            {props.name}
        </button>
    )
}

export default CommandItem;