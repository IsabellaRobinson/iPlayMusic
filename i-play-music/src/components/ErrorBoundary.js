import { Link, Redirect } from "@reach/router";
import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError : false,
            // redirect : false
        };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBondary caught an error", error, info);
    }

    // componentDidUpdate() {
    //     if (this.state.hasError) {
    //         setTimeout(() => this.setState({redirect: true}), 5000);
    //     }
    // }
    
    render() {
        // if (this.state.redirect) {
            // return <Redirect to="/Categories" />
        // }

        if (this.state.hasError) {
            return (
                <>
                <h1>Oops, there was an error</h1>
                <p>Something went wrong, pleace try again</p>
                <p><Link to="/"> Click here</Link></p>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;