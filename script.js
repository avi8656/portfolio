
function locomo(){
  const scroll = new LocomotiveScroll({
      el: document.getElementById('main'),
      smooth: true
  });
}
locomo();



var tl = gsap.timeline();
  tl.to("#loader", {
   top: "-100%",
   delay: 3,
   ease: Expo.easeInOut
  })
 gsap.to("#load", {
    duration: 1.5,
    rotation: 360,
    ease: "linear",
    repeat: -1,
  });



  
window.addEventListener("load", function () {
  var loader = document.querySelector("#loader");
  loader.style.display = "none";
});



function effect() {
  document.querySelectorAll(".slide")
    .forEach(function (slide) {
      slide.addEventListener("mousemove", function (dets) {
        var dim = slide.getBoundingClientRect();
        this.children[1].style.clipPath = `circle(15% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`;
      });

      slide.addEventListener("mouseleave", function (dets) {
        var dim = slide.getBoundingClientRect();
        this.children[1].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`;
      });
    })
}

function slideskewmaker() {
  var dim = document.querySelector(".slide")
    .getBoundingClientRect();


  var prew = dim.left;

  document.querySelector("#project")
    .addEventListener("scroll", function () {
      var dim2 = document.querySelector(".slide")
        .getBoundingClientRect();

      var diff = prew - dim2.left;
      document.querySelectorAll(".slide")
        .forEach(function (elem) {
          elem.style.transform = `skewX(${diff * .2}deg)`;
        })
      prew = dim2.left;
    })

}
slideskewmaker()
effect()

