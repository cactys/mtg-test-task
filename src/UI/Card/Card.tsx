import { Component } from 'react';
import { ICardProps } from '../../services/interfaces';
import { formatName } from '../../utils/utils';

import style from './Card.module.css';

class Card extends Component<ICardProps> {
  render() {
    const { review, name, date } = this.props.review;

    const formattedName = formatName(name);

    return (
      <li className={style.review}>
        <p className={style.reviewName}>{formattedName}</p>
        <p className={style.reviewDescription}>{review}</p>
        {/* <div className={style.userData}> */}
        <p className={style.reviewDate}>{date}</p>
        {/* </div> */}
      </li>
    );
  }
}

export { Card };
