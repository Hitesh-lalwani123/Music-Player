console.log("Welcome to player")
// initialise the variables
let songIndex = 5;
let audioElement = new Audio(`songs/${songIndex}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songBanner = document.getElementById('songBanner');
let gif = document.getElementById('gif');
let myelement = Array.from(document.getElementsByClassName('songName'));
let foreward = document.getElementById('foreward');
let backward = document.getElementById('backward');
let play = document.getElementById(`s${songIndex}`);
let bannerImage = `$images/${songIndex}.jpg`;



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
play.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        whenPlayed();

    }
    else {
        whenPaused();

    }
})
// timeupdate when the song is played
audioElement.addEventListener('timeupdate', () => {

    let progress = parseInt(audioElement.currentTime / audioElement.duration * 100)


    myProgressBar.value = progress;
})

// change in progress bar 
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

// when foreward button clicked
foreward.addEventListener('click', () => {
    whenPaused();
    if (songIndex < 5) {
        songIndex++;
        audioElement = new Audio(`songs/${songIndex}.mp3`);
        console.log(songIndex);
    }
    else {
        songIndex = 0;
        new Audio(`songs/${songIndex}.mp3`);
        console.log(songIndex);
    }
    myProgressBar.value = 0;
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

function whenPaused() {

    // audioElement = new Audio(`songs/${songIndex}.mp3`)
    audioElement.pause();
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity = 0;
    songBanner.style.background = "url('images/logo.png')";
    songBanner.style.backgroundSize = 'cover'

}
function whenPlayed() {
   
    audioElement.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;

        // songBanner.style.display = 'block'; 

    songBanner.style.background = `url('images/${songIndex}.jpg')`
    
    songBanner.style.backgroundSize = 'cover';
}

// audioElement.play();








