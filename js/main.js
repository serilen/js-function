;(function(){
	"use strict";


//Написать функцию которая выводит случайное число от 1 до 6 (имитация игральных костей)
//------------------------------------------------------------------------
	/*function rolldice() {
	let firstGameCube = Math.floor(Math.random() * 6) + 1;
	let secondGameCube = Math.floor(Math.random() * 6) + 1;
	alert ( "Числа на кубиках " + firstGameCube +
	" и " + secondGameCube );
}
rolldice();
rolldice();
rolldice();*/

//Усовершенствовать функцию случайного числа: вывести случайное число между двумя введенными пользователем!
//--------------------------------------------------------------------------

/*function showRandom(numberFirst, numberSecond) {
	numberFirst = prompt("Введите первое число");

	if (isNaN(+numberFirst)) {
		alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
	} else if (numberFirst.trim() === '') {
		alert("Значение не может быть пустым!");
	} else if (numberFirst === null) {
		alert("До встречи снова!");
	} else {
		let numberSecond = prompt("Введите второе число");

		if (isNaN(+numberSecond)) {
			alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
		} else if (numberFirst >= numberSecond) {
			alert("Значение второго числа должно быть больше первого!");
		} else if (numberSecond.trim() === '') {
			alert("Значение не может быть пустым!");
		} else if (numberSecond === null) {
			alert("До встречи снова!");
		} else {
			alert (Math.floor(Math.random() * (+numberSecond - +numberFirst + 1) + +numberFirst));
		}
	}
}
showRandom();*/

//Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
//ucFirst("вася") == "Вася";
//ucFirst("") == ""; // нет ошибок при пустой строке
//P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().
//--------------------------------------------------------------------------

/*function ucFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
alert(ucFirst("вася"));
alert(ucFirst("петя"));
alert(ucFirst(""));*/



//Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
//Пример вызовов:
//min(2, 5) == 2
//min(3, -1) == -1
//min(1, 1) == 1
//Повторять цикл, пока ввод неверен:
//--------------------------------------------------------------------------

/*function min(a, b) {
	if (a < b) {
		return a;
	} else return b;
}
alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));*/




//Напишите функцию в которой цикл предлагает prompt ввести число, большее заданного аргумента функции (например 100). Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC). Предполагается, что посетитель вводит только числа. Предусмотреть обработку нечисловых строк в этой задаче
//-----------------------------------------------------------------------------

/*let a;
function leadOutNumber(a, b) {
	while (true) {
		let a = prompt('Введите число больше 100', '');
		if(a > b || a === null) break;
	}
}

leadOutNumber(a, 100);*/



//Вывести простые числа.
//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток. Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.

/*let numMax = prompt("Введите число границу интервала");
function isPrime(numMax) {
    if (isNaN(numMax) || numMax % 1 !== 0) {
    	return false;
    }
    numMax = Math.abs(numMax); //*negative values can be primes
    if (numMax === 0 || numMax === 1) {
    	return false;
    }
    let maxFactorNum = Math.sqrt(numMax);
    for (let i = 2; i <= maxFactorNum; i++) {
    	if (numMax % i === 0) {
    		return false;
    	}
    }
    return true;
 }

let primaryNumber = [];
for (let i = 2; i <= numMax; i++) {
  if(isPrime(i)) 
    primaryNumber.push(i);
}
// вывести в консоль простые числа от 2 до 100
console.log(primaryNumber);*/


})();

