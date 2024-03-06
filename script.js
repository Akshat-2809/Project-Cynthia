function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);
  
  
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  
  ScrollTrigger.refresh();
  
}
loco()

var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+20+"px"
  crsr.style.top = dets.y+20+"px"
})

function ciclef(){
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;

  windon.addEventListener("mousemove",function(dets){

    var diffx = dets.clientX - xprev;
    xprev = dets.clientX;
    var diffy = dets.clientY - yprev;
    yprev = dets.clientY;
    
    xscale = gsap.utils.clamp(0.8,1.2,diffx);
    yscale =  gsap.utils.clamp(0.8,1.2,diffy);
   
  })
}


var tl = gsap.timeline()
tl.from("#nav",{
  y:"-15",
  opacity:0,
  ease: Expo.easeInOut,
  duration:2
})

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});