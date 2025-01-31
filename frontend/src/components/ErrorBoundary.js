import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_ERROR_MESSAGE } from '../config/constants';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Here you can add error logging service integration
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <h2 className="text-lg font-semibold text-red-800">Something went wrong</h2>
          <p className="mt-2 text-red-600">
            {this.props.fallback || DEFAULT_ERROR_MESSAGE}
          </p>
          {process.env.NODE_ENV === 'development' && (
            <pre className="mt-2 text-sm text-red-500">
              {this.state.error?.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.string,
};

export default ErrorBoundary;
