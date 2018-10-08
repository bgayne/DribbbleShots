var input = document.getElementById("booking-input");

var inputText = "";


input.addEventListener("focus", function(e) {
    input.value = inputText;
});

input.addEventListener("focusout", function(e) {
    inputText = input.value;
    input.value = "";
})