// let timerEl=document.getElementById("timer");
let timerEl = document.getElementById("stopwatch");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let resultEl = document.getElementById("result");
let spinner = document.getElementById("spinner");
// let countdown=0;
let count = 0;
// countdown.classList.add("pp");
let intervalid = setInterval(function() {
    count = count + 1;
    timerEl.textContent = count;
}, 500);
resetBtnEl.onclick = function(event) {
    count = 0;
    quoteInputEl.value = "";
    spinner.classList.remove("d-none");
    // event.preventDefault();
    let options = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayEl.textContent = jsonData.content;
        })
}
submitBtnEl.onclick = function(event) {
    spinner.classList.add("d-none");
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        clearInterval(intervalid);
        resultEl.textContent = "You typed in" + count + "seconds";
    } else {
        resultEl.textContent = "you typed incorrect sentence";
    }
}