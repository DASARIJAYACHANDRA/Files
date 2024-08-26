const speed=document.getElementById("toggle3")
const bro=document.querySelector(".container")


speed.addEventListener("click", function(){

speed.classList.toggle("change")


if(speed.classList.contains("change")){
    bro.style.backgroundColor="red"
}
else{
    bro.style.backgroundColor="blue"
}

})
