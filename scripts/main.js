let myImage = document.querySelector('img');

/*Handler de click en la imagen*/
myImage.onclick = function() {
	/*mySrc = path de la imagen*/
	let mySrc = myImage.getAttribute('src');
	/*Si la imagen es la de firefox, cambio
	a la otra*/
	if (mySrc === 'images/mozilla.jpg') {
		myImage.setAttribute('src', 'images/firefox2.jpg');
	} else {
		myImage.setAttribute('src', 'images/mozilla.jpg');
	}
}


/*This takes references to the new button 
and the heading, storing each inside variables:*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	/*pide usuario ingresar data*/
	let myName = prompt('Please enter your name.');
	if(!myName){
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		/*myHeading tiene a h1*/
		myHeading.textContent = 'Mozilla is cool, ' + myName;		
	}

}

/*Add the if ... else block (below). 
We could call this initialization code, 
as it structures the app when it first loads.*/

/*Chequeamos si no se cargo un usuario antes
caso contrario lo obtenemos y lo mostramos*/
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}