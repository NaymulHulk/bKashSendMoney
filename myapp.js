
// to detect enter button
var input = document.getElementById("senderNumber");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("buttonOne").click();
    }
});

// to detect for valid input
function validate() {


    let senderNumber = document.getElementsByName('senderNumber')[0].valueAsNumber;
    console.log("number: " + senderNumber)


    if (!(Number.isInteger(senderNumber))) {

        console.log("not validated.");
        

        alert("Sender Number cannot be decimal or void.");
        return false;

    } else if (validateInRange(senderNumber)) {

        console.log("not valid number.");

        alert("This is not a valid number");
        return false;
    }

    else {

        console.log("validated.");

        window.location = 'https://naymulhulk.github.io/bKashSendMoney2/'
        return true;
    }

}

// to detect valid number
function validateInRange(num) {

    if ((num > 1999999999) || (num < 1300000000) || ((num >= 1400000000) && (num <= 1499999999))) {
        return true;
    }
}