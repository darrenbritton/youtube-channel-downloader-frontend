import React, {Component} from 'react';
import './App.css';

import SearchBar from './containers/SearchBar';
import AlbumList from './containers/AlbumList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <AlbumList />
      </div>
    );
  }
}

export default App;
