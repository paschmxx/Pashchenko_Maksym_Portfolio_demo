// MENU
var app = document.getElementById('app');
var nav = document.getElementById('nav');
var openMenu = document.getElementById('menuOpen');
var burger = document.getElementById('burger');
var times = document.getElementById('times');

openMenu.onclick  = function() {
    nav.style.display = "flex";
    burger.style.display = "none";
    times.style.display = "flex";
    document.ontouchmove = function (event) { 

        var isTouchMoveAllowed = true, target = event.target; 
    
        while (target !== null) { 
         if (target.classList && target.classList.contains('nav')) { 
          isTouchMoveAllowed = false; 
          break; 
         } 
         target = target.parentNode; 
        } 
    
        if (!isTouchMoveAllowed) { 
         event.preventDefault(); 
        } 
    }; 
}

// times.onclick  = function() {
//     nav.style.display = "none";
// }

// window.onclick  = function(event) {
//     if (event.target == nav) {
//         nav.style.display = "none";
//     }
// }




var guide__text = document.getElementById('guide__text');
var cloclo = document.getElementById('cloclo');
var modal = document.getElementById('modal');
var openModal = document.getElementById('modalOpen');
var closeModal = document.getElementsByClassName('modalClose')[0];
var submitModal = document.getElementById('btnSubmit');
var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var times = document.getElementById("times");




openModal.onclick  = function() {
    // app.style.position = "fixed";
    modal.style.display = "block";
    guide__text.style.opacity = "0.1";
    document.ontouchmove = function (event) { 

        var isTouchMoveAllowed = true, target = event.target; 
    
        while (target !== null) { 
         if (target.classList && target.classList.contains('modal')) { 
          isTouchMoveAllowed = false; 
          break; 
         } 
         target = target.parentNode; 
        } 
    
        if (!isTouchMoveAllowed) { 
         event.preventDefault(); 
        } 
    }; 
}




times.onclick  = function() {
    times.style.display = "none";
    openModal.style.display = "none";
    app.style.position = "static";
}

window.onclick  = function(event) {
    if (event.target == modal) {
        openModal.style.display = "none";
        app.style.position = "static";
    }
}


function close() {

}