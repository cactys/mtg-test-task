import { Component } from 'react';
import { connect } from 'react-redux';
import { IMainProps, IMainState, IReview } from '../../services/interfaces';

import style from './Main.module.css';

class Main extends Component<IMainProps> {
  state: IMainState = {
    currentPage: 1,
  };

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { reviews } = this.props.reviews;
    const { currentPage } = this.state;

    const reviewsPerPage = 10;
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const paginationReviews = Object.values(reviews).slice(
      startIndex,
      endIndex
    );
    const totalPages = Math.ceil(
      Object.values(reviews).length / reviewsPerPage
    );

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <main className={style.container}>
        <ul className={style.reviews}>
          {paginationReviews.map((review, index) => {
            return (
              <li key={index} className={style.review}>
                <p className={style.reviewDescription}>{review.review}</p>
                <div className={style.userData}>
                  <p className={style.reviewName}>{review.name}</p>
                  <p className={style.reviewDate}>{review.date}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={style.paginationContainer}>
          
          {pageNumbers.map((page) => {
            return (
              <button
                key={page}
                onClick={() => this.handlePageChange(page)}
                className={`${currentPage === page ? style.activeButton : ''} ${
                  style.paginationButton
                }`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() => this.handlePageChange(currentPage + 1)}
            className={`${
              currentPage >= pageNumbers.length || currentPage < 1
                ? style.disableButton
                : ''
            } ${style.arrowButton}`}
            disabled={currentPage >= pageNumbers.length || currentPage < 1}
          >
            &rArr;
          </button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: IMainProps) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Main);
