$(document).ready(function () {

    let todayDateTime = $("#currentDay");


    setInterval(() => {
        const now = moment();
        const dateTime = now.format('dddd, MMMM Do, hh:mm a');
        todayDateTime.text(dateTime);
    }, 1000);

    const timeOfDay = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


    for (let i = 0; i < timeOfDay.length; i++) {
        const timeSlot = $("<div>");
        timeSlot.addClass("timeSlot");
        $(".timeSlotList").append(timeSlot);

        const timeOfDayText = $("<p>");
        timeOfDayText.text(timeOfDay[i]);
        $(".timeSlot").append(timeOfDayText);

        const textArea = $('<textarea type="text" name="textinput">');
        textArea.addClass("typeHere");
        $(".timeSlot").append(textArea);

        const saveButton = $('<input type="button" name="save" rows="3">');
        saveButton.addClass("clickToSave");
        $(".timeSlot").append(saveButton);

    };

 
 //When Save button is clicked ... 
$(".clickToSave").on("click", function() {  
    const inputText = ($(this).siblings("input").val());
    localStorage.setItem('textinput', inputText);  //Saves to localStorage
    displays();
});
//Have localStorage information stay displayed, even with page refresh

function displays () {
    const stuff = localStorage.getItem('textinput');
    $(".typeHere").text('textinput');
}
 
 
 
 
 
 
    // $('.clickToSave').on('click', function() {
    //     const textArea = $('.typeHere');
    //     localStorage.setItem(textArea, ("input").val());
    //     const storedValue = localStorage.getItem("textarea");
    //     ttextArea.text(storedValue); 

    // });

    



    // timeOfDayText.attr("data-time", timeOfDay[i]);

});
