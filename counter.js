let decrement= document.getElementById("decrement")
let increment= document.getElementById("increment")
let display= document.getElementById("display")
let reset= document.getElementById("reset")

decrement.addEventListener("click", () =>{
    let value= Number( display.innerText);
    if(value>0){
        display.innerText= value-1;
    }
    else{
        alert("negative value is not allowed ")
    }
})

increment.addEventListener("click",() => {
    let value= Number(display.innerText);
    if(value<=9){
        display.innerText= value+1;
    }
    else{
        alert("more then 10 value is not allowed ");
    }
})

reset.addEventListener("click", () => {
    display.innerText= 0;
})