/*abrir barra lateral mobile*/
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu2')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu') 
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu') 
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu') 
})

/*configuraçao coockes */
var msgCoockes = document.getElementById ('coockes-msg')

function aceito(){
    localStorage.lgtd = 'sim'
    msgCoockes.classList.remove('mostrar')
}

if(localStorage.lgtd == 'sim'){
    msgCoockes.classList.remove('mostrar') 
}else{
    msgCoockes.classList.add('mostrar')
}
window.revelar = ScrollReveal({ reset: true })


/*slider animaçao */

/*var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true
setInterval(()=>{
    proximaimg()
}, 5000)

function proximaimg(){
 cont++

 if(cont > 3){
    cont = 1
 }
 document.getElementById('radio'+cont).checked = true
}*/




const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    // Velocidade da contagem
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 50); // velocidade do loop
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
