const check = document.querySelector('.check')
const menu = document.querySelector('.menu')
const checkbtn = document.querySelector('.checkbtn')
const lightmode = document.querySelector ('#switch-mode')
const body = document.querySelector('body')
load();


check.addEventListener('click', () =>{
    menu.classList.toggle('activado');
    checkbtn.classList.toggle('ñe');
})

lightmode.addEventListener('click', e =>{
    body.classList.toggle('lightmode');
    store(body.classList.contains('lightmode'));
})

function load(){
    const lightmode = localStorage.getItem('lightmode')
    if (!lightmode){
        store('flase');
    }else if (lightmode== 'true'){
        body.classList.add('lightmode');
    }
}
function store(value){
    localStorage.setItem('lightmode', value);
}


