$(document).ready(function() {
    console.log("Hello World");
$("#hour-9").val(localStorage.getItem("9"))
    
    
  
    var day=moment().format('dddd');
    var days=moment().add(3, 'days').calendar();
    var NowMoment = moment();
    
      
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
  console.log(eDisplayMoment)
  eDisplayMoment.innerHTML = NowMoment;

  $(".saveButton").on("click" ,function(){
    var text=($(this)[0].previousElementSibling.value)
    var hour=$(this).attr("id")
    localStorage.setItem(hour,text)
  })
  
  

  
});



