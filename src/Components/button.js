import React from 'react'

class Button extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }

    render() {
    return (
        <button onClick={this.props.onClick}>Click me</button>
    )}

}

export default Button