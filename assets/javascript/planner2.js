$(document).ready(function () {
    let todayDateTime = $("#currentDay");

    

    //set intervl so that time changes without reloading page
    setInterval(() => {
        const now = moment();
        const dateTime = now.format('dddd, MMMM Do, hh:mm a');
        todayDateTime.text(dateTime);

        let currentTime = moment().format("H");

        function classUpdate(time, idClass) {
            if (currentTime > time) {
                $(idClass).addClass("afterHour");
                $(idClass).removeClass("beforeHour");
                // $(idClass).attr("disabled", "disabled");
            } else if (currentTime == time) {
                $(idClass).addClass("rightNow");
            }
        }

        //call the class updates from the above function
        classUpdate(9, "#nineA");
        classUpdate(9, ".btn9a");
        classUpdate(10, "#tenA");
        classUpdate(10, ".btn10a");
        classUpdate(11, "#elevenA");
        classUpdate(11, ".btn11a");
        classUpdate(12, "#twelveP");
        classUpdate(12, ".btn12p");
        classUpdate(13, "#oneP");
        classUpdate(13, ".btn1p");
        classUpdate(14, "#twoP");
        classUpdate(14, ".btn2p");
        classUpdate(15, "#threeP");
        classUpdate(15, ".btn3p");
        classUpdate(16, "#fourP");
        classUpdate(16, ".btn4p");
        classUpdate(17, "#fiveP");
        classUpdate(17, ".btn5p");
 
    }, 1000);

    let inputArray = [{}];

    //function for save button
    $(".btn").click(function () {
        console.log("you clicked the button!");
        //save input to local storage
        $('input[type="text"]').each(function(){    
            var id = $(this).attr('id');
            var value = $(this).val();
           inputArray.push(id, value); 
            console.log(inputArray);
            localStorage.setItem(id, value);
        }); 
        

       

    });




});
