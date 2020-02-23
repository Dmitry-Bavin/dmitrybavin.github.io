window.onload = function(){

var menu = document.querySelector('#menu');
	menu.onclick = function(){
		var hide = document.querySelector('#myTopnav');
			if (hide.className === 'topnav'){
				hide.className += ' responsive';
			}
			else {
				hide.className = 'topnav';
			}
		}
	
}




