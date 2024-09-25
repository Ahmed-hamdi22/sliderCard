
var imageList =Array.from( document.querySelectorAll( '.item img' )); //6 imagess
var lightboxContainer  = document.querySelector( '.light-box' );
var itembox  = document.querySelector( '.item-box' );
var nextButton   = document.querySelector('#next');
var prevButton   = document.querySelector('#prev');
var closeButton  = document.querySelector('#close');
var currnetSlideIndex;


for (var i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('click',function(e) {
        lightboxContainer.classList.replace('d-none','d-felx'); 
         currnetSlideIndex = imageList.indexOf(e.target); // 0 ,1,2,3
        var imgsrc = e.target.getAttribute('src'); 
        itembox.style.backgroundImage = `url(${imgsrc})`;  
    })
}
function slide(step) {
    currnetSlideIndex = currnetSlideIndex  + step  ;

     if (currnetSlideIndex<0){
       currnetSlideIndex=imageList.length -1 ;
     }if (currnetSlideIndex==imageList.length ){
      currnetSlideIndex=0;
     }
      var  Imgsrc =  imageList[  currnetSlideIndex].getAttribute('src');          
 itembox.style.backgroundImage = `url(${Imgsrc})`;  
    
}
function closeSlide() {
    lightboxContainer.classList.add('d-none')}

// function nextslide() {
//     currnetSlideIndex++;
//     if(  currnetSlideIndex == imageList.length){
//         currnetSlideIndex = 0 ;          
//     }
     
 
//  var  Imgsrc =  imageList[  currnetSlideIndex].getAttribute('src');          
//  itembox.style.backgroundImage = `url(${Imgsrc})`;  

// }

// function prevSlide() {
//     currnetSlideIndex--;
//     if(  currnetSlideIndex < 0){
//         currnetSlideIndex=imageList.length -1;        
//     }

//  var  Imgsrc =  imageList[  currnetSlideIndex].getAttribute('src');          
//  itembox.style.backgroundImage = `url(${Imgsrc})`;  

// }
nextButton.addEventListener("click", function() { slide(1) });
prevButton.addEventListener("click", function() {  slide(1)});
// close button event listener
document.querySelector('#close').addEventListener("click",closeSlide);
document.addEventListener("keydown",function (e) {
  if (e.key == 'ArrowRight') {
    slide(1);
  }else if(e.key == 'ArrowLeft'){
    slide(-1)
  }else if (e.key == 'Escape'){
    closeSlide();
  }
})
lightboxContainer.addEventListener('click',function(e) {
    closeSlide();
})
itembox.addEventListener('click',function(e) {
   e.stopPropagation();
})




// for (let i = 0; i < imageList.length; i++) {
//     imageList[i].addEventListener('click', function(){
//         openLightBox();
//         setItemBoxImage(this);
//     });
// }
// // Close Light Box Button Event Listener
// document.querySelector('.close').addEventListener("click",function() {      
//    closeLightBox();        
// });

// // Function to Open the Light Box
// function openLightBox () {
//     lightboxContainer.style.display= "block";       
//     itembox.style.display="flex"     ;     
//     document.body.style.overflow='hidden';
// }
// // Function to Close the Light Box
// function closeLightBox () {
//     lightboxContainer.style.display= "none";
//     itembox.style.display="none";
//     document.body.style.overflow='auto';
// }

// // Function to Set the Item Box Image
// function setItemBoxImage(_img) {
//     let largeImg = _img.src
//     let description = _img.alt
//     itembox.innerHTML = `<img src =${largeImg} alt="${description}" />`;
// }