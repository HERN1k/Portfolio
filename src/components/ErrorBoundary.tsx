import { ErrorInfo, Component } from "react";

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false }; 
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error: error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="errorConatiner">
                    <h1 className="errorTitle">
                        Oops!
                    </h1>
                    
                    <h2 className="errorText">
                        Something went wrong 😟
                    </h2>
    
                    { 
                        this.state.error 
                            ? <i className="errorMessage">{this.state.error?.message}</i> 
                            : <></>
                    }
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;