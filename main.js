function getpargragh1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("div1_" + i).value);
    }
    document.getElementById("p1").innerHTML = inputs.join(". ");
}

function getpargragh2() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("div2_" + i).value);
    }
    document.getElementById("p2").innerHTML = inputs.join(". ");
}
