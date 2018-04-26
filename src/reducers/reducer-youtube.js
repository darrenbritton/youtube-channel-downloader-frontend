import { FETCH_YOUTUBE_URL, UPDATE_ALBUM_INDEX, SET_PLAYER_TARGET, UPDATE_PLAYER_STATE, HIDE_PLAYER } from '../actions/index';

export default function(state = { playerState: {unstarted: false, ended: false, playing: false, paused: false, buffering:false, videoCued: false}}, action) {
  switch (action.type){
    case FETCH_YOUTUBE_URL:
      return {...state, ...action.payload.data};
    case UPDATE_ALBUM_INDEX:
      return {...state, albumIndex: action.payload};
      case SET_PLAYER_TARGET:
        return {...state, target: action.payload};
      case UPDATE_PLAYER_STATE:
        return {...state, playerState: action.payload};
      case HIDE_PLAYER:
        return {...state, id: null, albumIndex: null};
    default:
      return state;
  }
}
