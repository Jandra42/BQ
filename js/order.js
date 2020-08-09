
// Formvalidálók



function validatorUserData(name, email, addr) {
    let okay = 'false'
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let addr = document.querySelector('#addr');
    if (!name) {
        alert("Kérjük, add meg a neved!");
        okay = false;
    }
    if (!email || email.indexOf("@") < 0 || (email.indexOf(".") < 0)) {
        alert("Helytelen email-cím!");
        okay = false;
    
    if (addr.length < 10) {
        alert("Kérjük, add meg a szállítási címet");
    }
    okay = true;
}




function validatorQuantity(quantity) {
    // röviditett if..else feltétel
    quantity = isNaN(quantity) ? 0 : quantity;
    if (!quantity || quantity < 1 || quantity > 10) {
        alert("Minimum 1, maximum 10 terméket rendelhetsz!");
    }
}
let price = 1200;
let amountInput = document.querySelector("input#amount");
let quantity = parseInt(amountInput.value);



// JS-ben is: positional arguments - arg sorrend számit;
// default értéket, ha nincs megadva semmi
let showAmount = document.querySelector("#price");
let extra = parseInt(document.querySelector("[id = extra]:checked").value);
let sauce = parseInt(document.querySelector("select[id = sauce] option :selected").value);
let shippingFee = 500; 

function showSumPrice(price, extra, sauce, quantity, shippingFee) {
    price = (price + extra + sauce) * quantity;
    if (price < 5000) {
        price = price + shippingFee;
    }
    showAmount.innerHTML = price;
}

// function sendOrder() {
    
//    
    
// }

