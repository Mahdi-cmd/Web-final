var slideIndex = 0;
var sl = document.getElementsByClassName("mySlides");
showSlide(slideIndex);

document.querySelector(".prev").addEventListener('click', function(){
  slideIndex = currentSlide();
  console.log(slideIndex);
  showSlide(slideIndex-1);
});

document.querySelector(".next").addEventListener('click', function(){
  slideIndex = currentSlide();
  console.log(slideIndex,sl.length-1);
  if(slideIndex === (sl.length-1)) showSlide(0);
  else showSlide(slideIndex);
});


/*Show slide by slide num*/
function showSlide(n){
  var sl = document.getElementsByClassName("mySlides");
  
  for(var i=0; i<sl.length; i++){
    if(i === n) {
      sl[i].style.display = "block";
      continue;
    }
    sl[i].style.display = "none";
 }
}

function currentSlide(){
  var res;  
for(var i=0; i<sl.length; i++){
  if(sl[i].style.display === "none") continue;
  else{res = i; break;}
}
  
 return res;
  
}


AOS.init({
  duaration: 1200
})

function hello() {
  document.getElementById("aboutt").style.backgroundColor = "red";
 }




