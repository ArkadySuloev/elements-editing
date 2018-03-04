/*setTimeout(function () {
	alert("b")
} , 3000)
*/
/*var a = function () {
	alert("test")
}*/
//setTimeout(a, 1000)

var textbox = document.getElementById('test')

//textbox.innerText = 123

//var a = textbox.innerText

var a = function () {
	textbox.innerText = "Приветики мирчик";
	textbox.style.height = "80px";
	textbox.style.backgroundColor = "cyan";
	textbox.style.color = "blue"
}
//ЗАДЕРЖКА
//setTimeout(a, 2000);

//ПОВТОРЕНИЕ
/*setInterval(function () {
	textbox.classList.toggle('brother')
}, 600)
*/
/*textbox.onclick = function () {
	var newNum = parseInt(textbox.innerText) + 1

	textbox.innerText = newNum
}
*/
setInterval(function () {
	var newNum = parseInt(textbox.innerText) + 1

	textbox.innerText = newNum
}, 600)