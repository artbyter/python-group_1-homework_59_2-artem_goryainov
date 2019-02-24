import React from 'react'

class Button extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }

    render() {
    return (
        <button className='btn btn-primary my-3' onClick={this.props.onClick}>Еще шуток!</button>
    )}

}

export default Button