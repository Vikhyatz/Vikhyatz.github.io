let yesBtn = document.getElementById('yes');
let noBtn = document.getElementById('no');
let questionText = document.getElementById('question');
let container = document.querySelector('.container');
let finalContainer = document.querySelector('.final-container');
let gif = document.getElementById("videoElem")

let currentQuestion = 1;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function moveButton(button) {
    let left = getRndInteger(0, 100);
    let top = getRndInteger(0, 100);
    button.style.position = 'absolute';
    button.style.left = `calc(${left}% - 71px)`;
    button.style.top = `calc(${top}% - 40px)`;
}

yesBtn.addEventListener('click', () => {
    if (currentQuestion === 1) {
        moveButton(yesBtn);
        
        
        noBtn.classList.add('no-move-out');
    } else if (currentQuestion === 4) {
        container.style.display = 'none';
        finalContainer.style.display = 'block';
    }
});

noBtn.addEventListener('click', () => {
    if (currentQuestion === 1) {
        questionText.textContent = "Are you really excited?";
        gif.src = '2.mp4';
        currentQuestion = 2;
    } else if (currentQuestion === 2) {
        questionText.textContent = "Are you really really excited?";
        gif.src = '3.mp4';
        currentQuestion = 3;
    } else if (currentQuestion === 3) {
        questionText.textContent = "Finally, are you ready for the surprise?";
        gif.src = '4.mp4';
        currentQuestion = 4;

        noBtn.addEventListener('mouseover', () => moveButton(noBtn));
        noBtn.addEventListener('click', () => moveButton(noBtn));
    }
});

yesBtn.addEventListener('mouseover', () => {
    if (currentQuestion === 1 || currentQuestion === 2 || currentQuestion === 3) {
        moveButton(yesBtn);
    }
});
