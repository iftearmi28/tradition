//text loader start
var preLoader=document.getElementById('loading');
function afterLoad() {
    preLoader.style.display="none";
}
function showGreeting() {
    setTimeout(afterLoad, 3000);
} 


//animation  fade
//Animate on scroll 
AOS.init({
    offset: 120,
    duration: 1000,
});
//navbar
function openNav(){
    
    document.getElementById('res-navbar').style.width = "250px";
}

function  closeNav(){
    document.getElementById('res-navbar').style.width = "0px";
}

window.onscroll = function (){
    stickyNavBar();
    //menuAnimate()
};
var stickyNav= document.getElementById('sticky-nav');
var sticky= stickyNav.offsetTop;
 function stickyNavBar() {
    if (window.pageYOffset > sticky) {
        stickyNav.classList.add('sticky');
    } else{
        stickyNav.classList.remove('sticky');
    }
 }
//order-menu
function openOrder() {
    document.getElementById('order-menu').style.width="90%";
}
function closeOrder() {
    document.getElementById('order-menu').style.width="0%";
}
//order-menu end

//menu gallery love react start

var loveRe= document.getElementsByClassName('love-re');
for ( i = 0; i < loveRe.length; i++) {
    loveRe[i].onclick = loveReact;
}

function loveReact(e) {
    var fullLove = this.querySelector('.reacted');
    var halfLove = this.querySelector('.love');

    if (fullLove.style.display=="none" ) {
        fullLove.style.display="none";
        halfLove.style.background="white";
        halfLove.style.borderRadius="50%";
        halfLove.className="love fa fa-heart";
    }else{
        fullLove.style.display="block";
        halfLove.style.background="transparent";
        halfLove.className="love fa fa-heart";
        
    }
   
}

//menu gallery love react end


//menu accordion start
var menuAcc = document.getElementsByClassName('m-cont-btn');
var y;

for (let y = 0; y < menuAcc.length; y++) {
    menuAcc[y].addEventListener('click', function () {
        this.classList.toggle("active");
        var fullMenu = this.nextElementSibling;
        if(fullMenu.style.display==="block"){
            fullMenu.style.display = 'none';
            fullMenu.style.opacity = '0.50';
        }else{
            fullMenu.style.display = 'block';
            fullMenu.style.transition = '0.5s ease-in-out';
            fullMenu.style.opacity = '1';
        }
    })
    
}
//menu accordion end

//cart ordered
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add-cart-btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('book-table-btn')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-title')[0].innerText
    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-danger fa fa-trash-o" type="button"></button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity) 
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}













