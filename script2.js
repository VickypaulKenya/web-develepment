let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let isPlaying = false;

const songNameElement = document.getElementById('song-name');
const coverPhotoElement = document.getElementById('cover-photo')
const songDetails = document.getElementById('song-details');
const audio = document.getElementById('audio');
song.loadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if (isPlaying) {
        song.pause();
        ctrlIcon.src= 'controls/play.png';
    } else {
        song.play();
        rotateImage()
        ctrlIcon.src = 'controls/pause.png';
    }
    isPlaying =!isPlaying;
}


if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime; 
    }, 500);
}

function updateProgress(isPlaying) {
let progressValue = (song.currentTime / song.duration) * 100;
    progress.style.width = '${progressValue}';
    ctrlIcon.src = 'controls/pause.png';
    console.log(progressValue);
     
}
updateProgress();

function backward(){
    song.currentTime -= 5;    
}
function forward() {
    song.play();
    song.currentTime += 5;
 }

//----song profile----
 

let currentSongIndex = 0;
let songs = [
    
    {
        name: 'Ed sheeran',
        coverPhoto: 'cover/mic.jpeg',
        audioFile: 'music/Ed Sheeran - Perfect (Karaoke)CantoYo.mp3',
        songDetails:'Perfect'
    },
    {
        name: 'diamond',
        coverPhoto: 'cover/creep.jpg',
        audioFile: 'music/Diamond Platnumz - Gidi (Official Music Video) ( 128kbps ).mp3',
        songDetails:'gidi Official Video'
    },
    {
        name: 'Dj Perez',
        coverPhoto: 'cover/chinesedance.jpeg',
        audioFile: 'music/DJ Perez - Hoemboyz Radio Set, May 2023.mp3',
        songDetails:'HomeBoyz Radio set,May 2023'
    },
    {
        name: 'Dj Niido',
        coverPhoto: 'cover/creep.jpg',
        audioFile: 'music/DJ NiiDO - THROWBACK DANCEHALL RIDDIM MIX (2011 - 2016).mp3',
        songDetails:'Throwback Dancehall riddim mix'
    },
    {
        name: 'Dj F2',
        coverPhoto: 'cover/mic.jpeg',
        audioFile: 'music/DJ F2 - VALENTINE MIX BONGO  AFROBEATS) best of love songs 2023) (hearthis.at) (1).mp3',
        songDetails:'Valentine Mix Bongo AfroBeats'
    },
    {
        name: 'Dj LarryKE',
        coverPhoto: 'cover/beachEvening.jpeg',
        audioFile: 'music/DJ LARRY KE  LATEST OHANGLA SEASON 7 -2023 RUNDA EDITION 0740509000 .mp (hearthis.at).mp3',
        songDetails:'Latest Ohangla Season 7 2023'
    },
    {
        name: 'Dj Perez',
        coverPhoto: 'cover/creep.jpg',
        audioFile: 'music/BEST OF AFROBEAT 2023 _ DJ PEREZ _ AFROBEATS(MP3_160K).mp3',
        songDetails:'Best Of Afrobeat 2023'
    },
    {
        name: 'Dj Perez',
        coverPhoto: 'cover/beachEvening.jpeg',
        audioFile: 'music/Costa Titch Tribute 2023 - DJ Perez.mp3',
        songDetails: 'Tribute To Costa Titche'
    }];

function updateSongInfo() {
    songNameElement.textContent = songs[currentSongIndex].name;
    coverPhotoElement.src = songs[currentSongIndex].coverPhoto;
    song.src = songs[currentSongIndex].audioFile;
    songDetails.textContent = songs[currentSongIndex].songDetails;

}
function previousSong() {
    if(isPlaying){
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongInfo();
    song.play();
    ctrlIcon.src = 'controls/pause.png';


    }else{
    ctrlIcon.src = 'controls/play.png';

        
    }

}
    
function nextSong() {
    if(isPlaying){
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
    song.play();
    ctrlIcon.src = 'controls/pause.png';

    }else{
    ctrlIcon.src = 'controls/play.png';
        
    }
}
updateSongInfo();

function rotateImage(){
    if (song.play()) {
        coverPhotoElement.style.rotate = '360deg';
    }
    
}

let menu = document.getElementById('menu');
function toggleMenu(){
        menu.style.opacity = '1';
}