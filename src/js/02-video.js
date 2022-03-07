const _ = require('lodash');

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
    });

player.on( 'timeupdate', _.throttle(data => { 
    localStorage.setItem("videoplayer-current-time", data.seconds.toString());
}, 1000),);

const saveTime = localStorage.getItem("videoplayer-current-time");

if (saveTime) {
    player.setCurrentTime(saveTime);
};