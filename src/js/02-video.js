import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
const KEY_LOCALSTORAGE = 'videoplayer-current-time';

function onTimeUpdate(evt) {
  localStorage.setItem(KEY_LOCALSTORAGE, evt.seconds);
}

player.setCurrentTime(localStorage.getItem(KEY_LOCALSTORAGE) || 0);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
