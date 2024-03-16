const num=Math.ceil(Math.random()*10) 
console.log(num)

const check =prompt( "please enter your number")

if (num == check){
    console.log("perfect match")
}
else{
    console.log("not Match with"+ num)
}