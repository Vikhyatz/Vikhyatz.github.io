

// window.addEventListener("keydown", function(e){
//     var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
//     player.style.left = (playerLeft + 70) + 'px'
// })


const player = document.getElementById('player')

document.onkeydown = function (f) {
    if (f.keyCode == 39) {
        let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
        if (playerLeft < 370) player.style.left = (playerLeft + 72) + "px"
    }

    if (f.keyCode == 37) {
        let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
        if (playerLeft > -10) player.style.left = (playerLeft - 72) + "px"
    }

    if (f.keyCode == 40) {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
        if (playerTop < 150) player.style.top = (playerTop + 72) + "px"
    }

    if (f.keyCode == 38) {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
        if (playerTop > -150) player.style.top = (playerTop - 72) + "px"
    }
}


function up() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    if (playerTop > -150) player.style.top = (playerTop - 72) + "px"

}

function down() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    if (playerTop < 150) player.style.top = (playerTop + 72) + "px"
}

function right() {
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
    if (playerLeft < 370) player.style.left = (playerLeft + 72) + "px"
}

function left() {
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
    if (playerLeft > -10) player.style.left = (playerLeft - 72) + "px"
}

// game over
setInterval(function gameOver() {
    let player = document.getElementById('player')
    let gameover = document.getElementById('gameOver')
    let gameover2 = document.getElementById('main_game')

    if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) > -73) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) > 1)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }

    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) > 361) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === 0)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }

    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) < -1) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === 0)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }

    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) > -73) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) < -1)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
}, 10)

setInterval(function gameWinner() {
    let player = document.getElementById('player')
    let key = document.getElementById('key')
    let winner = document.getElementById('winner')
    let nextgame = document.getElementById('Nextgame')
    let controls = document.getElementById('controls')

    if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 360) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === 0)) {
        player.style.display = 'none'
        key.style.display = 'none'
        winner.style.display = 'block'
        nextgame.style.display = 'block'
        controls.style.display = 'none'
    }
}, 10);

// setInterval(function gameEnd() {
//     let gameover = document.getElementById('gameOver')
//     let gameover2 = document.getElementById('main_game')

// }, 10);