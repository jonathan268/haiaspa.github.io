
 var nav = document.querySelector('nav');

 window.addEventListener('scroll', function () {
     if (window.pageYOffset > 300) {
         /*nav.classList.add('bg-dark', 'shadow');*/
         nav.setAttribute("style", "background-color:RGB(242,242,242);");
     } else {
         nav.classList.remove('bg-dark', 'shadow');
         nav.removeAttribute("style", "background-color:RGB(242,242,242);");


     }

 });
/*let next = document.getElementsByClassName("carousel-control-next");
let container= document.getElementsByClassName("carousel-caption");
container.style.visibility="hidden";
*/