$(document).ready(function () {
  console.log("Hello World");

  $("#hour-9").val(localStorage.getItem("9"));
  $("#hour-10").val(localStorage.getItem("10"));
  $("#hour-11").val(localStorage.getItem("11"));
  $("#hour-12").val(localStorage.getItem("12"));
  $("#hour-13").val(localStorage.getItem("13"));
  $("#hour-14").val(localStorage.getItem("14"));
  $("#hour-15").val(localStorage.getItem("15"));
  $("#hour-16").val(localStorage.getItem("16"));
  $("#hour-17").val(localStorage.getItem("17"));

  var day = moment().format("dddd");
  var days = moment().add(3, "days").calendar();
  var currentDay = moment();
  var currentHour=moment().hour();

  var hours = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "13pm",
    "15pm",
    "15pm",
    "16pm",
    "17pm",
  ];

  const rows = document.getElementsByClassName("row");
  var currentDay = parseInt(moment().format("Hour"));

  Array.from(rows).forEach((row) => {
    
    var calendarHour = row.getElementsByClassName("saveButton")[0].getAttribute("id")
    
      
    if (calendarHour<currentHour) { 
    row.classList.add("past")
      
    } else if (calendarHour>currentHour) {
      row.classList.add("future")
    }
   else {
    row.classList.add("present")
   }
  });

  function setColor(element, color) {
    element.style.backgroundColor = color;
  }


  var currentTime = moment();

  


  var eDisplayMoment = document.getElementById("displayMoment");
  console.log(eDisplayMoment);
  eDisplayMoment.innerHTML = currentTime;

  $(".saveButton").on("click", function () {
    var text = $(this)[0].previousElementSibling.value;
    var hour = $(this).attr("id");
    localStorage.setItem(hour, text);
  });
});
