/*переходы по ссылкам меню*/
document.addEventListener('scroll', onScroll);
function onScroll(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('#wrapper>div');
    const links = document.querySelectorAll('#menu-center a');

    divs.forEach((el) => {
        if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            });


        }
    });
}
//Силизация хедера//
window.addEventListener('scroll', smallNav)
const  nav = document.getElementById('header');
function smallNav() {
    if ( window.pageYOffset >= 100 ) {
        nav.classList.add('smallNav')
    } else {
        nav.classList.remove('smallNav');
    }
}
//Взаимодействие с картинками//
const projectLinks = document.querySelectorAll(".itemsProject")
for (let link of projectLinks) {
    link.addEventListener("click", portfolioClickHandler)
}

function portfolioClickHandler(event) {
    event.preventDefault()

    const projectLink = event.target.parentNode
    if (projectLink.classList.contains("itemsProject")) {
        projectLinks.forEach(item => {
            item.classList.remove("itemsProject_active")
        })
        projectLink.classList.add("itemsProject_active")
    }
}


/*слайдер акции*/
/*window.onload = function(e){
    new Slider({
        images: '.gallery-1 .photo img',
        next: '.gallery-1 .tabs .next',
        prev: '.gallery-1 .tabs .prev'
    });
    function Slider(images){
        this.images = document.querySelectorAll(images.images);
        this.btPrev = document.querySelector(images.prev);
        this.btNext = document.querySelector(images.next);
        var i = 0;
        this.prev = function() {
            this.images[i].className = "";
            i--;
            if( i < 0){
                i = this.images.length - 1;
            }
            this.images[i].className = "shown";
        },
            this.next = function() {
                this.images[i].className = "";
                i++;
                if( i >= this.images.length){
                    i = 0;
                }
                this.images[i].className = "shown";
            }
        this.btPrev.addEventListener('click', this.prev.bind(this));
        this.btNext.addEventListener('click', this.next.bind(this));
        setInterval(this.next.bind(this), this.interval);
    }
}*/

