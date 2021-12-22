//The function that is called when the button is pressed
function myFunctionCalcTotal(){
    let phoneQuantity = document.getElementById("nokia-3310-quantity").value;
    let phonePrice = document.getElementById("nokia-3310-price").value;
    let phoneTax = 0.05;    
//the phone price multiplied just with the quantity  
    var phoneFullPrice = phonePrice * phoneQuantity;
//getting the full tax amount 
    var phonePriceTax = phoneFullPrice * phoneTax;
//adding the full phone price with the tax amount to calculate the full amount with tax
    var phoneWithTax = phonePriceTax + phoneFullPrice;
//find HTML element and replace text with the calculated value
    document.getElementById("full-price").innerText = "$" + phoneWithTax;
}