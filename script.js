console.log("**--------------Welcome to player -----------------**")
let songIndex = 1;
let audioElement = new Audio(`songs/${songIndex}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songBanner = document.getElementById('songBanner');
let gif = document.getElementById('gif');
let myelement = Array.from(document.getElementsByClassName('songName'));
let foreward = document.getElementById('foreward');
let backward = document.getElementById('backward');
let player = document.getElementById(`s${songIndex}`);
let box = document.getElementById('box');
let bannerImage = `$images/${songIndex}.jpg`;
let total = 1124 - 125;


// play pause using master play
masterPlay.addEventListener('click', () => {
    songIndex = 1;
    if (audioElement.paused || audioElement.currentTime <= 0) {
        whenPlayed();
    }
    else {
        whenPaused();
    }
})

// play pause using play button in front of the song name
function updateplay() {
    player.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            whenPlayed();

        }
        else {
            whenPaused();

        }
    })
}

// timeupdate when the song is played
function timeupdater() {
    audioElement.addEventListener('timeupdate', () => {
        let progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
        myProgressBar.style.width = `${progress}%`;
    })
}


// change in progress bar 
box.addEventListener('click', (e) => {
    console.log(e.clientX);
    let fraction = (e.clientX - 125) / 1000;
    audioElement.currentTime = (fraction * (audioElement.duration));

})


// when foreward button clicked
foreward.addEventListener('click', () => {
    whenPaused();
    songIndex = (songIndex + 1) % 6;
    if (songIndex == 0) songIndex = 1;
    player = document.getElementById(`s${songIndex}`)
    updateplay();
    audioElement = new Audio(`songs/${songIndex}.mp3`);
    whenPlayed();
})

// when backward button clicked
backward.addEventListener('click', () => {
    whenPaused();
    songIndex--;
    if (songIndex < 1) {
        songIndex = 5;
        player = document.getElementById(`s${songIndex}`)
        audioElement = new Audio(`songs/${songIndex}.mp3`);
        console.log(songIndex);
    }
    else {
        player = document.getElementById(`s${songIndex}`)
        audioElement = new Audio(`songs/${songIndex}.mp3`);
        console.log(songIndex);
    }
    updateplay();
    console.log(songIndex)
    console.log(myProgressBar.value);
    whenPlayed();
})

document.addEventListener('keydown', (e) => {
    songBanner.style.display = 'block';
    songBanner.style.backgroundSize = 'cover';
    console.log(e.code);
    if (e.code == 'Space' && audioElement.paused) {
        whenPlayed();
    }
    else if (e.code == 'Space' && audioElement.paused == false) {
        whenPaused();
    }
})


// Functions to play and pause individual songs
function whenPaused() {
    audioElement.pause();
    player.classList.remove('fa-pause');
    player.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity = 0;
    songBanner.style.background = "url('images/logo.png')";
    songBanner.style.backgroundSize = 'cover'

}
function whenPlayed() {
    audioElement.play();
    timeupdater();
    player.classList.remove('fa-play');
    player.classList.add('fa-pause');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
    songBanner.style.background = `url('images/${songIndex}.jpg')`
    songBanner.style.backgroundSize = 'cover';
}









