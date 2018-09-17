import React from 'react';

export default class CellItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellClass: '',
            isSelected: false
        }
    }

    componentDidMount() {
        //if cell is alive on start show with selected color,
        //else default color will be selected
        if(this.props.alive) { this.setState({cellClass: 'cell-item--alive'}) }
    }

    componentDidUpdate(prevProps, prevState) {
        //updated if only state value has changed
        if(this.props.alive !== prevProps.alive && !this.props.paused) {
            //check if alive
            if(this.props.alive) {
            //if cell is alive apply different color
            const cellClass = 'cell-item--alive';
            this.setState({cellClass});
            } 
            //if not alive show with default color
            else {
                this.setState({cellClass: ''})
            }
        }
        else if(this.state.isSelected) {
            const cellClass = 'cell-item--selected';
            this.setState({cellClass, isSelected: false});
        }
    }

    //call when user clicks on cell
    handleItemSelect = () => {
        //function provided by context, toggles cell status(alive prop)
        this.setState({isSelected: true});
        this.props.handleSelectCell(this.props.coordX, this.props.coordY);
    }

    render() {
        return (
            <div 
                onClick={this.handleItemSelect}
                className={`cell-item ${this.state.cellClass}`}
            >
            </div>
        )
    }
}

CellItem.defaultProps = {
    alive: false
}