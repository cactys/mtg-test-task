import { Component } from 'react';

import style from './Preloader.module.css';

class Preloader extends Component {
  render() {
    return (
      <div className={style.preloader}>
        <div className={style.container}>
          <span className={style.loader} />
        </div>
      </div>
    );
  }
}

export { Preloader };
