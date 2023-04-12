
// display current time
var timeDisplayEl = $('#currentDay');
function displayTime() {
  var rightNow = dayjs().format('[Current Date & Time:] MMM DD, YYYY [ at ] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
};
displayTime();
setInterval(displayTime, 1000);




// function for save button
$('.saveBtn').click(function() {
  console.log(this);
  var description = $(this).siblings('.description').val();
  var rowTime = $(this).parent().attr('id');

  // check the key and value
  console.log(rowTime, description);

  // store the info
  localStorage.setItem(rowTime, description);
});

// function for comparing time block to present and assigning color class
$('.time-block').each(function () {
  var currentTime = dayjs().hour();
  var rowHour = parseInt($(this).attr('id').split('-')[1]);

  // checking to make sure rowHour is now a number integer for comparison operators
  console.log(typeof (rowHour));

  // assign class depending on relative time comparisons
  if (rowHour === currentTime) {
    $(this).addClass("present");
  } else if (rowHour > currentTime) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});


// iterate time comparisons instead of coding a bunch of individual hourly comparisons
for (i = 9; i < 18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
};

