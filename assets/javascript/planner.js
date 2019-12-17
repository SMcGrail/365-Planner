$(document).ready(function () {

let todayDateTime = $("#currentDay");


setInterval(() => {
    const now = moment();
    const dateTime = now.format('dddd, MMMM Do, hh:mm a');
    todayDateTime.text(dateTime);
}, 1000);

const timeOfDay = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

for (let i = 0; i < timeOfDay.length; i++) {

    const timeOfDayText = $("<p>");
    timeOfDayText.addClass("timeSlotText timeSlot-color");
    timeOfDayText.attr("data-time", timeOfDay[i]);
    timeOfDayText.text(timeOfDay[i]);

    $("#timeSlotList").append(timeOfDayText);

};



const textArea = $('<textarea type="text" name="textbox">');
textArea.addClass("typeHere");  

$(".timeSlotText").after(textArea);

const saveButton = $('<input type="button" name="save" rows="3">');
saveButton.addClass("clickToSave");  

$(".typeHere").after(saveButton);

});
