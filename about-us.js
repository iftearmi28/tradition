//text loader start
var preLoader=document.getElementById('loading');
function afterLoad() {
    preLoader.style.display="none";
}
function showGreeting() {
    setTimeout(afterLoad, 3000);
} 

//navbar
function openNav() {

    document.getElementById('res-navbar').style.width = "250px";
}

function closeNav() {
    document.getElementById('res-navbar').style.width = "0px";
}

window.onscroll = function () {
    stickyNavBar();
};
var stickyNav = document.getElementById('sticky-nav');
var sticky = stickyNav.offsetTop;

function stickyNavBar() {
    if (window.pageYOffset > sticky) {
        stickyNav.classList.add('sticky');
    } else {
        stickyNav.classList.remove('sticky');
    }
}
//navbar end

//table-btn replace start
var contactBtn = document.getElementById("contact-us-btn");
var arrowRight = document.getElementById('arrow-right');
arrowRight.style.display = "none";

var rightBtn = document.getElementById('che-right');
rightBtn.style.color = "black";

contactBtn.addEventListener('mouseover', arrowChange1);
contactBtn.addEventListener('mouseout', arrowChange2);

function arrowChange1() {

    rightBtn.style.display = "none";
    arrowRight.style.display = "inline-block";
    arrowRight.style.transition = "0.2s linear";
    arrowRight.style.color = "orange";
    rightBtn.replceChild(rightBtn, arrowRight);
}

function arrowChange2() {
    rightBtn.style.display = "inline-block";
    arrowRight.style.display = "none";
    rightBtn.style.transition = "0.2s linear";
    rightBtn.style.color = "black";
    arrowRight.replceChild(arrowRight, rightBtn);
}

//table-btn replace end

//Animate on scroll 
AOS.init({
    offset: 200,
    duration: 1600,
});