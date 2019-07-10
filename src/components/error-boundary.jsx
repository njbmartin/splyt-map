import React, { Component } from 'react';

import * as Sentry from '@sentry/browser';
import PropType from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, eventId: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { children } = this.props;
    const { error, eventId } = this.state;
    if (error) {
      // render fallback UI
      return (
        <button
          type="button"
          onClick={() => Sentry.showReportDialog({ eventId })
          }
        >
          Report feedback
        </button>
      );
    }
    // when there's not an error, render children untouched
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropType.node.isRequired,
};

export default ErrorBoundary;
