import React from 'react';
import CommandItem from './CommandItem';
import ToggleButton from './ToggleButton';
import {BoardContext} from '../boardContext';

const CommandsComponent = (props) => {

    this.handleToggleButton = (checked) => {
        if(checked) {
            props.startGame();
        } else {
            props.pauseGame();
        }
    }

    return (
        <div className='commands'>
            <BoardContext.Consumer>
            {
                ({paused}) => <ToggleButton 
                                toggleButton={this.handleToggleButton}
                                value={paused} />
            }
            </BoardContext.Consumer>
            <CommandItem name='clear' onClickCommand={props.clearBoard} />
        </div>
    )
}

export default CommandsComponent;