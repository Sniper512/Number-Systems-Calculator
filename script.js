function getter() {
  var element = document.getElementById("options");
  var first_type = Number(element.options[element.selectedIndex].value);
  element = document.getElementById("options2");
  var second_type = Number(element.options[element.selectedIndex].value);
  var num = Number(document.getElementById("num_input").value);
  return [first_type, second_type, num];
}
function pointPartForBinary(num) {
  var result = "";
  arr = []
  arr[0] = ".";
  var limit = 0;
  while (num != 0.0 && num != 1.00 && !arr.includes(num) && limit < 20) {
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
  var arr = new Array();
  if (Number.isInteger(num)) {
    while (num > 0) {
      if (num % 2 == 0) {
        arr.push(0);
      } else if (num % 2 == 1) {
        arr.push(1);
        num--;
      }
      num = num / 2;
    }
    arr.reverse();
  }
  else {
    var integerPart = Math.floor(num);
    var point = num - integerPart;
    var real_arr = new Array();
    real_arr = binaryToDecimal(integerPart);
    point_arr = pointPartForBinary(point);
    if (ZeroCheck(real_arr)) {
      new_arr = new Array();
      new_arr[0] = '0';
      new_arr[1] = '.';
      arr = new_arr.concat(point_arr);
    }
    else {
      new_arr = new Array();
      temp = new Array();
      temp = new_arr.concat(real_arr);
      temp.push('.');
      arr = temp.concat(point_arr);
    }
  }
  return arr;
}
function ElementsDistributer(num) {
  var arr = [];
  var number = Number(num);
  while (number > 0) {
    arr.push(number % 10);
    number = Math.floor(number / 10);
  }
  arr.reverse();
  return arr;
}

function pointPartforDecimal(num) {
  var power = -1;
  var result =[];
  result[0] = 0;
  var num_arr = ElementsDistributer(num);
  for (var i =0; i<num_arr.length; i++) {
    result[0]+= Math.pow(2, power) * num_arr[i];
    power--;
  }
  return result;
}
function binaryToDecimal(number) {
  var num = Number(number);
  if (Number.isInteger(num)) {
    var power = 0;
    var result = [];
    result[0] = 0;
    var num_arr = ElementsDistributer(num);
    for (var i = num_arr.length - 1; i >= 0; i--) {
      result[0] += Math.pow(2, power) * num_arr[i];
      power++;
    }
    return result;
  }
  else {
    var integerPart = Math.floor(num);
    var point = num - integerPart;
    var real_arr = new Array();
    var point_arr= new Array();
    real_arr = binaryToDecimal(integerPart);
    point_arr = pointPartforDecimal(point);
   // real_arr.concat(point_arr);
    return point_arr;
  }
}
function printResult(result_arr, type) {

  var result = "";
  if (type == "binary") {
    var size = result_arr.length;
    if (size < 4) {
      while (size < 4) {
        result += "0";
        size++;
      }
    }
  }

  for (var i = 0; i < result_arr.length; i++) {
    result += result_arr[i];
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
  if (first_type == 10 && second_type == 2) {
    result_arr = decimalToBinary(number);
    type = "binary";
  }
  else if (first_type == 2 && second_type == 10) {
    result_arr = binaryToDecimal(number);
    type = "decimal";
  }
  printResult(result_arr, type);

}