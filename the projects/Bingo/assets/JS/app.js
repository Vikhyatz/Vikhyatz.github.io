let r1c1 = document.getElementById('r1c1')
let r1c2 = document.getElementById('r1c2')
let r1c3 = document.getElementById('r1c3')
let r1c4 = document.getElementById('r1c4')
let r1c5 = document.getElementById('r1c5')
let r2c1 = document.getElementById('r2c1')
let r2c2 = document.getElementById('r2c2')
let r2c3 = document.getElementById('r2c3')
let r2c4 = document.getElementById('r2c4')
let r2c5 = document.getElementById('r2c5')
let r3c1 = document.getElementById('r3c1')
let r3c2 = document.getElementById('r3c2')
let r3c3 = document.getElementById('r3c3')
let r3c4 = document.getElementById('r3c4')
let r3c5 = document.getElementById('r3c5')
let r4c1 = document.getElementById('r4c1')
let r4c2 = document.getElementById('r4c2')
let r4c3 = document.getElementById('r4c3')
let r4c4 = document.getElementById('r4c4')
let r4c5 = document.getElementById('r4c5')
let r5c1 = document.getElementById('r5c1')
let r5c2 = document.getElementById('r5c2')
let r5c3 = document.getElementById('r5c3')
let r5c4 = document.getElementById('r5c4')
let r5c5 = document.getElementById('r5c5')

let remakeBtn = document.getElementById('remakeBtn')
let cells = document.querySelectorAll('.cells')

let b = document.getElementById('b');
let i = document.getElementById('i');
let n = document.getElementById('n');
let g = document.getElementById('g');
let o = document.getElementById('o');

var beep = document.getElementById("myAudio");
let result = document.getElementById('resultpopup')




// grid generator
for (var a = [], p = 0; p < 25; ++p) a[p] = p;
function createRandom(arr) {
    var tmp, cur, tp = arr.length;
    if (tp)
        while (--tp) {
            cur = Math.floor(Math.random() * (tp + 1));
            tmp = arr[cur];
            arr[cur] = arr[tp];
            arr[tp] = tmp;
        }
    return arr;
}

// grid integrator
function makeBingo() {
    let main_array = createRandom(a)
    console.log(main_array)

    r1c1.innerHTML = main_array[0]
    r1c2.innerHTML = main_array[1]
    r1c3.innerHTML = main_array[2]
    r1c4.innerHTML = main_array[3]
    r1c5.innerHTML = main_array[4]
    r2c1.innerHTML = main_array[5]
    r2c2.innerHTML = main_array[6]
    r2c3.innerHTML = main_array[7]
    r2c4.innerHTML = main_array[8]
    r2c5.innerHTML = main_array[9]
    r3c1.innerHTML = main_array[10]
    r3c2.innerHTML = main_array[11]
    r3c3.innerHTML = main_array[12]
    r3c4.innerHTML = main_array[13]
    r3c5.innerHTML = main_array[14]
    r4c1.innerHTML = main_array[15]
    r4c2.innerHTML = main_array[16]
    r4c3.innerHTML = main_array[17]
    r4c4.innerHTML = main_array[18]
    r4c5.innerHTML = main_array[19]
    r5c1.innerHTML = main_array[20]
    r5c2.innerHTML = main_array[21]
    r5c3.innerHTML = main_array[22]
    r5c4.innerHTML = main_array[23]
    r5c5.innerHTML = main_array[24]
}

makeBingo();


remakeBtn.addEventListener('click', () => {
    makeBingo();
})


// blue background color on click 
cells.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.add('clicked')
        remakeBtn.setAttribute('disabled', '');
        remakeBtn.classList.add('disabled')
    })
});

counter = 0;




const Interval1 = setInterval(() => {
    if (r1c1.classList.contains('clicked') &&
        r1c2.classList.contains('clicked') &&
        r1c3.classList.contains('clicked') &&
        r1c4.classList.contains('clicked') &&
        r1c5.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval1)
    }
}, 100);

const Interval2 = setInterval(() => {
    if (r1c1.classList.contains('clicked') &&
        r2c1.classList.contains('clicked') &&
        r3c1.classList.contains('clicked') &&
        r4c1.classList.contains('clicked') &&
        r5c1.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval2)
    }
}, 100);

const Interval3 = setInterval(() => {
    if (r2c1.classList.contains('clicked') &&
        r2c2.classList.contains('clicked') &&
        r2c3.classList.contains('clicked') &&
        r2c4.classList.contains('clicked') &&
        r2c5.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval3)
    }
}, 100);
const Interval4 = setInterval(() => {
    if (r3c1.classList.contains('clicked') &&
        r3c2.classList.contains('clicked') &&
        r3c3.classList.contains('clicked') &&
        r3c4.classList.contains('clicked') &&
        r3c5.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval4)
    }
}, 100);
const Interval5 = setInterval(() => {
    if (r4c1.classList.contains('clicked') &&
        r4c2.classList.contains('clicked') &&
        r4c3.classList.contains('clicked') &&
        r4c4.classList.contains('clicked') &&
        r4c5.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval5)
    }
}, 100);
const Interval6 = setInterval(() => {
    if (r5c1.classList.contains('clicked') &&
        r5c2.classList.contains('clicked') &&
        r5c3.classList.contains('clicked') &&
        r5c4.classList.contains('clicked') &&
        r5c5.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval6)
    }
}, 100);
const Interval7 = setInterval(() => {
    if (r1c2.classList.contains('clicked') &&
        r2c2.classList.contains('clicked') &&
        r3c2.classList.contains('clicked') &&
        r4c2.classList.contains('clicked') &&
        r5c2.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval7)
    }
}, 100);
const Interval8 = setInterval(() => {
    if (r1c3.classList.contains('clicked') &&
        r2c3.classList.contains('clicked') &&
        r3c3.classList.contains('clicked') &&
        r4c3.classList.contains('clicked') &&
        r5c3.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval8)
    }
}, 100);
const Interval9 = setInterval(() => {
    if (r1c4.classList.contains('clicked') &&
        r2c4.classList.contains('clicked') &&
        r3c4.classList.contains('clicked') &&
        r4c4.classList.contains('clicked') &&
        r5c4.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval9)
    }
}, 100);
const Interval10 = setInterval(() => {
    if (r1c5.classList.contains('clicked') &&
        r2c5.classList.contains('clicked') &&
        r3c5.classList.contains('clicked') &&
        r4c5.classList.contains('clicked') &&
        r5c5.classList.contains('clicked')
        ) {
        counter = counter + 1;
        console.log(counter)
        clearInterval(Interval10)
    }
}, 100);



// function for win and marking letters of "BINGO"
function showWin(){
    if(counter == 1){
        b.classList.add('winClass')
    }
    if(counter == 2){
        i.classList.add('winClass')
    }
    if(counter == 3){
        n.classList.add('winClass')
    }
    if(counter == 4){
        g.classList.add('winClass')
    }
    if(counter == 5){
        o.classList.add('winClass')
        beep.play();
        result.style.scale = '1'
    }

}


let checkNos = document.getElementById('checkNumbers')
checkNos.addEventListener('click',()=>{
    result.style.scale= 0
    clearInterval(winInterval)
})


// initiate win function
const winInterval = setInterval(() => {
    showWin();
}, 100);