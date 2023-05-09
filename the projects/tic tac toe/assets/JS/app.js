let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box5 = document.getElementById('box5')
let box6 = document.getElementById('box6')
let box7 = document.getElementById('box7')
let box8 = document.getElementById('box8')
let box9 = document.getElementById('box9')


let box = document.querySelectorAll('.box')
let result = document.getElementById('results')
let container = document.getElementById('main-container')
let showPlayer = document.getElementById('showPlayer')
let resultWindow = document.getElementById('resultWindow')
let resultSetup = document.getElementById('resultSetup')
let turn1 = document.getElementById('turn1')
let turn2 = document.getElementById('turn2')

let scorex = document.getElementById('x-score')
let scoreo = document.getElementById('o-score')
let draws = document.getElementById('draws')


let xwins = 0;
let owins = 0;
let ties = 0;
let xturn = true;
let counter = 0;


box.forEach((element) => {
    element.addEventListener('click', () => {
        if (xturn) {
            xturn = false;
            element.classList.add('cross')
            element.classList.remove('circle')
            // element.innerHTML = 'X'
            element.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            
            winCheck()
        }
        else {
            xturn = true;
            element.classList.add('circle')
            element.classList.remove('cross')
            // element.innerHTML = 'O'
            element.innerHTML = '<i class="fa-regular fa-circle"></i>'
            winCheck()
        }
        counter = counter + 1;

        drawSituation();

        if (showPlayer.innerHTML != '') {
            container.style.pointerEvents = 'none'
        }


    })
});

