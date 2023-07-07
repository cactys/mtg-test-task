import { Component } from 'react';
import { IButtonProps } from '../../services/interfaces';

import style from './BackButton.module.css';

class BackButton extends Component<IButtonProps> {
  render() {
    return (
      <button
        onClick={() => this.handlePageChange(currentPage - 1)}
        className={`${
          currentPage <= 1 || currentPage > pageNumbers.length
            ? style.disableButton
            : ''
        } ${style.arrowButton}`}
        disabled={currentPage <= 1 || currentPage > pageNumbers.length}
      >
        &lArr;
      </button>
    );
  }
}

export { BackButton };
