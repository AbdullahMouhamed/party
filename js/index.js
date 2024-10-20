"use strict"
jQuery(function () {
    //~ nav functions
    $(".open").on("click", function () {
        $(".slide-menu").animate({ width: "250px" }, 700);
        $(".open").animate({ left: "250px" }, 700);
    })
    $(".close").on("click", function () {
        $(".slide-menu").animate({ width: "0" }, 1000);
        $(".open").animate({ left: "0" }, 1000);
    })
    $(".move-to").click(function () {
        let sectionId = $(this).attr("href");
        let positionOfSection = $(sectionId).offset().top;
        $("html , body").animate({ scrollTop: positionOfSection }, 500);
    })
    // ? singers
    $(".toggle").click(function () {
        $(this).next().slideToggle(1000)
        $(".paragraph").not($(this).next()).slideUp(1000)
    })

    // ! duration count down


    let countDownDate = new Date("Oct 5, 2025 15:37:25").getTime();


    let x = setInterval(function () {


        let now = new Date().getTime();


        let dif = countDownDate - now;


        let days = Math.floor(dif / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dif % (1000 * 60)) / 1000);
        $(".days").html(`${days} D`)
        $(".hours").html(`${hours} h`)
        $(".min").html(`${minutes} m`)
        $(".sec").html(`${seconds} s`)

    }, 1000);

    //^ text area countdown
    let maxChar = 100;
    $("#textarea").keyup(function () {
        let textareaLength = $("#textarea").val().length
        let charLeft = maxChar - textareaLength
        if (charLeft <= 0) {
            $(".nums").text("your chars has ended")
            $(".text").text("")
        } else {
            $(".nums").text(charLeft)
            $(".text").text("chars left")
        }
    })



})