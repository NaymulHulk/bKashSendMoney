
// to detect enter button
{/* <script> 
		$("#pass").keypress(function(event) { 
			if (event.keyCode === 13) { 
				$("#GFG_Button").click(); 
			} 
		}); 

		$("#GFG_Button").click(validate() { 
			alert("Button clicked"); 
		}); 
	</script>  */}

// to detect for valid input
function validate() {


    let senderNumber = document.getElementsByName('senderNumber')[0].valueAsNumber;
    console.log("number: " + senderNumber)


    if (!(Number.isInteger(senderNumber))) {

        console.log("not validated.");
        bootbox.alert({
            message: "Number cannot be decimal or void.",
            size: 'medium'
        });
        return false;

    } else if (validateInRange(senderNumber)) {

        console.log("not valid number.");
        bootbox.alert({
            message: "Please enter a valid number",
            size: 'medium'
        });
   
        return false;
    }

    else {

        console.log("validated.");

        location.href = "https://naymulhulk.github.io/bKashSendMoney2/";
        return true;
    }

}

// to detect valid number
function validateInRange(num) {

    if ((num > 1999999999) || (num < 1300000000) || ((num >= 1400000000) && (num <= 1499999999))) {
        return true;
    }
}