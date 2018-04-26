import axios from 'axios';

const ROOT_URL = '//api.alltheirsongs.com/search';

export const LOADING = 'LOADING';
export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FETCH_NEXT_ALBUMS = 'FETCH_NEXT_ALBUMS';
export const FETCH_YOUTUBE_URL = 'FETCH_YOUTUBE_URL';
export const UPDATE_ALBUM_INDEX = 'UPDATE_ALBUM_INDEX';
export const SET_PLAYER_TARGET = 'SET_PLAYER_TARGET';
export const UPDATE_PLAYER_STATE = 'UPDATE_PLAYER_STATE';
export const HIDE_PLAYER = 'HIDE_PLAYER';

export function loading(searchType = null) {
  return {
    type: LOADING,
    payload: searchType
  };
}

export function fetchAlbums(searchTerm) {
  const url = `${ROOT_URL}/artist/${searchTerm}`;
  const request = axios.get(url);
  return {
    type: FETCH_ALBUMS,
    payload: request
  };
}

export function fetchNextAlbums(searchTerm, page) {
  const url = `${ROOT_URL}/artist/${searchTerm}/page/${page}`;
  const request = axios.get(url);
  return {
    type: FETCH_NEXT_ALBUMS,
    payload: request
  };
}

export function fetchYoutubeUrl(searchTerm) {
  const url = `${ROOT_URL}/video/${searchTerm}`;
  const request = axios.get(url);
  return {
    type: FETCH_YOUTUBE_URL,
    payload: request
  };
}

export function updateAlbumIndex(index) {
  return {
    type: UPDATE_ALBUM_INDEX,
    payload: index
  };
}

export function setPlayerTarget(event) {
  return {
    type: SET_PLAYER_TARGET,
    payload: event.target
  };
}

export function updatePlayerState(playerState) {
  return {
    type: UPDATE_PLAYER_STATE,
    payload: playerState
  };
}

export function hidePlayer() {
  return {
    type: HIDE_PLAYER
  };
}
