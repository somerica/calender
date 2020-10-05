$(document).ready(function() {
    console.log("Hello World");

    
    var currentMonth=today.getMonth();
    var currentYear=today.getFullYear();
    var day=moment().format('dddd');
    var days=moment().add(3, 'days').calendar();
    console.log(today);
    var NowMoment = moment();
    var eDisplayMoment = document.getElementById('displayMoment');
      
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

    var NowMoment = moment();
  
  
  var NowDate = new Date();
  
  
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  
  
  var eDisplayDate = document.getElementById('displayJsDate');
  eDisplayDate.innerHTML = NowDate;
})();



