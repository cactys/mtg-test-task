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
      <div>
        <img src={logo} alt="logo" className={style.logo} />
        <select
          tabIndex={1}
          value={selectedLanguage}
          onChange={this.handleLanguageChange}
          className={style.select}
        >
          <option value="ru" className={style.option}>
            RU
          </option>
          <option value="en" className={style.option}>
            EN
          </option>
        </select>
        <div>{currentTime}</div>
      </div>
    );
  }
}

export { Header };
