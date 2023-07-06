import { Component } from 'react';
import { connect } from 'react-redux';
import { IMainProps, IMainState, IReview } from '../../services/interfaces';

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

    console.log(reviews);

    return (
      <main>
        <ul>
          {paginationReviews.map((review, index) => {
            return (
              <li key={index}>
                <p>{review.name}</p>
                <p>{review.review}</p>
                <p>{review.date}</p>
              </li>
            );
          })}
        </ul>
        <div>
          {pageNumbers.map((page) => {
            return (
              <button key={page} onClick={() => this.handlePageChange(page)}>
                {page}
              </button>
            );
          })}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: IMainProps) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Main);
