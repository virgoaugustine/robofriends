import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }
    render(){
        if (this.state.hasError){ 
            return (
            <div>
                <h1>This doesn't look good.</h1>
            </div>
        )
    };
        return (
            this.props.children
        )
    };


};
export default ErrorBoundary;