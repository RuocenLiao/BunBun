let store = JSON.parse(localStorage.getItem('store') || "{count: 0}");
localStorage.setItem("store", JSON.stringify(store));

/*document.getElementById("addToCart").addEventListener("click", addItem);*/


function rerenderCart() {
    let s = JSON.parse(localStorage.getItem("store"));
    let c = s.count+1;
    let cs = c.toString();

    let c1 = document.getElementById("cartcount");
    let c2 = document.getElementById("count");
    if (c1) {c1.innerHTML=cs;}
    if (c2) {c2.innerHTML=cs;}
}
function addItem() {
    let s = JSON.parse(localStorage.getItem("store"));
    let c = s.count+1;
    let cs = c.toString();
    //document.getElementById("count").innerHTML = cs;
    //document.getElementById("cartcount").innerHTML = cs;
    rerenderCart();
    s.count = s.count+1;
    localStorage.setItem("store", JSON.stringify(s));
    console.log(s.count);
}

/*change display of quantity selection*/
function select1() {

    document.getElementById('1').style.color='rgb(100, 0, 0, 1)';
    document.getElementById('1').style.backgroundColor='rgb(254,216,177, 1)';
    document.getElementById('1').style.boxShadow='2px 2px rgb(100, 0, 0, 0.7)';

    document.getElementById('3').style.color='rgb(100, 0, 0, 0.60)';
    document.getElementById('3').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('3').style.boxShadow='0px 0px'; 

    document.getElementById('6').style.color='rgb(100, 0, 0, 0.60)';
    document.getElementById('6').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('6').style.boxShadow='0px 0px'; 

    document.getElementById('12').style.color='rgb(100, 0, 0, 0.60)';
    document.getElementById('12').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('12').style.boxShadow='0px 0px'; 
};
function select3() {
    document.getElementById('1').style.color='rgb(100, 0, 0, 0.60)';
    document.getElementById('1').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('1').style.boxShadow='0px 0px'; 

    document.getElementById('3').style.color='rgb(100, 0, 0, 1)';
    document.getElementById('3').style.backgroundColor='rgb(254,216,177, 1)';
    document.getElementById('3').style.boxShadow='2px 2px rgb(100, 0, 0, 0.7)';

    document.getElementById('6').style.color='grgb(100, 0, 0, 0.6)';
    document.getElementById('6').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('6').style.boxShadow='0px 0px'; 

    document.getElementById('12').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('12').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('12').style.boxShadow='0px 0px'; 
};
function select6() {
    document.getElementById('1').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('1').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('1').style.boxShadow='0px 0px'; 

    document.getElementById('3').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('3').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('3').style.boxShadow='0px 0px'; 

    document.getElementById('6').style.color='rgb(100, 0, 0, 1)';
    document.getElementById('6').style.backgroundColor='rgb(254,216,177, 1)';
    document.getElementById('6').style.boxShadow='2px 2px rgb(100, 0, 0, 0.7)';

    document.getElementById('12').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('12').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('12').style.boxShadow='0px 0px'; 
};
function select12() {
    document.getElementById('1').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('1').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('1').style.boxShadow='0px 0px'; 

    document.getElementById('3').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('3').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('3').style.boxShadow='0px 0px'; 

    document.getElementById('6').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('6').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('6').style.boxShadow='0px 0px'; 

    document.getElementById('12').style.color='rgb(100, 0, 0, 1)';
    document.getElementById('12').style.backgroundColor='rgb(254,216,177, 1)';
    document.getElementById('12').style.boxShadow='2px 2px rgb(100, 0, 0, 0.7)';
};

/*change display of topping selection*/
function selectNone() {

    document.getElementById('None').style.color='rgb(100, 0, 0, 1)';
    document.getElementById('None').style.backgroundColor='rgb(254,216,177, 1)';
    document.getElementById('None').style.boxShadow='2px 2px rgb(100, 0, 0, 0.7)';
    document.getElementById('toppingImg').src='';

    document.getElementById('Choc').style.color='rgb(100, 0, 0, 0.60)';
    document.getElementById('Choc').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Choc').style.boxShadow='0px 0px'; 

    document.getElementById('Sugar').style.color='rgb(100, 0, 0, 0.60)';
    document.getElementById('Sugar').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Sugar').style.boxShadow='0px 0px'; 

    document.getElementById('Vani').style.color='rgb(100, 0, 0, 0.60)';
    document.getElementById('Vani').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Vani').style.boxShadow='0px 0px'; 
};
function selectChoc() {
    document.getElementById('None').style.color='rgb(100, 0, 0, 0.60)';
    document.getElementById('None').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('None').style.boxShadow='0px 0px'; 

    document.getElementById('Choc').style.color='rgb(100, 0, 0, 1)';
    document.getElementById('Choc').style.backgroundColor='rgb(254,216,177, 1)';
    document.getElementById('Choc').style.boxShadow='2px 2px rgb(100, 0, 0, 0.7)';
    document.getElementById('toppingImg').src='./c.png';

    document.getElementById('Sugar').style.color='grgb(100, 0, 0, 0.6)';
    document.getElementById('Sugar').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Sugar').style.boxShadow='0px 0px'; 

    document.getElementById('Vani').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('Vani').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Vani').style.boxShadow='0px 0px'; 
};
function selectSugar() {
    document.getElementById('None').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('None').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('None').style.boxShadow='0px 0px'; 

    document.getElementById('Choc').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('Choc').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Choc').style.boxShadow='0px 0px'; 

    document.getElementById('Sugar').style.color='rgb(100, 0, 0, 1)';
    document.getElementById('Sugar').style.backgroundColor='rgb(254,216,177, 1)';
    document.getElementById('Sugar').style.boxShadow='2px 2px rgb(100, 0, 0, 0.7)';
    document.getElementById('toppingImg').src='./s.png';

    document.getElementById('Vani').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('Vani').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Vani').style.boxShadow='0px 0px'; 
};
function selectVani() {
    document.getElementById('None').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('None').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('None').style.boxShadow='0px 0px'; 

    document.getElementById('Choc').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('Choc').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Choc').style.boxShadow='0px 0px'; 

    document.getElementById('Sugar').style.color='rgb(100, 0, 0, 0.6)';
    document.getElementById('Sugar').style.backgroundColor='rgb(254,216,177, 0.6)';
    document.getElementById('Sugar').style.boxShadow='0px 0px'; 

    document.getElementById('Vani').style.color='rgb(100, 0, 0, 1)';
    document.getElementById('Vani').style.backgroundColor='rgb(254,216,177, 1)';
    document.getElementById('Vani').style.boxShadow='2px 2px rgb(100, 0, 0, 0.7)';
    document.getElementById('toppingImg').src='./v.png';
};