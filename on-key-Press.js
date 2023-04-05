let Onclick= document.getElementById("onclick")
let Mouseout= document.getElementById("mouseout")
let Onkeypress= document.getElementById("onkeypress")

Onclick.addEventListener("click",function(){
    alert("click on me is working properly")
})

Mouseout.addEventListener("mouseout",function() {
    alert("mouse out is working properly")
})

function myfunction(){
    alert("on key press is working properly")
}
// Onkeypress.addEventListener("keypress",function(){
//     alert("onkeypress is working properly")
// })