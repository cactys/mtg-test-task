import { Component, ReactNode } from 'react';
import { store } from '../../services';
import { setSelectedLanguage } from '../../services/slices/languageSlice';
import { Header } from '../Header/Header';
import Main from '../Main/Main';
import { fetchReviews } from '../../services/thunk/fetchReviews';

import style from './App.module.css';

class App extends Component {
  componentDidMount(): void {
    store.dispatch(fetchReviews());
  }

  onLanguageChange = (selectedLanguage: string) => {
    store.dispatch(setSelectedLanguage({ selectedLanguage: selectedLanguage }));
    store.dispatch(fetchReviews());
  };

  render(): ReactNode {
    return (
      <div className={style.page}>
        <Header onLanguageChange={this.onLanguageChange} />
        <Main />
      </div>
    );
  }
}

export { App };
