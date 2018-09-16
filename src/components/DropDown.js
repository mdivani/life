import React from 'react';

export default class DropDown extends React.Component {

    render() {
        return (
            <div className='dropdown'>
                <div className='dropdown__selected'>{this.props.selected}</div>
                <div className='dropdown__items'>
                {
                    this.props.options.map((option) => {
                        if(option !== this.props.selected) {
                            return <div 
                                        key={option} 
                                        onClick={() => this.props.handleSelectSize(option)}
                                        className='dropdown__item'>{option}</div>
                        }

                        return null;
                    })
                }
                </div>
            </div>
        );
    }
} 

DropDown.defaultProps = {
    options: [16,32,64],
    selected: 'resize board'
};
