

function validate() {


    let senderNumber = document.getElementsByName('senderNumber')[0].valueAsNumber;
    console.log("number: " + senderNumber)


    if (!(Number.isInteger(senderNumber))) {

        console.log("not validated.");

        alert("Sender Number cannot be decimal");

    } else if (validateInRange(senderNumber)) {

        console.log("not valid number.");

        alert("This is not a valid number");
    }

    else {
        console.log("validated.");
        window.location = 'https://naymulhulk.github.io/bKashSendMoney2/'
    }

}

function validateInRange(num) {
    if ((num > 1999999999) || (num < 1300000000) || ((num >= 1400000000) && (num <= 1499999999))) {
        return true;
    }
}