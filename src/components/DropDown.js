import React from 'react';

export default class DropDown extends React.Component {

    render() {
        return (
            <div className='dropdown'>
                <div className='dropdown__selected'>{this.props.selected}</div>
                {
                    this.props.options.map((option) => {
                        if(option !== this.props.selected) {
                            return <div key={option} className='dropdown__items'>{option}</div>
                        }
                        
                        return null;
                    })
                }
            </div>
        );
    }
} 

DropDown.defaultProps = {
    options: [16,32,64]
};
