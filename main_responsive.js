const check = document.querySelector('.check')
const menu = document.querySelector('.menu')
const checkbtn = document.querySelector('.checkbtn')
const lightmode = document.querySelector ('#switch-mode')
const body = document.querySelector('body')


check.addEventListener('click', () =>{
    menu.classList.toggle('activado');
    checkbtn.classList.toggle('ñe');
})

lightmode.addEventListener('click', e =>{
    body.classList.toggle('lightmode');
    lightmode.classList.toggle('active');

    // Guardamos el modo en localstorage.
	if(body.classList.contains('lightmode')){
		localStorage.setItem('light-mode', 'true');
	} else {
		localStorage.setItem('light-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('light-mode') === 'true'){
	body.classList.add('lightmode');
    lightmode.classList.remove('active');
} else {
	body.classList.remove('lightmode');
    lightmode.classList.add('active');
}


