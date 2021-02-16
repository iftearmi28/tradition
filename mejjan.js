//navbar
function openNav() {

    document.getElementById('res-navbar').style.width = "250px";
    /*document.getElementById('main').style.opacity="0.40";
    document.getElementById('main2').style.opacity="0.40";
    document.getElementById('main3').style.opacity="0.40";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";*/
}

function closeNav() {
    document.getElementById('res-navbar').style.width = "0px";
    /*document.getElementById('main').style.opacity="1";
    document.getElementById('main2').style.opacity="1";
    document.getElementById('main3').style.opacity="1";
    document.body.style.backgroundColor = "white";*/
}
//text loader start
var preLoader=document.getElementById('loading');
function afterLoad() {
    preLoader.style.display="none";
}
//text loader end

window.onscroll = function () {
    stickyNavBar();
    //scrollFunction()
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
//contact-btn replace start
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
    rightBtn.replaceWith(rightBtn, arrowRight);
}

function arrowChange2() {
    rightBtn.style.display = "inline-block";
    arrowRight.style.display = "none";
    rightBtn.style.transition = "0.2s linear";
    rightBtn.style.color = "black";
    arrowRight.replaceWith(arrowRight, rightBtn);
}

//contact-btn replace end


//fade video start
var video=document.querySelector('.banner');
window.addEventListener('scroll' , function(){
    var videoValue= 1 + window.scrollY/ -500;
    video.style.opacity=videoValue;
})
//fade video end

//food menu accordion dropdown 
var foodMenu = document.getElementById('food-menu-c');
foodMenu.style.display="none";
var foodbtn = document.getElementsByClassName('food-menu-dropdown');
var fooddownBtn = document.getElementById('food-che-down');
var foodupBtn = document.getElementById('food-che-up');
foodupBtn.style.display = "none";
var i;
for (var a = 0; a < foodbtn.length; a++) {
    foodbtn[a].addEventListener('click', function () {
       
        var panel2 = this.nextElementSibling;
        if (panel2.style.display === "flex") {
            panel2.style.display = "none";
            fooddownBtn.style.display = "";
            foodupBtn.style.display = "none";
            foodupBtn.replaceWith(fooddownBtn);
        } else {
            panel2.style.display = "flex";
            fooddownBtn.style.display = "none";
            foodupBtn.style.display = "";
            fooddownBtn.replaceWith(foodupBtn);
        }
    })

}
// how to order -button
var howToBtn = document.getElementsByClassName("how-to-order");
var orderdownBtn = document.getElementById('order-che-down');
var orderupBtn = document.getElementById('order-che-up');
orderupBtn.style.display = "none";
var i;
for (i = 0; i < howToBtn.length; i++) {
    howToBtn[i].addEventListener("click", function() {
        this.classList.toggle("order-active");
    var panelHowto = this.nextElementSibling;
    if (panelHowto.style.display === "block") {
        panelHowto.style.display = "none";
        orderdownBtn.style.display = "";
        orderupBtn.style.display = "none";
        orderupBtn.replaceWith(orderdownBtn);
    } else {
        panelHowto.style.display = "block";
        orderdownBtn.style.display = "none";
        orderupBtn.style.display = "";
        orderdownBtn.replaceWith(orderupBtn);
    }
  });
}

//learn more start
var journeyBtn = document.getElementsByClassName("journey-btn");
var journeydownBtn = document.getElementById('journey-che-down');
var journeyupBtn = document.getElementById('journey-che-up');
journeyupBtn.style.display = "none";
var i;
for (i = 0; i < journeyBtn.length; i++) {
    journeyBtn[i].addEventListener("click", function() {
        this.classList.toggle("journey-active");
    var panelJourney = this.nextElementSibling;
    if (panelJourney.style.display === "block") {
        panelJourney.style.display = "none";
       journeydownBtn.style.display = "";
       journeyupBtn.style.display = "none";
       journeyupBtn.replaceWith(journeydownBtn);
    } else {
        panelJourney.style.display = "block";
        journeydownBtn.style.display = "none";
        journeyupBtn.style.display = "";
        journeydownBtn.replaceWith(journeyupBtn);
    }
  });
}
//learn more end

//greeting modal start


function showGreeting() {
    setTimeout(greetingOpen, 5500);
    setTimeout(afterLoad, 3000);
}
function greetingOpen() {
    document.getElementById("greeting").style.display = "flex";
  }
  
  function greetingClose() {
    document.getElementById("greeting").style.display = "none";
  }
//greeting modal end

//Table booking btn
/*
var mybutton = document.getElementById("sticky-order-btn");

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}*/
//Animate on scroll 
AOS.init({
    offset: 200,
    duration: 1500,
});