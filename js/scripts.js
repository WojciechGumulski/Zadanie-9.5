var classButton = document.getElementsByClassName('button');

console.log(classButton);

for (var i = 0 ; i < classButton.length ; i++) {

	alert(classButton[i].innerText);
}
