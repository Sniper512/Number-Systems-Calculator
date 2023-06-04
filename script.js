function getter() {
	var element = document.getElementById("options");
	var first_type = Number(element.options[element.selectedIndex].value);
	element = document.getElementById("options2");
	var second_type = Number(element.options[element.selectedIndex].value);
	var numInput = document.getElementById("num_input").value;
	var num = Number(numInput);

	// Check if the input number is valid according to the first type
	if (isNaN(num)) {
		alert("Invalid number input!");
		return null;
	}

	if (first_type === 10 && !Number.isInteger(num)) {
		alert("Invalid number input for decimal!");
		return null;
	}

	if (first_type === 2 && num % 10 !== 0 && num % 10 !== 1) {
		alert("Invalid number input for binary!");
		return null;
	}
	return [first_type, second_type, num];
}

function pointPartForBinary(num) {
	var result = "";
	arr = [];
	arr[0] = ".";
	var limit = 0;
	while (num != 0.0 && num != 1.0 && !arr.includes(num) && limit < 20) {
		arr.push(num);
		num *= 2;
		result += Math.floor(num);
		num = num - Math.floor(num);
		limit++;
	}
	return result;
}
function ZeroCheck(arr) {
	var result = 1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != 0) {
			return 0;
		}
	}
	return 1;
}
function decimalToBinary(num) {
	var arr = [];

	if (Number.isInteger(num)) {
		while (num > 0) {
			arr.unshift(num % 2);
			num = Math.floor(num / 2);
		}
	} else {
		var integerPart = Math.floor(num);
		var fractionalPart = num - integerPart;

		while (integerPart > 0) {
			arr.unshift(integerPart % 2);
			integerPart = Math.floor(integerPart / 2);
		}

		arr.push("."); // Add the decimal point

		var limit = 20; // Limit the number of fractional digits
		while (fractionalPart > 0 && limit > 0) {
			fractionalPart *= 2;
			arr.push(Math.floor(fractionalPart));
			fractionalPart -= Math.floor(fractionalPart);
			limit--;
		}
	}

	return arr;
}

function binaryToDecimal(binary) {
	let integerPart = binary.split(".")[0];
	let fractionalPart = binary.split(".")[1] || "";
	let fractionalDecimal = 0;
	let position = integerPart.length - 1;
	var integerDecimal = 0;
	for (let i = 0; i < integerPart.length; i++) {
		integerDecimal += integerPart[i] * Math.pow(2, position);
		position--;
	}
	if (fractionalPart.length > 0) {
		position = -1;
		for (let i = 0; i < fractionalPart.length; i++) {
			fractionalDecimal += fractionalPart[i] * Math.pow(2, position);
			position--;
		}
	}
	var arr = new Array();
	arr.push(integerDecimal + fractionalDecimal);
	return arr;
}

function decimalToOctal(decimal) {
	let integerPart = Math.floor(decimal);
	let fractionalPart = decimal - integerPart;
	let integerOctal = "";
	let fractionalOctal = "";

	while (integerPart > 0) {
		integerOctal = (integerPart % 8).toString() + integerOctal;
		integerPart = Math.floor(integerPart / 8);
	}
	if (fractionalPart > 0) {
		fractionalOctal = ".";
		let precision = 6;
		while (precision > 0 && fractionalPart > 0) {
			fractionalPart *= 8;
			let digit = Math.floor(fractionalPart);
			fractionalOctal += digit.toString();
			fractionalPart -= digit;
			precision--;
		}
	}
	var arr = new Array();
	arr.push(integerOctal + fractionalOctal);
	return arr;
}

function octalToDecimal(octal) {
	let integerPart = octal.split(".")[0];
	let fractionalPart = octal.split(".")[1] || "";
	let integerDecimal = 0;
	let fractionalDecimal = 0;
	let position = integerPart.length - 1;
	for (let i = 0; i < integerPart.length; i++) {
		integerDecimal += integerPart[i] * Math.pow(8, position);
		position--;
	}
	if (fractionalPart.length > 0) {
		position = -1;
		for (let i = 0; i < fractionalPart.length; i++) {
			fractionalDecimal += fractionalPart[i] * Math.pow(8, position);
			position--;
		}
	}
	var arr = new Array();
	arr.push(integerDecimal + fractionalDecimal);
	return arr;
}
function hexToDecimal(hex) {
	let integerPart = hex.split(".")[0];
	let fractionalPart = hex.split(".")[1] || "";
	let integerDecimal = 0;
	let fractionalDecimal = 0;
	let position = integerPart.length - 1;
	for (let i = 0; i < integerPart.length; i++) {
		let digitValue = parseInt(integerPart[i], 16);
		integerDecimal += digitValue * Math.pow(16, position);
		position--;
	}
	if (fractionalPart.length > 0) {
		position = -1;
		for (let i = 0; i < fractionalPart.length; i++) {
			let digitValue = parseInt(fractionalPart[i], 16);
			fractionalDecimal += digitValue * Math.pow(16, position);
			position--;
		}
	}
	var arr = new Array();
	arr.push(integerDecimal + fractionalDecimal);
	return arr;
}

