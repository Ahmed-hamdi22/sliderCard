var imageList = Array.from( document.querySelectorAll( '.item img' )); //6 imagess
var lightboxContainer  = document.querySelector( '.light-box' );
var itembox  = document.querySelector( '.item-box' );

var nextButton   = document.querySelector('#next');
var prevButton   = document.querySelector('#prev');
var closeButton  = document.querySelector('#close');
var currnetSlideIndex;



for (let i = 0; i < imageList.length ; i++) {
    imageList[i].addEventListener('click',function(e) {
        lightboxContainer.classList.replace("d-none",'d-flex');
        var imgsrc = e.target.getAttribute('src'); 

        itembox.style.backgroundImage = `url(${imgsrc})`;  
        currnetSlideIndex = imageList.indexOf(e.target);
        console.log(currnetSlideIndex);
    })    
}

function closeSlide() {
    lightboxContainer.classList.replace("d-flex",'d-none');
}
closeButton.addEventListener('click',closeSlide);

function nextslideSlide() {
    currnetSlideIndex ++
    if (currnetSlideIndex > imageList.length - 1) {
        currnetSlideIndex = 0;
    }
    var imagess = imageList[currnetSlideIndex].getAttribute('src');
    itembox.style.backgroundImage = `url(${imagess})`;
}
function prevslideSlide() {
    currnetSlideIndex --
    if (currnetSlideIndex = 0) {
        currnetSlideIndex = imageList.length-1 ;
    }
    var imagess = imageList[currnetSlideIndex].getAttribute('src');
    itembox.style.backgroundImage = `url(${imagess})`;
}

prevButton.addEventListener('click',prevslideSlide);

nextButton.addEventListener('click',nextslideSlide);

document.addEventListener('keydown',function(e) {
    if (e.key == 'ArrowRight') {
        nextslideSlide();
    }
    else if (e.key == 'ArrowLeft') {
        prevslideSlide();
    }
    else if (e.key == 'Escape') {
        closeSlide();
    }
    else if (e.key == 'f') {
        lightbox.style.width= "100%";
        lightbox.style.height= "100%";

    }
})