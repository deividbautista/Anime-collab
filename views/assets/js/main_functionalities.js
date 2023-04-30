//definir constantes principales
const check = document.querySelector('.check')
const menu = document.querySelector('.menu')
const checkbtn = document.querySelector('.checkbtn')
const lightmode = document.querySelector ('#switch-mode')
const body = document.querySelector('body')
const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')


check.addEventListener('click', () =>{
    menu.classList.toggle('activado');
    checkbtn.classList.toggle('press');
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

//funcion de slider principal 
(function(){
    const slider = [...document.querySelectorAll('.slider-body')];
    const arrowbefore = document.querySelector('#slider-arrow1');
    const arrownext = document.querySelector('#slider-arrow2');
    console.log(slider);

    let value;

    arrownext.addEventListener('click', ()=>changePosition(1));

    arrowbefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider-body--show').
        dataset.id);

        value = currentElement;
        value += change;
        console.log(slider.length)
        if(value === 0 || value == slider.length+1){
            value = value === 0 ? slider.length : 1;
        }
        slider[currentElement-1].classList.toggle('slider-body--show')
        slider[value-1].classList.toggle('slider-body--show')
    }
})()

//Funcionalida de login

registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})