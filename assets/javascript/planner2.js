$(document).ready(function () {
let todayDateTime = $("#currentDay");

    setInterval(() => {
        const now = moment();
        const dateTime = now.format('dddd, MMMM Do, hh:mm a');
        todayDateTime.text(dateTime);
    }, 1000);

    const timeOfDay = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


   
});
