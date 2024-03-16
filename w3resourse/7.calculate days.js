for (year=2014;year<2050;year++){
    const day = new Date(year,0 ,1);
    if(day.getDay()==0){
        console.log((year))
    }
}

