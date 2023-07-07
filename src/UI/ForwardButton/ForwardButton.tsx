import { Component } from 'react';
import { IArrowButtonProps } from '../../services/interfaces';

import style from './ForwardButton.module.css';

class ForwardButton extends Component<IArrowButtonProps> {
  render() {
    const { currentPage, pageNumbers, handlePageChange } = this.props;

    return (
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`${
          currentPage >= pageNumbers.length || currentPage < 1
            ? style.disableButton
            : ''
        } ${style.button}`}
        disabled={currentPage >= pageNumbers.length || currentPage < 1}
      >
        &rArr;
      </button>
    );
  }
}

export { ForwardButton };
