import React from 'react';
import CommandItem from './CommandItem';

const CommandsComponent = (props) => {

    return (
        <div className='commands'>
            <CommandItem name='start/resume' onClickCommand={props.startGame} />
            <CommandItem name='pause' onClickCommand={props.pauseGame} />
            <CommandItem name='clear' onClickCommand={props.clearBoard} />
        </div>
    )
}

export default CommandsComponent;