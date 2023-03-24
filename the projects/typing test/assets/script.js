const randomQuote = 'http://api.quotable.io/random'
const content = document.getElementById('content')
const inpContent = document.getElementById('inpContent')


// result processing after the timer is finished
function resultProcessing() {
	timer.style.fontSize = '40px'

	const comparewords = (str1, str2) => {
		let words1 = str1.split(" ");
		let words2 = str2.value.split(" ");
		let cnt = 0;
		words1.forEach(function(item, index) {
			if (item == words2[index]) {
				cnt++;
			}
		})

		let mistakes = (words2.length - cnt);
		return (mistakes)
	}

	let totalWordsTyped = inpContent.value.split(" ").length;
	let realmistakes = (comparewords(content.innerText, inpContent));

	wpmSixtySec = totalWordsTyped - realmistakes
	let wpm = wpmSixtySec

	// accuracy
	let accuracy = ((wpmSixtySec / totalWordsTyped) * 100)
	var accuracyy = Math.trunc(accuracy);

	let pls1 = document.getElementById('mainContainer')
	let pls2 = document.getElementById('mainTimer')
	let pls3 = document.getElementById('startTest')
	let pls4 = document.getElementById('countdownTimer')
	pls1.style.display = 'none'
	pls2.style.display = 'none'
	pls3.style.display = 'none'
	pls4.style.display = 'none'

	let wpmHTML = document.getElementById('wpm')
	let resultsHTML = document.getElementById('results')
	let accuracyHTML = document.getElementById('accuracy')

	// mistakessssssss
	resultsHTML.style.display = 'flex'

	function mediaQuery() {
		let mobile = window.matchMedia("(max-width: 430px)")
		let computer = window.matchMedia("(max-width: 1366px)")
		if (mobile.matches) {
			resultsHTML.style.flexDirection = 'column'
		}
		else if (computer.matches) {
			resultsHTML.style.flexDirection = 'row'
		}
	}
	mediaQuery()
	resultsHTML.style.textAlign = 'center'
	wpmHTML.innerHTML = wpm + "WPM"
	accuracyHTML.innerHTML = accuracyy + "%"
}


function fetchQuote() {
	return fetch(randomQuote)
		.then(response => response.json())
		.then(data => data.content)
}


async function renderNewQuote() {
	let quote = await fetchQuote()
	content.innerText = ''
	inpContent.value = null
	quote.split('').forEach(character => {
		const characterSpan = document.createElement('span')
		characterSpan.innerText = character
		content.appendChild(characterSpan)
	})
}



// setInterval(() => {
//	if (content.innerText.split(" ").length < 20) {
//		renderNewQuote()
//	}
//	else if (content.innerText.split(" ").length > 17 && content.innerText.split(" ").length < 31) {
//	}

//	else if (content.innerText.split(" ").length > 36) {
//		renderNewQuote()
//	}
//}, 600);


let start = document.getElementById('btnStart')
let countdownTimer = document.getElementById('countdownTimer')
let countdownTimeDisplay = document.getElementById('countdownTimeDisplay')
let countdownTimeHead = document.getElementById('countdownTimeHead')

start.addEventListener('click', () => {

	let countdown = 4;
	var countdownInterval = setInterval(() => {
		countdownTimer.style.display = 'block'
		countdown--;
		countdownTimeDisplay.innerHTML = '0' + countdown


		if (countdown == 0) {
			clearInterval(countdownInterval);
			countdownTimer.style.display = 'none'
			inpContent.focus()
			start.style.pointerEvents = 'none'

			function mainTimer() {
				stopWatch = 0;
				let timer = document.getElementById('timer')
				var toimer = setInterval(() => {
					stopWatch++;
					timer.innerHTML = stopWatch
					if (stopWatch == 60) {
						clearInterval(toimer)
						resultProcessing();
					}

					inpContent.addEventListener('input', () => {

						const arrayQuote = content.querySelectorAll('span')
						const arrayValue = inpContent.value.split('')

						// color change for words(red or green --> depends)
						arrayQuote.forEach((characterSpan, index) => {
							let character = arrayValue[index]
							if (character == null) {
								characterSpan.classList.remove('correct')
								characterSpan.classList.remove('incorrect')
								correct = false
							}
							else if (character === characterSpan.innerText) {
								characterSpan.classList.add('correct')
								characterSpan.classList.remove('incorrect')
								correct = true
							}
							else {
								characterSpan.classList.remove('correct')
								characterSpan.classList.add('incorrect')
								correct = false
							}
						})
						if (correct == true) {

							let stopWatchAtThatTime = stopWatch


							// defining function for calculating wpm at random time when all the words are typed
							function resultProcessingAtRandomTime() {
								timer.style.fontSize = '40px'

								const comparewords = (str1, str2) => {
									let words1 = str1.split(" ");
									let words2 = str2.value.split(" ");
									let cnt = 0;
									words1.forEach(function(item, index) {
										if (item == words2[index]) {
											cnt++;
										}
									})

									let mistakes = (words2.length - cnt);
									return (mistakes)
								}

								let totalWordsTyped = inpContent.value.split(" ").length;
								let realmistakes = (comparewords(content.innerText, inpContent));

								wpRandSec = totalWordsTyped - realmistakes
								let wpm = Math.round((wpRandSec / stopWatchAtThatTime) * 60)

								// accuracy
								let accuracy = ((wpRandSec / totalWordsTyped) * 100)
								var accuracyy = Math.trunc(accuracy);

								let pls1 = document.getElementById('mainContainer')
								let pls2 = document.getElementById('mainTimer')
								let pls3 = document.getElementById('startTest')
								let pls4 = document.getElementById('countdownTimer')
								pls1.style.display = 'none'
								pls2.style.display = 'none'
								pls3.style.display = 'none'
								pls4.style.display = 'none'

								let wpmHTML = document.getElementById('wpm')
								let resultsHTML = document.getElementById('results')
								let accuracyHTML = document.getElementById('accuracy')

								// mistakessssssss
								resultsHTML.style.display = 'flex'

								function mediaQuery() {
									let mobile = window.matchMedia("(max-width: 430px)")
									let computer = window.matchMedia("(max-width: 1366px)")
									if (mobile.matches) {
										resultsHTML.style.flexDirection = 'column'
									}
									else if (computer.matches) {
										resultsHTML.style.flexDirection = 'row'
									}
								}
								mediaQuery()
								resultsHTML.style.textAlign = 'center'
								wpmHTML.innerHTML = wpm + "WPM"
								accuracyHTML.innerHTML = accuracyy + "%"

							}
							resultProcessingAtRandomTime();

						}
					})
				}, 1000)
			}
			mainTimer()
		}
	}, 1000);
})

// rendering new quote 
renderNewQuote()