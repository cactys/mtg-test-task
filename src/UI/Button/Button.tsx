import { Component } from 'react';
import { IPageButtonProps } from '../../services/interfaces';

import style from './Button.module.css';

class Button extends Component<IPageButtonProps> {
  render() {
    const { currentPage, handlePageChange, page } = this.props;

    return (
      <button
        onClick={() => handlePageChange(page ? page : 0)}
        className={`${currentPage === page ? style.disableButton : ''} ${
          style.button
        }`}
        disabled={currentPage === page}
      >
        {page}
      </button>
    );
  }
}

export { Button };
