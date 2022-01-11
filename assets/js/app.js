// footer year
const spanContent = document.querySelector('#span-content');

// spanContent.innerHTML = new Date().getFullYear()
// user nav js
const txts=document.querySelector(".animate-text").children,
               txtsLen=txts.length;
           let index=0;
          const textInTimer=5000,
                textOutTimer=20000;

         function animateText() {
            for(let i=0; i<txtsLen; i++){
              txts[i].classList.remove("text-in","text-out");  
            }
            txts[index].classList.add("text-in");

            setTimeout(function(){
                txts[index].classList.add("text-out");              
            },textOutTimer)

            setTimeout(function(){

              if(index == txtsLen-1){
                  index=0;
                }
               else{
                   index++;
                 }
                animateText();
            },textInTimer); 
         }
         
         window.onload=animateText;

         
// nav js
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

var slides = document.querySelectorAll('.slide');
console.log(slides);
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();



// fixed scroll
const topLink = document.querySelector('.top-link')
console.log(topLink);

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset
  const containerHeight = topLink.getBoundingClientRect().height
 if (scrollHeight > 500) {
   topLink.classList.add('show-link')
 } else {
   topLink.classList.remove('show-link')
 }
})

topLink.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


// Reveal on scroll height
window.addEventListener('scroll', reveal)

function reveal(){
  var reveals = document.querySelectorAll('.reveal')

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var revealTop = reveals[i].getBoundingClientRect().top
    var revealPoint = 100

    if (revealTop < windowHeight - revealPoint ) {
      reveals[i].classList.add('show')
    } else {
      reveals[i].classList.remove('show')
    }
  }
}


