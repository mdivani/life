import React from 'react';

const CommandItem = (props) => {
    
    return (
    <div className='cmd-item'>
        <button className='btn btn--command' onClick={props.onClickCommand}>
            {props.children}
        </button>
    </div>
    )
}

export default CommandItem;