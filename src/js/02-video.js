var throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const player = new Player("video-player", {
    id: 19231868,
    width: 640
});
console.log(player);

var onPlay = function(data) {  
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};
player.on('timeupdate', throttle(onPlay, 1000));

const savedSettings = localStorage.getItem("videoplayer-current-time");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);

player.setCurrentTime(parsedSettings.seconds).then(function(seconds) {
  console.log(seconds); 
});