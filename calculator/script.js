var numbers = document.querySelectorAll('.number'),
	  operations = document.querySelectorAll('.operator'),
	  clears = document.querySelectorAll('.clear-btn'),
	  display = document.getElementById('display'),
	  sqrtBtn = document.getElementById('sqrt'),
	  pmBtn = document.getElementById('pm');

	  let memCurNum = 0;
	  let memOper = '';
	  let newNum = false;


for (let i=0; i<numbers.length; i++) {
	let number = numbers[i];
	number.addEventListener('click', function (e) {
    numPress(e.target.innerText); } );
}

for (let i=0; i<clears.length; i++) {
	let clear = clears[i];
	clear.addEventListener('click', function (e) {
		clearBtn(e.target.textContent);
	});
}

for (let i=0; i<operations.length; i++) {
	let operation = operations[i];
	operation.addEventListener('click', function (e) {
		operationBtn(e.target.textContent);
	});
}

sqrtBtn.addEventListener('click', sqrt);
pmBtn.addEventListener('click', plusminus);


function numPress(number) {
if (number === '.' && newNum === false && display.value.includes('.')) return;
if (display.value === 'Ошибка') newNum = true;
	if (newNum) {
		display.value = number;
		newNum = false;
	} else {
	if (display.value === '0'){
		display.value = number;
	} else {
	display.value += number;
	}
  }
}



 function clearBtn(id) {
 	if (id === 'c') {
 		display.value = '0';
 		memCurNum = '0';
 		newNum = true;
 		memOper = '';
 	} else if (id === 'ce') {
 		display.value = '0';
 		newNum = true;
 	}
 }

 function operationBtn (op) {
 	let localOpMem = display.value;
 	if (newNum && memOper !== '=') {
 		display.value = memCurNum;
 	} else {
    newNum = true;
    if (memOper === '+') {
      memCurNum += +localOpMem;
    } else if (memOper === '-') {
      memCurNum -= +localOpMem;
    } else if (memOper === '*') {
      memCurNum *= +localOpMem;
    } else if (memOper === '/') {
      memCurNum /= +localOpMem;
    } else if (memOper === 'x') {
    	memCurNum = Math.pow(+memCurNum, +localOpMem);
    } else {
      memCurNum = +localOpMem;
    }
    display.value = +memCurNum.toFixed(12);
    memOper = op;
  }
}

function sqrt(argument) {
	memCurNum = display.value;
  if (memCurNum) {
      memCurNum = Math.sqrt(memCurNum);
      if (memCurNum > 0) {
      	display.value = memCurNum;
      } else {
      	display.value = 'Ошибка'
  }
      newNum = false;
  } else {
  memCurNum = Math.sqrt(+memCurNum);
        if (memCurNum > 0) {
      	display.value = memCurNum;
      } else {
      	display.value = 'Ошибка'
  }
      newNum = false; }
}

function plusminus(argument) {
display.value = parseFloat('-' + display.value);
}
