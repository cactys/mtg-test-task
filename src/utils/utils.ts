import { IReview } from '../services/interfaces';

const formatName = (name: string) => {
  const nameParts = name.split(' ');

  const lastName = nameParts[0];
  const firstName = nameParts[1];

  const formattedName = lastName + ' ' + firstName?.charAt(0) + '.';

  return formattedName;
};

const paginationPage = (page: number, reviews: IReview[]) => {
  const reviewsPerPage = 10;
  const startIndex = (page - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const paginationReviews = Object.values(reviews).slice(startIndex, endIndex);

  return paginationReviews;
};

const countPage = (page: number, reviews: IReview[]) => {
  const totalPages = Math.ceil(Object.values(reviews).length / page);
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

export { formatName, paginationPage, countPage };
