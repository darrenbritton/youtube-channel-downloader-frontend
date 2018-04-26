import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SEARCH_TYPE } from '../constants';
import TextField from 'material-ui/TextField';
import './SearchBar.css';

import { fetchAlbums, loading } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchAlbums(this.state.term);
    this.props.loading(SEARCH_TYPE.ARTIST);
  }

 preloadArtist = (searchTerm) => {
   this.props.fetchAlbums(searchTerm);
   this.setState({term: searchTerm.replace('%20', ' ')});
 }

  componentDidMount() {
    const url = window.location.href;
    if(url.includes('/artist/')) {
      this.preloadArtist(url.substring(url.lastIndexOf('/')+1));

    }
    else if(url.includes('?artist=')) {
      this.preloadArtist(url.substring(url.lastIndexOf('=')+1));
    }
  }

  render() {
    return (
    <form className="search wrapper" onSubmit={this.onFormSubmit}>
      <TextField/>
    </form>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchAlbums, loading }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
