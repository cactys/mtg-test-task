import { Component } from 'react';
import { IArrowButtonProps } from '../../services/interfaces';

import style from './BackButton.module.css';

class BackButton extends Component<IArrowButtonProps> {
  render() {
    const { currentPage, pageNumbers, handlePageChange } = this.props;

    return (
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`${
          currentPage <= 1 || currentPage > pageNumbers?.length
            ? style.disableButton
            : ''
        } ${style.button}`}
        disabled={currentPage <= 1 || currentPage > pageNumbers?.length}
      >
        &lArr;
      </button>
    );
  }
}

export { BackButton };
