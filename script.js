$(document).ready(function() {
    console.log("Hello World");

    $("#hour-9").val(localStorage.getItem("9"))
    $("#hour-9").val(localStorage.getItem("10"))
    $("#hour-9").val(localStorage.getItem("11"))
    $("#hour-9").val(localStorage.getItem("12"))
    $("#hour-9").val(localStorage.getItem("13"))
    $("#hour-9").val(localStorage.getItem("14"))
    $("#hour-9").val(localStorage.getItem("15"))
    $("#hour-9").val(localStorage.getItem("16"))
    $("#hour-9").val(localStorage.getItem("17"))
    
    
  
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

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

    Array.from(rows).forEach(row => {
      let
        rowIdString = row.id,
        rowHour;
      if (rowIdString) {
        rowHour = parseInt(rowIdString);
      }
      if (rowHour) {
        
        if (currentHour === rowHour) {
          setColor(row, "red");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
          setColor(row, "green");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
          setColor(row, "lightgrey");
        } else {
          setColor(row, "white");
        }
      }
    });

    function setColor(element, color) {
  element.style.backgroundColor = color;
    }

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



