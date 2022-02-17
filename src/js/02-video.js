var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        // console.log('title:', title);
    });

//     const onPlay = function(data) {
//     console.log("onPlay ~ data", data.seconds.toString())
//     // data is an object containing properties specific to that event
// };

// player.on('timeupdate', onPlay);

// player.on('eventName', function (data) {
// console.log("data", data)
    
    // data is an object containing properties specific to that event
// });

// player.on( 'timeupdate', function(data) { localStorage.setItem("videoplayer-current-time", data.seconds.toString());
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );
player.on( 'timeupdate', throttle(data => { localStorage.setItem("videoplayer-current-time", data.seconds.toString());}, 1000),);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
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