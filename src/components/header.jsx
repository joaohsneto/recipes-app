import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    // const { title, searchBar } = this.props;

    this.state = {
      isSearchBar: false,
    };

    this.header = this.header.bind(this);
    this.verify = this.verify.bind(this);
  }

  verify() {
    const { isSearchBar } = this.state;
    if (isSearchBar === true) {
      return this.setState({ isSearchBar: false }, (console.log('false')));
    }
    return this.setState({ isSearchBar: true }, console.log('true'));
  }

  searchBarTrue() {
    return (
      <button type="button" onClick={ this.verify } data-testid="search-top-btn">
        <img
          src={ searchIcon }
          alt="search"
        />
      </button>
    );
  }

  header(title = 'Comidas', searchBar = true) {
    return (
      <div>
        <header className="header">
          <Link to="/">
            <img data-testid="profile-top-btn" src={ ProfileIcon } alt="profileImagem" />
          </Link>
          <h1 data-testid="page-title">{ title }</h1>

          {searchBar === true && this.searchBarTrue()}

        </header>
      </div>
    );
  }

  render() {
    // const { isSearchBar } = this.state;
    return (
      <div>
        { this.header()}
        {/* {isSearchBar === true && } //meu Componente de searchbar */}
      </div>
    );
  }
}
export default Header;