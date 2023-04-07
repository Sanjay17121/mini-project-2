function increase() {
	let num=Number(document.getElementById('countdisplay').value);
	num += 1;
	document.getElementById('countdisplay').value= num;
}

function decrease() {
	let num=Number(document.getElementById('countdisplay').value);
	num -= 1;
	document.getElementById('countdisplay').value= num;
}

function reset() {
	let num=Number(document.getElementById('countdisplay').value);
	num = 0;
	document.getElementById('countdisplay').value= num;
}