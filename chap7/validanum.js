function validate(phoneNumber) {
	if (phoneNumber.length > 8 || phoneNumber.length < 7) {
		return false;
	}
	
	var first = phoneNumber.substring(0,3);
	var second = phoneNumber.substring(phoneNumber.length - 4);
	
	if (isNaN(first) || isNaN(second)) {
		return false;
	}
	
	if (phoneNumber.length === 8) {
		return (phoneNumber.charAt(3) === "-");
	}
	
	return true;
}

function validateRegEx(phoneNumber) {
	return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

var tel1 = "123-4568";
var tel2 = "1234567";
var tel3 = "1234-567";
var tel4 = "12345678";
var tel5 = "123-456";

console.log(validate(tel1));
console.log(validate(tel2));
console.log(validate(tel3));
console.log(validate(tel4));
console.log(validate(tel5));
console.log(validateRegEx(tel1));
console.log(validateRegEx(tel2));
console.log(validateRegEx(tel3));
console.log(validateRegEx(tel4));
console.log(validateRegEx(tel5));