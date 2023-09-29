let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => { 
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times'); 
    navbar.classList.remove('active'); 
}

let slide = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
    
}

function prev(){
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
    
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    grabeCursor : true,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            
          },

        550: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        850: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
          
        },
      },
  });