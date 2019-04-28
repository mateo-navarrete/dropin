import React from 'react';

// import PropTypes from 'prop-types';
// import classNames from 'classnames';

// import styles from './styles.scss';

const View = ({ children, className, handleClose, title }) => (
  <div id="modal-fill" touch-action="none" className="{styles.fill}">
    <div className="{styles.modal}">
      {(title || handleClose) && (
        <div className="{styles.header}">
          <h2>{title}</h2>
          {handleClose !== null && (
            <button className="{styles.exit}" onClick={handleClose}>
              &#x2715;
            </button>
          )}
        </div>
      )}
      <div className={className}>{children}</div>
    </div>
  </div>
);

// <div className={classNames(styles.modalContainer, className)}>
//   {children}
// </div>

// View.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string.isRequired,
//   handleClose: PropTypes.func,
//   title: PropTypes.string,
// };

View.defaultProps = {
  handleClose: null,
  title: '',
};

export default View;
