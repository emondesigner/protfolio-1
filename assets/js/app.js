// ===============================CURSER SECTION START===============================
let cursor_1 = document.querySelector(".cursor1");
let cursor_2 = document.querySelector(".cursor2");
window.onmousemove = function(e){
 cursor_1.style.top = e.pageY + 'px';
 cursor_1.style.left = e.pageX + 'px';
 cursor_2.style.top = e.pageY + 'px';
 cursor_2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        cursor_1.classList.add('active');
        cursor_2.classList.add('active');
    }
    links.onmouseleave = () =>{
        cursor_1.classList.remove('active');
        cursor_2.classList.remove('active');
    }
})
// ===============================CURSER SECTION End===============================





// ============================Typing Js Section Start============================
var auto = new Typed('.auto-type', {
    strings: ['Front-End-Developer.', 'Web Designer'],
    typeSpeed: 150,
    backSpeed:120,
    loop: true
});
// ============================Typing Js Section End==============================

// =======================CONTACT SECTION  TYPING JS START=======================
var text = new Typed('.auto-selcect', {
    strings: ['ire Me...'],
    typeSpeed: 150,
    backSpeed:120,
    loop: true
});
// =======================CONTACT SECTION  TYPING JS END=========================


// ===========================SCROLL SECTION JS START===========================
let btnScroll = document.querySelector('.scroll_btn');
window.addEventListener('scroll', function (){
    if(window.scrollY >250){
        btnScroll.classList.add('open');
    }
    else{
        btnScroll.classList.remove('open');
    }
})
// ===========================SCROLL SECTION JS END=============================