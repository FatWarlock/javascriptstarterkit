const number1 = parseInt(prompt("Enter a positive number: "));
const number2 = parseInt(prompt("Enter a positive number: "));
let total1 = 0
let total2 = 0

function isFriendl(s1,s2) {
    for (let i = 0; i < s1; i++) {
        if(number1 % i === 0) {
            total1 += i 
    }
    }
    for (let i = 0; i < s2; i++) {
        if(number2 % i === 0) {
            total2 += i 
    }
    }
}
if(total1 === total2) {
    console.log("numbers are friends")
}
else{
    console.log("numbers are not friends")
}
