/*
let cont = 0;
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 70) {
        //nav.classList.add('bg-dark', 'shadow');
        nav.setAttribute("style", "background-color:RGB(242,242,242) !important;");
        //nav.setAttribute("style", "background-color:;");
    } else {
        //nav.classList.remove('bg-dark', 'shadow');
        nav.removeAttribute("style", "background-color:RGB(242,242,242) !important;");



    }

});
*/




function show(input) {
    var n = ['one', 'two'];
    n.forEach((element => {
        if (element != input && input != 'all') {
            
            var num = document.getElementById(element);
            num.setAttribute("style", "display:none;");
            
            num.classList.remove("animation-portf"); 
            void element.offsetWidth;
            num.classList.remove("animation-portf"); 



        } else {

            var num = document.getElementById(element);
            num.setAttribute("style", "display:block;");

            num.classList.remove("animation-portf"); 
            void element.offsetWidth;
            num.classList.remove("animation-portf"); 
         
          
        }
    }));


}


const portfolio = document.querySelector('.portfolio-gallery'),
      portfolioItems = portfolio.querySelectorAll('.portfolio-item'),
      portfolioCats = document.querySelectorAll('.portfolio-cats > li');
let parentWidth = portfolio.offsetWidth,
    windowWidth = window.innerWidth;

portfolioCats.forEach(cat => {
    cat.addEventListener('pointerdown', function() {
        const dataFilter = this.dataset.filter;
        const el = [];

        if (dataFilter === '*') {
            positionItems(portfolioItems);
        } else {
            portfolioItems.forEach(item => {
                if (item.dataset.filter == dataFilter) {
                    el.push(item);
                } else {
                    item.style.cssText = 'transform: scale(0.1); opacity: 0;';
                }
            });
            positionItems(el);
        }
    });
});
// Count Number of Items Per Row
function countRowsItems() {
    let rowItems = 0;
    if (windowWidth <= 768) {
        rowItems = 1;
    } else if (windowWidth <= 992) {
        rowItems = 2;
    } else {
        rowItems = 3;
    }
    return rowItems;
}
// Position each item in its place
function positionItems(items) {
    let rowItems = countRowsItems();
    let y = 0;
    let x = 0;
    let itemCount = 0;
    items.forEach((item, i) => {
        item.style.cssText = `transform: translate3d(${x*(parentWidth/rowItems)}px, ${y*220}px, 0); opacity: 1;`;
        x++;
        if (x%rowItems == 0) {
            y++;
            x = 0;
        }
        itemCount = i;
    });
    portfolio.style.height = `${Math.ceil(itemCount/rowItems)*220}px`;
}

positionItems(portfolioItems);

window.addEventListener('resize', () => {
    parentWidth = portfolio.offsetWidth;
    windowWidth = window.innerWidth;
    positionItems(portfolioItems);
});



/////////////////


