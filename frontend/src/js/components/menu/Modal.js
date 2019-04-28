import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import PropTypes from 'prop-types';
// import Drawer from '@material-ui/core/Drawer';

import View from './View';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const { onClose } = this.props;
    modalRoot.appendChild(this.el);

    // NOTE (marius): This has to be added dynamically to work on iOS
    const mf = document.getElementById('modal-fill');
    mf.ontouchmove = e => {
      if (e.target === mf) {
        e.preventDefault();
      }
    };

    mf.onclick = e => {
      if (e.target === mf && onClose) {
        onClose();
      }
    };

    document.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.removeEventListener('keyup', this.handleKeyUp, false);
  }

  handleKeyUp = e => {
    const { onClose } = this.props;
    if (e.key === 'Escape' && onClose) {
      onClose();
    }
  };

  render() {
    const { children, className, onClose, title } = this.props;

    return ReactDOM.createPortal(
      <View className={className} handleClose={onClose} title={title}>
        {children}
      </View>,
      this.el
    );
  }
}

// <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
//   <div
//     tabIndex={0}
//     role="button"
//     onClick={this.toggleDrawer('left', false)}
//     onKeyDown={this.toggleDrawer('left', false)}
//   >
//     <p>This modal is working</p>
//   </div>
// </Drawer>

// Modal.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   onClose: PropTypes.func,
//   title: PropTypes.string,
// };
//
Modal.defaultProps = {
  className: '',
  onClose: null,
  title: '',
};

export default Modal;
