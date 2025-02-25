function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark> at an interest rate of <mark>" + rate + "%</mark>, you will receive an amount of <mark>" + interest + "</mark> in the year <mark>" + year + "</mark>.";
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
