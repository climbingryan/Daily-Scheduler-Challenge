    // current Time
let currentTime = function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
    // updates current time every second
$("#currentDay").text(setInterval(currentTime, 1000));