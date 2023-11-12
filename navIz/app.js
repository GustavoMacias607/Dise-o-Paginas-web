
let rBtnHer = document.querySelector('#rBtnHerramientas')
let BtnHer = document.querySelector('#btnHerramientas')
let rAccesos = document.querySelector('#rAccesos')
let Accesos = document.querySelector('#accesos')
let rBtnEnviar = document.querySelector('#rBtnEnviar')
let BtnEnviar = document.querySelector('#btnEnviar')
let principal = document.querySelector('#principal')
let cont = document.querySelector('#cont')
let rcont = document.querySelector('#rcont')

rBtnHer.addEventListener('click', () => {
    rcont.classList.add('hidden');
    cont.classList.remove('hidden');
    rAccesos.classList.add('hidden');
    rBtnEnviar.classList.add('hidden');
    Accesos.classList.remove('hidden');
    BtnEnviar.classList.remove('hidden');
    principal.classList.remove('w-16');
    principal.classList.add('w-60')
})

BtnHer.addEventListener('click', () => {
    cont.classList.add('hidden');
    rcont.classList.remove('hidden');
    rAccesos.classList.remove('hidden');
    rBtnEnviar.classList.remove('hidden');
    Accesos.classList.add('hidden');
    BtnEnviar.classList.add('hidden');
    principal.classList.add('w-16');
    principal.classList.remove('w-60')
})
