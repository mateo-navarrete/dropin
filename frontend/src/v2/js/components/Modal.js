import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');
// const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      // A DOM element
      this.el
    );
  }
}

export default Modal;


// import React, { Component } from 'react';
// import './Modal.css';
//
// class Modal extends Component {
//   render() {
//     return this.props.open ? (
//       <div>
//         <div className="modal-background" />
//         <div role="dialog" className="modal-dialog">
//           <header>
//             <span>{this.props.header}</span>
//             <button
//               onClick={() => this.props.onClose()}
//               type="button"
//               aria-label="close"
//             >
//               CLOSE
//             </button>
//           </header>
//           <div className="modal-content">{this.props.children}</div>
//         </div>
//       </div>
//     ) : null;
//   }
// }
//
// export default Modal;
//

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
//
// import View from './View';
//
// // const modalRoot = document.getElementById("modal-root");
// const modalRoot = document.getElementById('modal');
//
// class Modal extends Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement('div');
//   }
//
//   componentDidMount() {
//     const { onClose } = this.props;
//     modalRoot.appendChild(this.el);
//     // NOTE (marius): This has to be added dynamically to work on iOS
//     const mf = document.getElementById('modal-fill');
//     mf.ontouchmove = e => {
//       if (e.target === mf) {
//         e.preventDefault();
//       }
//     };
//
//     mf.onclick = e => {
//       if (e.target === mf && onClose) {
//         onClose();
//       }
//     };
//
//     document.addEventListener('keyup', this.handleKeyUp, false);
//   }
//
//   componentWillUnmount() {
//     modalRoot.removeChild(this.el);
//     document.removeEventListener('keyup', this.handleKeyUp, false);
//   }
//
//   handleKeyUp = e => {
//     const { onClose } = this.props;
//     if (e.key === 'Escape' && onClose) {
//       onClose();
//     }
//   };
//
//   render() {
//     const { children, className, onClose, title } = this.props;
//
//     return ReactDOM.createPortal(
//       <View className={className} handleClose={onClose} title={title}>
//         {children}
//       </View>,
//       this.el,
//     );
//   }
// }
//
// Modal.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   onClose: PropTypes.func,
//   title: PropTypes.string,
// };
//
// Modal.defaultProps = {
//   className: '',
//   onClose: null,
//   title: '',
// };
//
// export default Modal;
