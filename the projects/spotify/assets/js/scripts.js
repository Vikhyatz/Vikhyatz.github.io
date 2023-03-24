const container = document.querySelector('#audio_player')
const musicImg = container.querySelector('.player_songs img')
const musicName = container.querySelector('#title .song_name')
const musicArtist = container.querySelector('#title #singer')
const mainAudio = document.querySelector('#main_audio')
const finalTime = container.querySelector('#finalTime')
const initialTime = container.querySelector('#currentTime')

let musicIndex = 1;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
})

function loadMusic(IndexNumb) {
    musicName.innerText = allMusic[IndexNumb - 1].name;
    musicArtist.innerText = allMusic[IndexNumb - 1].artist;
    musicImg.src = `./assets/images/${allMusic[IndexNumb - 1].img}.jpg`;
    mainAudio.src = `./assets/audio/${allMusic[IndexNumb - 1].src}.mp3`;
    finalTime.innerText = allMusic[IndexNumb - 1].len;
}



const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')

function play() {
    mainAudio.play()
    playBtn.style.visibility = 'hidden'
    pauseBtn.style.visibility = 'visible'
}

function pause() {
    mainAudio.pause()
    pauseBtn.style.visibility = 'hidden'
    playBtn.style.visibility = 'visible'
}

// next--prev

const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

function next() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex)
    play()
}

function prev() {
    musicIndex--;
    loadMusic(musicIndex)
    play()
}


// PROGRESS BAR UPDATE 
let progressBar = document.getElementById('progress_bar')
mainAudio.addEventListener('timeupdate', () => {
    let progress = parseInt((mainAudio.currentTime / mainAudio.duration) * 100)
    progressBar.value = progress;
    

    let initialTime = document.getElementById('currentTime')

    let currentMin = Math.floor(mainAudio.currentTime / 60)
    let currentsec = Math.floor(mainAudio.currentTime % 60)
    if (currentsec < 10) {
        currentsec = `0${currentsec}`
    }
    initialTime.innerText = `${currentMin}:${currentsec}`
})

progressBar.addEventListener('change', () => {
    mainAudio.currentTime = progressBar.value * mainAudio.duration / 100;
})


// default property

// song_01
let song01 = document.getElementById('song_01')
let song011 = document.getElementById('mains_1')

song01.addEventListener('click', () => {
    musicIndex = 1;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song011.addEventListener('click', () => {
    musicIndex = 1;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})




let song02 = document.getElementById('song_02')
let song022 = document.getElementById('mains_2')

song02.addEventListener('click', () => {
    musicIndex = 2;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song022.addEventListener('click', () => {
    musicIndex = 2;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})


let song03 = document.getElementById('song_03')
let song033 = document.getElementById('mains_3')

song03.addEventListener('click', () => {
    musicIndex = 3;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song033.addEventListener('click', () => {
    musicIndex = 3;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})



let song04 = document.getElementById('song_04')
let song044 = document.getElementById('mains_4')

song04.addEventListener('click', () => {
    musicIndex = 4;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song044.addEventListener('click', () => {
    musicIndex = 4;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})



let song05 = document.getElementById('song_05')
let song055 = document.getElementById('mains_5')

song05.addEventListener('click', () => {
    musicIndex = 5;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song055.addEventListener('click', () => {
    musicIndex = 5;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})


let song06 = document.getElementById('alan_faded')
let song066 = document.getElementById('alan_faded2')
let song0666 = document.getElementById('song_06')
let song06666 = document.getElementById('mains_6')

song06.addEventListener('click', () => {
    musicIndex = 6;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song0666.addEventListener('click', () => {
    musicIndex = 6;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song06666.addEventListener('click', () => {
    musicIndex = 6;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song066.addEventListener('click', () => {
    musicIndex = 6;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})


let song07 = document.getElementById('song_07')
let song077 = document.getElementById('mains_7')

song07.addEventListener('click', () => {
    musicIndex = 7;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})
song077.addEventListener('click', () => {
    musicIndex = 7;
    loadMusic(musicIndex)
    play()
    setInterval(() => {
        if(initialTime.innerText == finalTime.innerText){
            next();
        }
    }, 1000);
})





let burger = document.getElementById('hamburger_menu')



function playlist() {
    let playlist = document.getElementById('playlist')
    playlist.style.transform = 'translate(0px, 0px)'
    playlist.style.transition = '1s'
}

let cross = document.getElementById('crsoo')

function back() {
    let playlist = document.getElementById('playlist')
    playlist.style.transform = 'translate(-600px, 0px)'
    playlist.style.transition = '1s'
}