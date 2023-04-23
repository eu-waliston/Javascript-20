const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')

const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const song = [
  {
    name: "jacinto-1",
    displayName: "Eletric Chill Machine",
    artist: "Jacinto Design",
  },

  {
    name: "jacinto-2",
    displayName: "Seven Nation Armi (Remix)",
    artist: "Jacinto Design",
  },

  {
    name: "jacinto-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },

  {
    name: "metric-1",
    displayName: "Front Row (Remix)",
    artist: "Metric/Jacinto Design",
  },
];

//check if playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

//Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");

  music.pause();
}

//Play or Pause
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

//Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

//prev song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = song.length - 1;
  }

  loadSong(song[songIndex]);
  playSong();
}

//nex song
function nextSong() {
  songIndex++;
  if (songIndex > song.length - 1) {
    songIndex = 0;
  }

  loadSong(song[songIndex]);
  playSong();
}

// update progress bar 
function updateProgressBar(e) {
    if(isPlaying) {
        const {duration, currentTime} = e.srcElement;
        console.log(duration, currentTime);

        //update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }
}

//On Load - Select first song
loadSong(song[songIndex]);

//Event Listener
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener('timeupdate', updateProgressBar)