function decimalToHex(decimal) {
	let integerPart = Math.floor(decimal);
	let fractionalPart = decimal - integerPart;
	let integerHexa = "";
	let fractionalHexa = "";

	while (integerPart > 0) {
		let digitValue = integerPart % 16;
		if (digitValue >= 10) {
			integerHexa = String.fromCharCode(65 + digitValue - 10) + integerHexa;
		} else {
			integerHexa = digitValue.toString() + integerHexa;
		}
		integerPart = Math.floor(integerPart / 16);
	}
	if (fractionalPart > 0) {
		fractionalHexa = ".";
		let precision = 20;
		while (precision > 0 && fractionalPart > 0) {
			fractionalPart *= 16;
			let digitValue = Math.floor(fractionalPart);
			if (digitValue >= 10) {
				fractionalHexa += String.fromCharCode(65 + digitValue - 10);
			} else {
				fractionalHexa += digitValue.toString();
			}
			fractionalPart -= digitValue;
			precision--;
		}
		if (precision == 0) {
			fractionalHexa += "A";
		}
	}
	var arr = new Array();
	arr.push(integerHexa + fractionalHexa);
	return arr;
}

function printResult(result_arr, type) {
	var result = "";
	document.getElementById("bulb").src = "pic_bulbon.gif";
	if (Array.isArray(result_arr)) {
		result = result_arr.join("");
	} else {
		result = result_arr;
	}

	if (type === "binary") {
		var size = result.length;
		if (size < 4) {
			while (size < 4) {
				result = "0" + result;
				size++;
			}
		}
	}

	if (result.length > 15) {
		document.getElementById("answer").style.paddingRight = "0rem";
	}

	document.getElementById("answer").innerHTML = result;
}

function computer() {
	var first_type = 0;
	var second_type = 0;
	var number = 0;
	var arr = getter();
	first_type = arr[0];
	second_type = arr[1];
	number = arr[2];
	var result_arr = [];
	var type = "";

	if (first_type === second_type) {
		printResult(number, "direct");
		return;
	}

	if (first_type == 10 && second_type == 2) {
		result_arr = decimalToBinary(number);
		type = "binary";
	} else if (first_type == 2 && second_type == 10) {
		result_arr = binaryToDecimal(number.toString());
		type = "decimal";
	} else if (first_type == 10 && second_type == 8) {
		result_arr = decimalToOctal(number);
		type = "octal";
	} else if (first_type == 8 && second_type == 10) {
		result_arr = octalToDecimal(number.toString());
		type = "octal";
	} else if (first_type == 10 && second_type == 16) {
		result_arr = decimalToHex(number);
		type = "hexa";
	} else if (first_type == 16 && second_type == 10) {
		result_arr = hexToDecimal(number.toString());
		type = "hexa";
	} else if (first_type == 2 && second_type == 8) {
		var decimal = binaryToDecimal(number.toString())[0];
		result_arr = decimalToOctal(decimal);
		type = "octal";
	} else if (first_type == 2 && second_type == 16) {
		var decimal = binaryToDecimal(number.toString())[0];
		result_arr = decimalToHex(decimal);
		type = "hex";
	} else if (first_type == 8 && second_type == 2) {
		var decimal = octalToDecimal(number.toString())[0];
		result_arr = decimalToBinary(decimal);
		type = "binary";
	} else if (first_type == 8 && second_type == 16) {
		var decimal = octalToDecimal(number.toString())[0];
		result_arr = decimalToHex(decimal);
		type = "hex";
	} else if (first_type == 16 && second_type == 2) {
		var decimal = hexToDecimal(number.toString())[0];
		result_arr = decimalToBinary(decimal);
		type = "binary";
	} else if (first_type == 16 && second_type == 8) {
		var decimal = hexToDecimal(number.toString())[0];
		result_arr = decimalToOctal(decimal);
		type = "octal";
	}

	printResult(result_arr, type);
}
