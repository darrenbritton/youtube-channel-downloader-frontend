import { FETCH_ALBUMS, FETCH_NEXT_ALBUMS } from '../actions/index';

export default function(state = { album:[], attr: {} }, action) {
  switch (action.type){
    case FETCH_ALBUMS:
      return action.payload.data;
    case FETCH_NEXT_ALBUMS:
      const newState = { ...state };
      newState.album = newState.album.concat(action.payload.data.album);
      newState.attr = action.payload.data.attr;
      return newState;
    default:
      return state;
  }
}
