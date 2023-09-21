const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextslide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling){
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    }else{
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevslide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling){
        //Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    }else{
        // Add current to start
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button event
next.addEventListener('click', e =>{
    nextslide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextslide, intervalTime);
    }
})
prev.addEventListener('click', e =>{
    prevslide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextslide, intervalTime);
    }
})
// Auto slide
if(auto){
    //Run next slide at interval time
    slideInterval = setInterval(nextslide, intervalTime);
}
/* 
1. previousElementSibling is to check for prev similar element
2. nextElementSibling is to check for next similar element
*/