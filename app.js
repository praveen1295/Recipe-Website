const bar = document.getElementById("bar");
const close = document.getElementById("close");
var nav = document.getElementById("leftNavbar");

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}
// contact button

var contactBtn = document.getElementById("contact-btn");

//  function btn(){
//     alert("Feedback submitted \nThank you for your feedback.");
//  }

 contactBtn.addEventListener('click', () => {
    alert("Feedback submitted \n Thank you for your feedback.");
 });