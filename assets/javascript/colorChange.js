$(document).ready(function () {
    let todayDateTime = $("#currentDay");
    
    
    $(".change-blue").click(function() {
        $('.jumbotron-style').css({"background-image":"-webkit-linear-gradient(#5555ce, skyblue)"});
        $('.btn-style').css({"background-color":"skyblue"});
        
    });
    $(".change-purple").click(function() {
        $('.jumbotron-style').css({"background-image":"-webkit-linear-gradient(#983fb1, #cda8db)"});
        $('.btn-style').css({"background-color":"#cda8db"});
        
    });
    $(".change-green").click(function() {
        $('.jumbotron-style').css({"background-image":"-webkit-linear-gradient(#3fb158, #9ddb9b)"});
        $('.btn-style').css({"background-color":"#9ddb9b"});
        
    });
    $(".change-orange").click(function() {
        $('.jumbotron-style').css({"background-image":"-webkit-linear-gradient(#ffa723, #ffdc91)"});
        $('.btn-style').css({"background-color":"#ffdc91"});
        
    });
    $(".change-pink").click(function() {
        $('.jumbotron-style').css({"background-image":"-webkit-linear-gradient(#f06493, pink)"});
        $('.btn-style').css({"background-color":"pink"});
        
    });
    $(".change-clear").click(function() {
        $('.jumbotron-style').css({"background-image":"-webkit-linear-gradient(white, #b6b6b6)"});
        $('.btn-style').css({"background-color":"#b6b6b6"});
        
    });
    
    
       
    });