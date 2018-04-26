import { LOADING, FETCH_ALBUMS, FETCH_YOUTUBE_URL } from '../actions/index';

export default function(state = { loading: false, type: null }, action) {
  switch (action.type){
    case LOADING:
      return {...state, loading: true, type: action.payload};
    case FETCH_YOUTUBE_URL:
    case FETCH_ALBUMS:
      return {...state, loading: false, type: null};
    default:
      return state;
  }
}
