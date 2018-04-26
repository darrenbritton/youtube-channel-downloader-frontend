import { combineReducers } from 'redux';

import MusicReducer from './reducer-music';
import YoutubeReducer from './reducer-youtube';
import SearchReducer from './search-reducer';

const rootReducer = combineReducers({
  music: MusicReducer,
  youtube: YoutubeReducer,
  search: SearchReducer
});

export default rootReducer;
