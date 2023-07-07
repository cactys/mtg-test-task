import type { Action } from 'redux';

interface IReview {
  name: string;
  review: string;
  date: string;
}

interface IReviewsInitialState {
  reviews: IReview[];
  status?: string;
  error?: string | null;
}

interface ISelectedLanguageInitialState {
  selectedLanguage: string;
}

interface IFetchReviewsFulfilledAction extends Action {
  payload: IReview[];
}

interface IFetchReviewsRejectedAction extends Action {
  payload: Error;
}

interface IHeaderProps {
  onLanguageChange: (lang: string) => void;
}

interface IHeaderState {
  currentTime: string;
  selectedLanguage: string;
}

interface IMainProps {
  reviews: {
    reviews: IReview[];
    status: string;
  };
}

interface IMainState {
  currentPage: number;
}

interface IPageButtonProps {
  currentPage: number;
  handlePageChange: (page: number) => void;
  page: number;
}

interface IArrowButtonProps extends Omit<IPageButtonProps, 'page'> {
  pageNumbers: number[];
}

interface ICardProps {
  review: IReview;
}

export type {
  IReview,
  IReviewsInitialState,
  ISelectedLanguageInitialState,
  IFetchReviewsFulfilledAction,
  IFetchReviewsRejectedAction,
  IHeaderProps,
  IHeaderState,
  IMainProps,
  IMainState,
  IArrowButtonProps,
  IPageButtonProps,
  ICardProps,
};
