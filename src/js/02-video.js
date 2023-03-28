import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
let pauseTime = 0;

const onPlay = function (data) {
   localStorage.setItem(STORAGE_KEY, data.seconds) 
}

player.on('timeupdate', throttle(onPlay, 1000));

if (STORAGE_KEY) {
   pauseTime = localStorage.getItem(STORAGE_KEY);
// console.log(pauseTime) 
}


player.setCurrentTime(pauseTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
