import { Component } from 'react';

class backButton extends Component {
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

export { backButton };
