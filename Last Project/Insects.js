// Animation for the insects that are in the background

damp=.95;
numBoids = 30;
a=[];
ww = $(window).width();
wh = $(window).height();
sp=1.5;

for (i=0; i<numBoids; i++) {
	boid = {};
	boid.el = $('#boid').clone().appendTo($('body'));
	boid.el.find("span").css('animation-delay', Math.floor(Math.random()*1000)+'ms')
	boid.x = Math.random()*ww+20;
	boid.y = Math.random()*wh+20;
	boid.vx = Math.random()*10-5;
	boid.vy = Math.random()*10-5;
	boid.k=Math.random()*.0001+.0003;
	boid.rotation = 90;
	a.push(boid)
}
function r() {
	spHalf = sp/2;
	for (i=0; i<numBoids; i++) {
		boid = a[i]
		boid.vx += Math.random()*sp-spHalf;
		boid.vy += Math.random()*sp-spHalf;
		boid.vx *= damp;
		boid.vy *= damp;
		targAngle=Math.atan2(boid.vy, boid.vx)*180/Math.PI;
		diff=targAngle-boid.rotation;
		if(diff<-180) diff+=360;
		if(diff>180) diff-=360;
		boid.rotation+=diff*.1;
		boid.x += boid.vx;
		boid.y += boid.vy;
		//console.log('Var: ',boid.rotation);
		boid.el.css({
			'transform':'rotate('+Math.floor(boid.rotation)+'deg)',
			left: boid.x,
			top: boid.y
		})
	}
	sp=sp*.995;
	//console.log('Var: ',sp);
	if(sp>0.1) requestAnimationFrame(r);
};
$('#boid').remove();
r();

$("body").click(function(e){
	
 
	mx = window.event.clientX;
	my = window.event.clientY;
	
	for(i=0;i<numBoids;i++){
		boid=a[i]
		boid.vx+=(mx-boid.x)*boid.k*100;
		boid.vy+=(my-boid.y)*boid.k*100;
	}
 if(sp<=.1){
		 sp=1.5;
		r();
		
	} else {
    sp=1.5;
  }
  
})


$(".card").each(function( index ) {
    var bg = $(this).find(".card-image").attr("src");
    $(this).css("background-image", "url('" + bg + "')");
  });


  AOS.init({
    duaration: 1200
})

function hello() {
	document.getElementById("aboutt").style.backgroundColor = "red";
   }