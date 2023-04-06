
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
    const inputValorA = e.target.querySelector('#valorA');
    const inputValorB = e.target.querySelector('#valorB');
    const inputValorC = e.target.querySelector('#valorC');
    
    const valorA = Number(inputValorA.value);
    const valorB = Number(inputValorB.value);
    const valorC = Number(inputValorC.value);
    
    
    function getTeste2(valorA){
        /*if(valorx > 0){
            const concavidade = "Concavidade da parabola para cima";
            return concavidade;    
          } if(valorx < 0){
            const concavidade = "Concavidade da parabola  para baixo";
            return concavidade; 
        }*/
    }
    
    
    if((isNaN(valorA) == true)){
        setResultado_1('Valor de A inválido', false);
        return
    } 
    
    
    if(inputValorA.value == 0){
        setResultado_1('Valor de A deve ser preenchido e deve ser diferente de zero', false);
        return
    } 
    
    
    if(isNaN(valorB) == true) {
        setResultado_1('Valor de B inválido', false);
        return
    }
    
    if(isNaN(valorC) == true) {
        setResultado_1('Valor de C inválido', false);
        return
    }
    
    
    if(inputValorB.value == "") {
        setResultado_1('Valor de B está vazio', false);
        return
    }
    
    if(inputValorC.value == "") {
        setResultado_1('Valor de C está vazio', false);
        return
    }
    
    const resut1 = getresu_1(valorA, valorB, valorC);  
    const resut2 = getresu_2(valorA, valorB, valorC);
    const concavidade = getTeste2(valorA);  
    const msg2 = `${concavidade}<br> O valor de X1 = ${resut1}<br>O valor de X2 = ${resut2}.`; 
    setResultado_1(msg2, true);
    console.log(resut1);
    console.log(resut2);
   /* console.log(concavidade); */
});
     
    
    function getresu_1(valorA, valorB, valorC){
       /* const delta = (valory + valorx + valorz);
        if (delta < 0){
            
            alert(" O valor do delta é negativo,logo, a equação não tem solução no conjunto dos reais.")
            msg_2.setResultado_1 = ''; */

            const xre1 = valorA + valorB + valorC;
            const resut1 = xre1 ;   
            return resut1.toFixed(2);
    }
    
    
    function getresu_2(valorA, valorB, valorC){
        const xre2 = valorA + valorB - valorC;
        const resut2 = xre2 ;   
        return resut2.toFixed(2);
    }
    
     
    function criarP () {
        const p = document.createElement(p);
       return p;
       }
    
     
    function setResultado_1(msg, isValid){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML ='';
     
        const p = criarP();
     
        if(isValid){
            p.classList.add('paragrafo-resultado');
         } else{
             p.classList.add('bad');
        }
       
     p.innerHTML = msg;
     resultado.appendChild(p);
       
    }
     
    function criarP(){
        const p = document.createElement('p');
        return p;
     
    }
   

  

