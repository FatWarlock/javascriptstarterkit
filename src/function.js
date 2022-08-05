// function addToCart(quantity,productName="Elma") {   
//     console.log("Sepete Eklendi :  ürün : "+ productName+ "  adet : " + quantity)
// }
// addToCart(12)

// let sayHello = () => console.log("Hello World!");
// sayHello();

// let sayHello2 = function () { console.log("Hello World2!") }
// sayHello2();

function addToCart2(quantity,productName,unitPrice) {

}
addToCart2("Elma",5,2)

function addToCart3(product)
{
    console.log("Ürün : " +product.productName + " / " + " adet : " + product.quantity +" /" + " tane fiyatı : " + product.unitPrice) 
}

let product1 = {productName: "Elma", quantity: 12, unitPrice: 3}
addToCart3(product1)
let product2 = {productName: "Elma", quantity: 12, unitPrice: 3}
let product3 = {productName: "Elma", quantity: 12, unitPrice: 3}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

let number1 = 10;
let number2 = 20;
number1 = number2
number2 = 100
console.log(number1)