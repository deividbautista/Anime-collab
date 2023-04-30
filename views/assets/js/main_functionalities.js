//definir constantes principales
const check = document.querySelector('.check')
const menu = document.querySelector('.menu')
const checkbtn = document.querySelector('.checkbtn')
const lightmode = document.querySelector ('#switch-mode')
const body = document.querySelector('body')
const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
const iconEye = document.querySelector('#icon-eye')
const password = document.querySelector('#password')
const eye = document.querySelector('#eye')
const iconEyer = document.querySelector('#icon-eyer')
const passwordr = document.querySelector('#passwordr')
const eyer = document.querySelector('#eyer')
const iconEyer2 = document.querySelector('#icon-eyer2')
const passwordr2 = document.querySelector('#passwordr2')
const eyer2 = document.querySelector('#eyer2')


iconEye.addEventListener('click', () =>{
    if (password.type === 'password'){
        password.type = 'text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    } else{
        password.type = 'password'
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
    }

})
iconEyer.addEventListener('click', () =>{
    if (passwordr.type === 'password'){
        passwordr.type = 'text'
        eyer.classList.remove('fa-eye-slash')
        eyer.classList.add('fa-eye')
    } else{
        passwordr.type = 'password'
        eyer.classList.remove('fa-eye')
        eyer.classList.add('fa-eye-slash')
    }
    if (passwordr2.type === 'password'){
        passwordr2.type = 'text'
        eyer2.classList.remove('fa-eye-slash')
        eyer2.classList.add('fa-eye')
    } else{
        passwordr2.type = 'password'
        eyer2.classList.remove('fa-eye')
        eyer2.classList.add('fa-eye-slash')
    }

})
iconEyer2.addEventListener('click', () =>{
    if (passwordr.type === 'password'){
        passwordr.type = 'text'
        eyer.classList.remove('fa-eye-slash')
        eyer.classList.add('fa-eye')
    } else{
        passwordr.type = 'password'
        eyer.classList.remove('fa-eye')
        eyer.classList.add('fa-eye-slash')
    }
    if (passwordr2.type === 'password'){
        passwordr2.type = 'text'
        eyer2.classList.remove('fa-eye-slash')
        eyer2.classList.add('fa-eye')
    } else{
        passwordr2.type = 'password'
        eyer2.classList.remove('fa-eye')
        eyer2.classList.add('fa-eye-slash')
    }

})


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