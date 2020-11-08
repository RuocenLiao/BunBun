/* Citation: 
     https://www.youtube.com/watch?v=YeFzkC2awTM
     https://codesandbox.io/embed/github/lxieyang/pui-ssui-lab-materials-fall-2019/tree/master/week-05/to-do
   Adapted from the tutorial and class example of To-do list(lab4)
*/

/* list of name: value pairs with following properties:
    flavor, quantity, topping, price, imgsrc
*/
//localStorage.clear();

const recoveredList = JSON.parse(localStorage.getItem('list') || '[]');

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function cartItem(flavor, quantity, topping, price, imgsrc) {
    this.flavor = flavor;
    this.quantity = quantity;
    this.topping = topping;
    this.price = price;
    this.imgsrc = imgsrc;
}

function ready() {
    
    //if on cart page
    // update cart list and cartcount and add event listener for remove buttons 
    if (document.getElementById("cartcount")) {
        if (recoveredList.length > 0) {

            for (let i = 0; i < recoveredList.length; i++) {
                const flavor = recoveredList[i].flavor;
                const quantity = recoveredList[i].quantity;
                const topping = recoveredList[i].topping;
                const price = recoveredList[i].price;
                const imgsrc = recoveredList[i].imgsrc;
                addItemToCart(flavor, quantity, topping, price, imgsrc);
                console.log("add cart item")
              }
        }
        
        updateCartTotal()

        var removeCartItemButtons = document.getElementsByClassName('x')
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
        }
    }

    //OTW add eventlistener for addToCart button
    var addToCartButtons = document.getElementsByClassName('addToCart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        console.log("+1")
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

}


function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //buttonClicked.parentElement.parentElement.style.display='none';
    updateCartTotal();
}


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var flavor = shopItem.getElementsByClassName('flavorText')[0].innerText
    var quantity = shopItem.getElementsByClassName('dChosen')[0].innerText
    var topping = shopItem.getElementsByClassName('dChosen')[1].innerText
    var price = document.getElementById('dPrice').innerText
    var imgsrc = shopItem.getElementsByClassName('detailsImage2')[0].src
    let item = new cartItem(flavor, quantity, topping, price, imgsrc);

    console.log(flavor);
    console.log(quantity);
    console.log(price);

    //stores item info in the list
    //and loops through to create cart list when switch to cart page
    recoveredList.push(item)
    console.log(recoveredList.valueOf())
    console.log(recoveredList[0].flavor)
    
    localStorage.setItem('list', JSON.stringify(recoveredList));
}

function addItemToCart(flavor, quantity, topping, price, imgsrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cContainer')
    var cartItems = document.getElementsByClassName('cGrid')[0]

    var cartRowContents = `
        <span>
          <img class="cartImage" src="${imgsrc}" alt="An image of cinnamon roll"/>
        </span>
    
        <span class="left itemInfo">
            <span class="cartText left flavor">${flavor}<br></span>
            <span class="cartText left cartPrice">${price}</span>
            <br><br>
            <span class="cartText button white smallLable alignEnd quantity">${quantity}</span> 
            <br>          
            <span class="cartText button white smallLable topping">${topping}</span>
        </span>

        <div class="right">
          <img class="x" id="x" src="./x.png" alt="x icon"/>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.appendChild(cartRow)
    cartRow.getElementsByClassName('x')[0].addEventListener('click', removeCartItem)
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cGrid')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cContainer')
    var total = 0
    var count = cartRows.length
    var list = []
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cartPrice')[0]
        var flavor = cartRow.getElementsByClassName('flavor')[0].innerHTML
        var quantity = cartRow.getElementsByClassName('quantity')[0].innerHTML
        var topping = cartRow.getElementsByClassName('topping')[0].innerHTML
        var imgsrc = cartRow.getElementsByClassName('cartImage')[0].src

        var price = parseFloat(priceElement.innerText.replace('$', ''))
        total = total + price

        let item = new cartItem(flavor, quantity, topping, price, imgsrc)
        list.push(item)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('totalPrice')[0].innerText = '$' + total
    updateCounts(count);
    localStorage.setItem('list', JSON.stringify(list));
}

function updateCounts(count) {
    let s = JSON.parse(localStorage.getItem("store"));
    let cs = JSON.stringify(count);

    let c1 = document.getElementById("cartcount");
    let c2 = document.getElementById("count");
    if (c1) {
        c1.innerHTML=cs;
        console.log("c1");
    }
    if (c2) {
        c2.innerHTML=cs;
        console.log("c2");
    }

    s.count = count;
    localStorage.setItem("store", JSON.stringify(s));
    console.log(s.count);
}
