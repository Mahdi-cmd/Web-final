let curs = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = (x - 15) + "px";
  curs.style.top = (y - 15) + "px";
});

document.addEventListener('click', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  
  curs.classList.add("explosion");
  setTimeout(function() {
    curs.classList.remove("explosion");
  }, 900);  
  
  let blackhole = document.createElement('blackhole');
  blackhole.style.left = x + "px";
  blackhole.style.top = y + "px";
  document.body.appendChild(blackhole);
  let size = Math.random() * 40;
  blackhole.style.width = 1 + size + "px";
  blackhole.style.height = 1 + size + "px";
  
  setTimeout(function() {
    blackhole.remove();
  }, 2000);
  
});



var demoButtons;

function start () {
  
  // Add event "click" to "demo buttons"
  demoButtons = document.querySelectorAll ('.js-modify');
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener ('click', toggleEffect);
  }
  
  // Add event "click" to "save buttons"
  var saveButtons = document.querySelectorAll ('.js-save');
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener ('click', toggleActive);
  }
  
}

// Toggle "effect" classes
function toggleEffect () {
  var target = document.querySelector (this.dataset.target);
      target.dataset.effect = this.dataset.effect;
  
  for (var i= 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove ('active');
  }
  
  toggleActive.call (this);
}

// Toggle "active" class
function toggleActive () {
  this.classList.toggle ('active');
}

// Invoke "start ()" function
window.addEventListener ('load', start);

function hello() {
	document.getElementById("aboutt").style.backgroundColor = "red";
   }


   AOS.init({
    duaration: 1200
})