function drawSituation() {
    if (counter == 9) {
        ties = ties + 1
        draws.innerHTML = ties
        result.innerHTML = 'draw!!'
        showPlayer.innerHTML = 'X O'
        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
            `
    }
}


function winCheck() {
    let result = document.getElementById('results')

    if (box1.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box2.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box3.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        showPlayer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        xwins = xwins + 1
        scorex.innerHTML = xwins
        result.innerHTML = 'TAKES THE ROUND'
        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box4.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box5.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box6.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        showPlayer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        xwins = xwins + 1
        scorex.innerHTML = xwins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box7.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box8.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box9.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        showPlayer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        xwins = xwins + 1
        scorex.innerHTML = xwins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box1.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box4.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box7.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        showPlayer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        xwins = xwins + 1
        scorex.innerHTML = xwins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box2.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box5.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box8.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        showPlayer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        xwins = xwins + 1
        scorex.innerHTML = xwins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box9.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box6.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box3.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        showPlayer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        xwins = xwins + 1
        scorex.innerHTML = xwins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box1.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box5.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box9.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        showPlayer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        xwins = xwins + 1
        scorex.innerHTML = xwins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box3.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box5.innerHTML == '<i class="fa-solid fa-xmark"></i>' && box7.innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        showPlayer.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        xwins = xwins + 1
        scorex.innerHTML = xwins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }





    if (box1.innerHTML == '<i class="fa-regular fa-circle"></i>' && box2.innerHTML == '<i class="fa-regular fa-circle"></i>' && box3.innerHTML == '<i class="fa-regular fa-circle"></i>') {
        showPlayer.innerHTML = '<i class="fa-regular fa-circle"></i>'
        owins = owins + 1
        scoreo.innerHTML = owins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box4.innerHTML == '<i class="fa-regular fa-circle"></i>' && box5.innerHTML == '<i class="fa-regular fa-circle"></i>' && box6.innerHTML == '<i class="fa-regular fa-circle"></i>') {
        showPlayer.innerHTML = '<i class="fa-regular fa-circle"></i>'
        owins = owins + 1
        scoreo.innerHTML = owins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box7.innerHTML == '<i class="fa-regular fa-circle"></i>' && box8.innerHTML == '<i class="fa-regular fa-circle"></i>' && box9.innerHTML == '<i class="fa-regular fa-circle"></i>') {
        showPlayer.innerHTML = '<i class="fa-regular fa-circle"></i>'
        owins = owins + 1
        scoreo.innerHTML = owins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box1.innerHTML == '<i class="fa-regular fa-circle"></i>' && box4.innerHTML == '<i class="fa-regular fa-circle"></i>' && box7.innerHTML == '<i class="fa-regular fa-circle"></i>') {
        showPlayer.innerHTML = '<i class="fa-regular fa-circle"></i>'
        owins = owins + 1
        scoreo.innerHTML = owins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box2.innerHTML == '<i class="fa-regular fa-circle"></i>' && box5.innerHTML == '<i class="fa-regular fa-circle"></i>' && box8.innerHTML == '<i class="fa-regular fa-circle"></i>') {
        showPlayer.innerHTML = '<i class="fa-regular fa-circle"></i>'
        owins = owins + 1
        scoreo.innerHTML = owins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box9.innerHTML == '<i class="fa-regular fa-circle"></i>' && box6.innerHTML == '<i class="fa-regular fa-circle"></i>' && box3.innerHTML == '<i class="fa-regular fa-circle"></i>') {
        showPlayer.innerHTML = '<i class="fa-regular fa-circle"></i>'
        owins = owins + 1
        scoreo.innerHTML = owins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box1.innerHTML == '<i class="fa-regular fa-circle"></i>' && box5.innerHTML == '<i class="fa-regular fa-circle"></i>' && box9.innerHTML == '<i class="fa-regular fa-circle"></i>') {
        showPlayer.innerHTML = '<i class="fa-regular fa-circle"></i>'
        owins = owins + 1
        scoreo.innerHTML = owins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
    if (box3.innerHTML == '<i class="fa-regular fa-circle"></i>' && box5.innerHTML == '<i class="fa-regular fa-circle"></i>' && box7.innerHTML == '<i class="fa-regular fa-circle"></i>') {
        showPlayer.innerHTML = '<i class="fa-regular fa-circle"></i>'
        owins = owins + 1
        scoreo.innerHTML = owins
        result.innerHTML = 'TAKES THE ROUND'

        resultWindow.style.cssText = `
        transform: scale(1);
        transition: 0.4s;
        `
    }
}


function disableBoxesAfterClick() {
    box1.addEventListener('click', () => {
        // box1.style.pointerEvents = 'none'
        box1.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
    box2.addEventListener('click', () => {
        // box2.style.pointerEvents = 'none'
        box2.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
    box3.addEventListener('click', () => {
        // box3.style.pointerEvents = 'none'
        box3.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
    box4.addEventListener('click', () => {
        // box4.style.pointerEvents = 'none'
        box4.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
    box5.addEventListener('click', () => {
        // box5.style.pointerEvents = 'none'
        box5.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
    box6.addEventListener('click', () => {
        // box6.style.pointerEvents = 'none'
        box6.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
    box7.addEventListener('click', () => {
        // box7.style.pointerEvents = 'none'
        box7.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
    box8.addEventListener('click', () => {
        // box8.style.pointerEvents = 'none'
        box8.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
    box9.addEventListener('click', () => {
        // box9.style.pointerEvents = 'none'
        box9.style.cssText = `
            pointer-events: none;
            transition: 0.2s;
            transform: translate(0, 3px);
            box-shadow: 0 3px 0 0 #10212A;
            `
    })
}

function disableBoxesAfterReplay() {
    box1.style.pointerEvents = 'auto'
    box2.style.pointerEvents = 'auto'
    box3.style.pointerEvents = 'auto'
    box4.style.pointerEvents = 'auto'
    box5.style.pointerEvents = 'auto'
    box6.style.pointerEvents = 'auto'
    box7.style.pointerEvents = 'auto'
    box8.style.pointerEvents = 'auto'
    box9.style.pointerEvents = 'auto'
}


// function boxAnimation(){

// }


function replay() {
    resultWindow.style.cssText = `
        transform: scale(0);
        transition: 0.4s;
        `
    box1.innerHTML = ''
    box1.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `
    box2.innerHTML = ''
    box2.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `
    box3.innerHTML = ''
    box3.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `
    box4.innerHTML = ''
    box4.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `
    box5.innerHTML = ''
    box5.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `
    box6.innerHTML = ''
    box6.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `
    box7.innerHTML = ''
    box7.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `
    box8.innerHTML = ''
    box8.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `
    box9.innerHTML = ''
    box9.style.cssText = `
        pointer-events: none;
        transition: 0.2s;
        transform: translate(0, 0);
        box-shadow: 0 6px 0 0 #10212A;
        `

    disableBoxesAfterReplay()

    counter = 0;
}

disableBoxesAfterClick()