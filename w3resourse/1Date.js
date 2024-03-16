// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const today= new Date()

const day= today.getDay()

const daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

console.log(daylist[day]+".")

var h=today.getHours()
var m=today.getMinutes();
var s=today.getSeconds();

var prepand= (h >12 )? "PM" : "AM";

if(h== 0 && prepand == "PM"){
    if(m== 0 && s == 0){
        h = 12;
        prepand=  noon;
    }else{
        h = 12;
        prepand = 'PM'
    }
}
if(h== 0 && prepand == "AM"){
    if(m== 0 && s == 0){
        h = 12;
        prepand= ' MIDNIGHT';
    }else{
        h= 12;
        prepand = 'AM'
    }
}

console.log("current Time : " + h +prepand+":"+m +":"+s )

// 4-days back
const back = daylist.indexOf(day)+3
console.log(back)

for (const i=1;i<daylist;i++){
    if(i==back){
        console.log("dayis :",daylist[day])
    }
}
