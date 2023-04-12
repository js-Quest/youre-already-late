// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
console.log(dayjs());

var saveBtnEl = $('saveBtn');
var whenEl = $('when');

var timeDisplayEl = $('#currentDay');
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
};
displayTime();
setInterval(displayTime, 1000);



// $function () {};

  // TODO: Add a listener for click events on the save button. This code should

  // $('saveBtn').on('click', function (event) {
  //   var description = $('description');
  //   localStorage.setItem("description", description);
  // }


  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
var hour9 = dayjs().hour(9);
var hour10 = dayjs().hour(10);
  var whatTime = function() {
    if (dayjs().isBetween(hour9, hour10)) {
      $('#hour-9').addClass("present");
    } else if 
      (dayjs().isAfter(hour10)) {
      $('#hour-9').addClass("past");
      } else {
      $('#hour-9').addClass("future");
      }
    }
  

  // $(document).ready(function () {
  //   var now = new Date();
  //   var hour = now.getHours();
  
    // checking date and time
  //   console.log(now);
  
  //   if (hour = now) {
      // present
  //     whenEl.removeClass('when').addClass('present');
  //   } else if (hour > now) {
      // future
  //     whenEl.removeClass('when').addClass('future');
  //   } else {
      // Night
  //     whenEl.removeClass('when').addClass('past');
  //   }
  // });
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
