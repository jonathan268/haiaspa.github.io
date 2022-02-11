let cont=0;
 var nav = document.querySelector('nav');

 window.addEventListener('scroll', function () {
     if (window.pageYOffset > 70) {
         /*nav.classList.add('bg-dark', 'shadow');*/
         nav.setAttribute("style", "background-color:RGB(242,242,242) !important;");
         //nav.setAttribute("style", "background-color:;");
     } else {
         //nav.classList.remove('bg-dark', 'shadow');
         nav.removeAttribute("style", "background-color:RGB(242,242,242) !important;");



     }

 });







