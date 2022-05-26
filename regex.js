
function validate()
{
	var regex = /^[A-Z]{2}[-][0-9]{1,2}[-][A-Z]{1,2}[-][0-9]{3,4}$/
var vehicleno = document.getElementById("vehicleno").value; 
var dob = document.getElementById("DOB").value;
var dor = document.getElementById("DOR").value;
var today = new Date();
var age = today.getFullYear() - dob.getFullYear();
 var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
if(regex.test(vehicleno))
{
	alert("Valid Credentials");
}
else if( age <18)
{
	alert("Age needs to be above 18!");
}
else
alert("Invalid Vehicle Number!");
}