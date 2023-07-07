import { Component } from 'react';
import { connect } from 'react-redux';
import { IMainProps, IMainState } from '../../services/interfaces';

import { countPage, paginationPage } from '../../utils/utils';
import { Card } from '../../UI/Card/Card';
import { Button } from '../../UI/Button/Button';
import { BackButton } from '../../UI/BackButton/BackButton';
import { ForwardButton } from '../../UI/ForwardButton/ForwardButton';
import { Preloader } from '../../UI/Preloader/Preloader';
import style from './Main.module.css';

class Main extends Component<IMainProps> {
  state: IMainState = {
    currentPage: 1,
  };

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { reviews, status } = this.props.reviews;
    const { currentPage } = this.state;

    const paginationReviews = paginationPage(currentPage, reviews);

    const pageNumbers: number[] = countPage(10, reviews);

    return (
      <main className={style.container}>
        <ul className={style.reviews}>
          {status === 'loading' ? <Preloader /> : null}
          {paginationReviews.map((review, index) => {
            return <Card key={index} review={review} />;
          })}
        </ul>
        <div className={style.paginationContainer}>
          <BackButton
            currentPage={currentPage}
            handlePageChange={this.handlePageChange}
            pageNumbers={pageNumbers}
          />
          {pageNumbers.map((page) => {
            return (
              <Button
                key={page}
                page={page}
                currentPage={currentPage}
                handlePageChange={this.handlePageChange}
              />
            );
          })}
          <ForwardButton
            currentPage={currentPage}
            handlePageChange={this.handlePageChange}
            pageNumbers={pageNumbers}
          />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: IMainProps) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Main);
