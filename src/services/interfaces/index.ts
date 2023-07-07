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
  reviews: { reviews: IReview[] };
}

interface IMainState {
  currentPage: number;
}

interface IButtonProps {
  currentPage: number;
  pageNumbers: number[];
  handlePageChange: (page: number) => void;
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
  IButtonProps,
};
