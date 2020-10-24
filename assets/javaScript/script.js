    // current Time
let currentTime = function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
    // updates current time every second
$("#currentDay").text(setInterval(currentTime, 1000));


$(".saveBtn").on("click", function() {
    // grab value of text area
    let input =  $(this).siblings("textarea").val();
    // grab id of parent
    let hour =  $(this).parent().attr('id');

    localStorage.setItem(hour, input);
});
    // changes color bases on time
function colorChanger() {
        // moment of current time
    var currentHour = moment().hours();

    $(".time-block").each(function () {
        var hour = parseInt($(this).attr('id').split('-')[1]);
        if (currentHour > hour) {
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
colorChanger();
var check = setInterval(colorChanger, 1500);

$("#hr-9 .text").val(localStorage.getItem("hr-9"));
$("#hr-10 .text").val(localStorage.getItem("hr-10"));
$("#hr-11 .text").val(localStorage.getItem("hr-11"));
$("#hr-12 .text").val(localStorage.getItem("hr-12"));
$("#hr-13 .text").val(localStorage.getItem("hr-13"));
$("#hr-14 .text").val(localStorage.getItem("hr-14"));
$("#hr-15 .text").val(localStorage.getItem("hr-15"));
$("#hr-16 .text").val(localStorage.getItem("hr-16"));

