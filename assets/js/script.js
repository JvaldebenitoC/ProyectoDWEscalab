//Efectos de navegacion en la barra
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 0);
})

//Modal de contacto
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
 }   

//Navegación en modo responsive

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItemsA = document.querySelectorAll(".navigation a");
const navigationItemsLi = document.querySelectorAll(".navigation li");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    
});
 
navigationItemsA.forEach((navigationItemsA) => {
    navigationItemsA.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

navigationItemsLi.forEach((navigationItemsLi) => {
    navigationItemsLi.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

//Boton para regresar hacia arriba

const scrollBtn = document.querySelector(".scrollToTop-btn")

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
});

//Animacion para los elementos en responsive
window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}
