// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

// const num1 = prompt("enter number 1 : ")
// const num2 = prompt("enter number 2 : ")
function sum(num1,num2){
    if (num1 == num2 ){
        return (num1)*3
    }
    else{
        return(num1+num2)
    }
}
console.log(sum(10,20))
console.log(sum(40,40))