$(document).ready(function() {
    console.log("Hello World");

    var today= new Date();
    var currentMonth=today.getMonth();
    var currentYear=today.getFullYear();
    var day=moment().format('dddd');
    console.log(day);
    var hours=[
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    ];   

    var dayAndTime=document.getElementById("dayAndTime")

    // function showCalendar(month,year) {
    //     var firstDay=newDate(year,month).getDay();
    //     var daysInMonth =32- new Date(year , month, 32).getDate();

    //     var tbl=document.getElementById("calendar-body");
    //     tbl.innerHTML=""
    //     dayAndTime.innerHTML=months[month]+"" + year
    //     var date= 1;

    //     for(var i=0; i<6 ; i++){
    //         var row = document.createElement("tr")
    //     }
    //     for(varj=0;j<7; j++){
    //         if(i==0 && j< firsthour){

    //         }else if (date> daysInMonth)
    //     }
        

    //         for
    //     )
    

})

