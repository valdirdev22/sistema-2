
(function ($) {
  
  "use strict";

    // MENU
    $('#sidebarMenu .nav-link').on('click',function(){
      $("#sidebarMenu").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);
  
  
    const form = document.querySelector('#formulario');
    form.addEventListener('submit', function(e) {
     
    
    e.preventDefault();
    const inputValorA1 = e.target.querySelector('#valorA1');
    const inputValorB1 = e.target.querySelector('#valorB1');
    const inputValorC1 = e.target.querySelector('#valorC1');
    
    const valorA1 = Number(inputValorA1.value);
    const valorB1 = Number(inputValorB1.value);
    const valorC1 = Number(inputValorC1.value);
    
    
    function getTeste2(valorA1){
        /*if(valorA1 > 0){
            const concavidade = "Concavidade da parabola para cima";
            return concavidade;    
          } if(valorA1 < 0){
            const concavidade = "Concavidade da parabola  para baixo";
            return concavidade; 
        } */
    } 
    
    
    if((isNaN(valorA1) == true)){
        setResultado_1('Valor de A inválido', false);
        return
    } 
    
    
    if(inputValorA1.value == 0){
        setResultado_1('Valor de A deve ser preenchido e deve ser diferente de zero', false);
        return
    } 
    
    
    if(isNaN(valorB1) == true) {
        setResultado_1('Valor de B inválido', false);
        return
    }
    
    if(isNaN(valorC1) == true) {
        setResultado_1('Valor de C inválido', false);
        return
    }
    
    
    if(inputValorB1.value == "") {
        setResultado_1('Valor de B está vazio', false);
        return
    }
    
    if(inputValorC1.value == "") {
        setResultado_1('Valor de C está vazio', false);
        return
    }
    
    const resut1 = getresu_1(valorA1, valorB1, valorC1);  
    const resut2 = getresu_2(valorA1, valorB1, valorC1);
    const concavidade = getTeste2(valorA1);  
    const msg1 = `${concavidade}<br> O valor de X1 = ${resut1}<br>O valor de X2 = ${resut2}.`; 
    setResultado_1(msg1, true);
    console.log(resut1);
    console.log(resut2);
   /* console.log(concavidade); */
});
     
    
    function getresu_1(valorA1, valorB1, valorC1){
       /* const delta = (valory + valorx + valorz);
        if (delta < 0){
            
            alert(" O valor do delta é negativo,logo, a equação não tem solução no conjunto dos reais.")
            msg_2.setResultado_1 = ''; */

            const xre1 = valorA1 + valorB1 + valorC1;
            const resut1 = xre1 ;   
            return resut1.toFixed(2);
    }
    
    
    function getresu_2(valorA1, valorB1, valorC1){
        const xre2 = 2*(valorA1 + valorB1 + valorC1);
        const resut2 = xre2 ;   
        return resut2.toFixed(2);
    }
    
     
    function criarP () {
        const p = document.createElement(p);
       return p;
       }
    
     
    function setResultado_1(msg1, isValid){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML ='';
     
        const p = criarP();
     
        if(isValid){
            p.classList.add('paragrafo-resultado');
         } else{
             p.classList.add('bad');
        }
       
     p.innerHTML = msg1;
     resultado.appendChild(p);
       
    }
     
    function criarP(){
        const p = document.createElement('p');
        return p;
     
    }
   

  

