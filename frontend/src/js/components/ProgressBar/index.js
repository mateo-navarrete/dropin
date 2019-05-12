import React, { Component } from 'react';
import { getProgress } from '../../utils';

class WrappedComponent extends Component {
  state = {
    progress: 1, // 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { start, end } = this.props;
      let progress = getProgress(start, end);
      this.setState({ progress: progress });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { progress } = this.state;
    return (
      <div className="flex center align">
        <div className="progress-bar-bg">
          <div
            className={
              'progress-bar ' + (progress < 0.2 ? 'red-bg' : 'blue-bg')
            }
            style={{ height: '5px', width: progress * 100 + '%' }}
          />
        </div>
      </div>
    );
  }
}
export const ProgressBar = WrappedComponent;
