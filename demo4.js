var elem1=document.querySelector("#elem1")
var elemImage=document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(dets){
//     elemImage.style.left=dets.x+"px"
//      elemImage.style.top=dets.y+"px"
// })
// elem1.addEventListener("mouseenter", function(dets){
//     elemImage.style.opacity=1
// })
// elem1.addEventListener("mouseenter", function(dets){
//     elemImage.style.opacity=0
// })

var elem=document.querySelectorAll(".elem")
//console.log(elem)
elem.forEach(function(val){
//console.log(val)
//console.log(val.childNodes[])//receive all child nodes
//console.log(val.childNodes[1])//receive 1 child nodes on position
val.addEventListener("mouseenter", function(){
   // console.log("Entered");
  // val.style.backgroundColor="red"
  val.childNodes[3].style.opacity=1
})
val.addEventListener("mouseleave", function(){
    //console.log("Leave");
      // val.style.backgroundColor="transparent"
       val.childNodes[3].style.opacity=0
});
val.addEventListener("mouseleave", function(dets){
  
     val.childNodes[3].style.left=dets.x+"px"
      val.childNodes[3].style.top=dets.y+"px"
});
});