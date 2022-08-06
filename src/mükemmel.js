//Kendisi hariç bölenlerinin toplamı sayıya eşit olduğunda mükemmel sayı oluyor. Mükemmel sayı olup olmadığını bulmak için en büyük böleni olan kendisinin yarısını üst sınır kaubul ettik. 
function isPerfect(number){

    let total = 0

    for (let i = 0; i <= number/2; i++){
    if(number % i === 0)
    total = i + total
    }
    if( number ===total ){
    return true
    }
}

for(let j = 1; j <= 1000; j++){
    if(isPerfect(j))
    {
        console.log(j+ " is a perfect number.")
    }
}
