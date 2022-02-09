let cont=0;
 var nav = document.querySelector('nav');

 window.addEventListener('scroll', function () {
     if (window.pageYOffset > 70) {
         /*nav.classList.add('bg-dark', 'shadow');*/
         nav.setAttribute("style", "background-color:RGB(242,242,242);");
         //nav.setAttribute("style", "background-color:;");
     } else {
         nav.classList.remove('bg-dark', 'shadow');
         nav.removeAttribute("style", "background-color:RGB(242,242,242);");


     }

 });


function changeColorNav(){
    let click=0;
    nav.setAttribute("style", "background-color:RGB(242,242,242);");
    let str = '';

        cont=cont+1;
        console.log(click+1);
      
}






/*let next = document.getElementsByClassName("carousel-control-next");
let container= document.getElementsByClassName("carousel-caption");
container.style.visibility="hidden";
*/