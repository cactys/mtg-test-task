import { Component, ReactNode, ChangeEvent } from 'react';

import logo from '../../images/logo.png';
import style from './Header.module.css';
import { IHeaderProps, IHeaderState } from '../../services/interfaces';

class Header extends Component<IHeaderProps> {
  interval: NodeJS.Timeout | undefined;

  state: IHeaderState = {
    currentTime: new Date().toLocaleTimeString(),
    selectedLanguage: 'ru',
  };

  componentDidMount(): void {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  handleLanguageChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = evt.target.value;
    this.setState({ selectedLanguage: selectedLanguage });
    this.props.onLanguageChange(selectedLanguage);
  };

  render(): ReactNode {
    const { currentTime, selectedLanguage } = this.state;

    return (
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.clockContainer}>
            <span className={style.clock}>{currentTime}</span>
          </div>
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.selectContainer}>
            <div className={style.selectContent}>
              <select
                tabIndex={1}
                value={selectedLanguage}
                onChange={this.handleLanguageChange}
                className={style.select}
              >
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
