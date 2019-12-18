$(document).ready(function () {
    let todayDateTime = $("#currentDay");
    
    const timeOfDay = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

    setInterval(() => {
        const now = moment();
        const dateTime = now.format('dddd, MMMM Do, hh:mm a');
        todayDateTime.text(dateTime);

        let currentTime = moment().format("H");

        if (currentTime > 9) {
            $("#nineA").addClass("afterHour");
            $("#nineA").attr("disabled", true);
            $("#nineA").removeClass("beforeHour");
            $(".btn9a").attr("disabled", "disabled");
        } else if (currentTime == 9) {
            $("#nineA").addClass("rightNow")
        }

        if (currentTime > 10) {
            $("#tenA").addClass("afterHour");
            $("#tenA").attr("disabled", true);
            $("#tenA").removeClass("beforeHour");
            $(".btn10a").attr("disabled", "disabled");
        } else if (currentTime == 10) {
            $("#tenA").addClass("rightNow")
        }

        if (currentTime > 11) {
            $("#elevenA").addClass("afterHour");
            $("#elevenA").attr("disabled", true);
            $("#elevenA").removeClass("beforeHour");
            $(".btn11a").attr("disabled", "disabled");
        } else if (currentTime == 11) {
            $("#elevenA").addClass("rightNow")
        }

        if (currentTime > 12) {
            $("#twelveP").addClass("afterHour");
            $("#twelveP").attr("disabled", true);
            $("#twelveP").removeClass("beforeHour");
            $(".btn12p").attr("disabled", "disabled");
        } else if (currentTime == 12) {
            $("#twelveP").addClass("rightNow")
        }

        if (currentTime > 13) {
            $("#oneP").addClass("afterHour");
            $("#oneP").attr("disabled", true);
            $("#oneP").removeClass("beforeHour");
            $(".btn1p").attr("disabled", "disabled");
        } else if (currentTime == 13) {
            $("#oneP").addClass("rightNow")
        }

        if (currentTime > 14) {
            $("#twoP").addClass("afterHour");
            $("#twoP").attr("disabled", true);
            $("#twoP").removeClass("beforeHour");
            $(".btn2p").attr("disabled", "disabled");
        } else if (currentTime == 14) {
            $("#twoP").addClass("rightNow")
        }

        if (currentTime > 15) {
            $("#threeP").addClass("afterHour");
            $("#threeP").attr("disabled", true);
            $("#threeP").removeClass("beforeHour");
            $(".btn3p").attr("disabled", "disabled");
        } else if (currentTime == 15) {
            $("#threeP").addClass("rightNow")
        }

        if (currentTime > 16) {
            $("#fourP").addClass("afterHour");
            $("#fourP").attr("disabled", true);
            $("#fourP").removeClass("beforeHour");
            $(".btn4p").attr("disabled", "disabled");
        } else if (currentTime == 16) {
            $("#fourP").addClass("rightNow")
        }

        if (currentTime > 17) {
            $("#fiveP").addClass("afterHour");
            $("#fiveP").attr("disabled", true);
            $("#fiveP").removeClass("beforeHour");
            $(".btn5p").attr("disabled", "disabled");
        } else if (currentTime == 17) {
            $("#fiveP").addClass("rightNow")
        }

    }, 1000);

    $(".btn").click(function() {
        console.log("you clicked the button!");
        
    })

});
