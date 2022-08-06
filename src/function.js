// function addToCart(quantity,productName="Elma") {   
//     console.log("Sepete Eklendi :  ürün : "+ productName+ "  adet : " + quantity)
// }
// addToCart(12)

// let sayHello = () => console.log("Hello World!");
// sayHello();

// let sayHello2 = function () { console.log("Hello World2!") }
// sayHello2();

// function addToCart2(quantity,productName,unitPrice) {

// }
// addToCart2("Elma",5,2)

// function addToCart3(product)
// {
//     console.log("Ürün : " +product.productName + " / " + " adet : " + product.quantity +" /" + " tane fiyatı : " + product.unitPrice) 
// }

// let product1 = {productName: "Elma", quantity: 12, unitPrice: 3}
// addToCart3(product1)
// let product2 = {productName: "Elma", quantity: 12, unitPrice: 3}
// let product3 = {productName: "Elma", quantity: 12, unitPrice: 3}
// product2 = product3
// product2.productName = "Karpuz"
// console.log(product3.productName)

// let number1 = 10;
// let number2 = 20;
// number1 = number2
// number2 = 100
// console.log(number1)

// function addToCart4() {
//     console.log(products)
// }

// let products = [
//     {productName: "Elma", quantity: 12, unitPrice: 3}, 
//     {productName: "Elma", quantity: 12, unitPrice: 3}, 
//     {productName: "Elma", quantity: 12, unitPrice: 3}, 
//     {productName: "Elma", quantity: 12, unitPrice: 3}, 
//     {productName: "Elma", quantity: 12, unitPrice: 3}, 
//     {productName: "Elma", quantity: 12, unitPrice: 3}, 
//     {productName: "Elma", quantity: 12, unitPrice: 3}, 
//     {productName: "Elma", quantity: 12, unitPrice: 3}, 
//     {productName: "Elma", quantity: 12, unitPrice: 3}
// ]
// addToCart4(products)

// function add(number1, number2)
// {
//     console.log(number1 + number2)
// }



function add(...numbers)//rest
{
    let total = 0;
   for (let i = 0; i < numbers.length; i++)
   {
    total = total + numbers[i]
   }
   console.log(total)
}
add(320,15)

let numbers = [30,10,50,600,120]
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[içAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name: "İç Anadolu", population: "20M"}, 
    {name: "Marmara", population: "30"},
    {name: "Karadeniz", population: "10m"},
    [
        ["Eskişehir","Ankara"],
        ["İstanbul","Tekirdağ"],
        ["Rize","Ordu"]
    ]
]
let newProductName, newUnitPrice, newQuantity
({productName: newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
    = {productName: "Elma", quantity: 12, unitPrice: 3})
console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)


