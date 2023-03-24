let btn = document.getElementById('btn')
let mainContainer = document.getElementById('mainContainer')

    function myFunction() {
        var x1 = Number(document.getElementById("x1").value);
        var x2 = Number(document.getElementById("x2").value);
        var x3 = Number(document.getElementById("x3").value);
        var y1 = Number(document.getElementById("y1").value);
        var y2 = Number(document.getElementById("y2").value);
        var y3 = Number(document.getElementById("y3").value);
        var z1 = Number(document.getElementById("z1").value);
        var z2 = Number(document.getElementById("z2").value);
        var z3 = Number(document.getElementById("z3").value);
        let res = document.getElementById('resul')
        res.style.display = 'block'
        document.getElementById("result").innerHTML = x1*((y2*z3) - (y3*z2)) - x2*((y1*z3) - (y3*z1)) + x3*((y1*z2) - (y2*z1));
}