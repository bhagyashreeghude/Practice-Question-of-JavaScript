// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  


function leapYear(y){
    if(y % 100 ==0 ? y% 400 == 0 : y%4 ==0){
        console.log("leap year")
    }
    else{
        console.log("not a leap year")
    }

}
leapYear(2018)
leapYear(2000)
leapYear(2024)
leapYear(1965)
leapYear(2016)
leapYear(2000)
leapYear(1700)
leapYear(1800)
leapYear(100)


