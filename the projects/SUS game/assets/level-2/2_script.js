const player = document.getElementById('main_player')

document.onkeydown = function (f) {
    if (f.keyCode == 39) {
        let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
        if (playerLeft < 560) player.style.left = (playerLeft + 28) + "px"
    }

    if (f.keyCode == 37) {
        let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
        if (playerLeft > 2) player.style.left = (playerLeft - 28) + "px"
    }

    if (f.keyCode == 40) {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
        if (playerTop < 29) player.style.top = (playerTop + 28) + "px"
    }

    if (f.keyCode == 38) {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
        if (playerTop > -531) player.style.top = (playerTop - 28) + "px"
    }
}


function up() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    if (playerTop > -531) player.style.top = (playerTop - 28) + "px"

}

function down() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    if (playerTop < 29) player.style.top = (playerTop + 28) + "px"
}

function right() {
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
    if (playerLeft < 560) player.style.left = (playerLeft + 28) + "px"
}

function left() {
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
    if (playerLeft > 2) player.style.left = (playerLeft - 28) + "px"
}







// game over 
// game over 
// game over 




parseInt(window.getComputedStyle(player).getPropertyValue('left'))
parseInt(window.getComputedStyle(player).getPropertyValue('top'))



setInterval(function gameOver() {
    let player = document.getElementById('main_player')
    let gameover = document.getElementById('gameOver')
    let gameover2 = document.getElementById('main_game')

    if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 2) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) < -2)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }

    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) > -30) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) > 2)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }

    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 562) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) > -500)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }

    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) > 2) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -531)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }

    // sides done 

    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 30) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 30) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 30) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -391)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -447)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -223)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 58) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 86) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 86) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 86) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 86) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 86) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === 1)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -55)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -167)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -335)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -447)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 114) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 142) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 142) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 142) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 142) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === 1)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -111)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -223)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -279)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -335)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 170) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 198) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 198) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 198) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 198) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -55)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -167)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -335)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -391)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 226) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -503)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 254) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 254) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 254) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 254) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -223)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -335)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -447)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 282) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 310) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 310) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 310) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 310) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 310) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -111)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -167)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -223)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -279)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -391)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 366) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 338) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === 1)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -55)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -223)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -391)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -391)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 394) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -503)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 422) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 422) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 422) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 422) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -55)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -111)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -279)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -447)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 450) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -503)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 478) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 478) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 478) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -27)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -55)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -139)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -167)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -195)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -223)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -307)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -363)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -391)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -419)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -447)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 506) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 534) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -83)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 534) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -251)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
    else if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 534) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -475)) {
        gameover.style.visibility = 'visible'
        gameover2.style.visibility = 'hidden'
    }
}, 10)



// winner 
// winner 

setInterval(function gameWinner() {
    let player = document.getElementById('main_player')
    let key = document.getElementById('key')
    let winner = document.getElementById('winner')
    let nextgame = document.getElementById('Nextgame')
    let controls = document.getElementById('controls')

    if ((parseInt(window.getComputedStyle(player).getPropertyValue('left')) === 562) && (parseInt(window.getComputedStyle(player).getPropertyValue('top')) === -503)) {
        player.style.display = 'none'
        key.style.display = 'none'
        winner.style.display = 'block'
        nextgame.style.display = 'block'
        controls.style.display = 'none'
    }
}, 10);