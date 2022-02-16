

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        // console.log('title:', title);
    });

    const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.on('eventName', function(data) {
    // data is an object containing properties specific to that event
});

// player.on( 'timeupdate', throttle(data => { localStorage.setItem(KEY, data.seconds.toString()); }, 1000),);

console.log(eventName);