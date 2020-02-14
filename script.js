//  window.onload = function() {
//          var x = document.getElementById("click");
//          x.onclick = function() {
//              document.body.innerHTML = Date();
//          }
//      }
// var maleName = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
// var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

// function myFunction() {
//     var d = new Date();
//     var n = d.getFullYear();
//     document.getElementById("click").innerHTML = n;
// }
// returns day of week as a number
// find a way to separate female and male using if and then describe the code to run for each
// function myFunction()
// var d = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var n = d.getDay();
// document.getElementById("click").innerHTML = n;
// document.getElementById("click").innerHTML = days[d.getDay()];
// return ("Kwasi");

// var boy ["Kwasi", "Kwando", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// if (day === Sunday) {
//     return (
// 
function output() {
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var cc = (yy - 1) / 100 + 1;
    var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var girl = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (document.getElementById("gender").checked) {
        var gender = "male";
    } else {
        var gender = "female";
    }
    if (mm < 1 || mm > 12 || (mm == 2 && dd > 29)) {
        alert("INVALID MONTH");
    } else if (dd < 1 || dd > 31) {
        alert("INVALID DAY");
    } else if (Math.ceil(result) == 1 && gender === 'male'); {
        document.getElementById("outcome").innerHTML =
            ("Born on " + days[day] + "and your akan name is" + boy[0]);
    }
    if (Math.ceil(result) == 2 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Born on monday ,your akan name is " + boy[1]);

    } else if (Math.ceil(result) == 3 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Born on tuesday ,your akan name is " + boy[2]);
    } else if (Math.ceil(result) == 4 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Born on wednesday,your akan name is " + boy[3]);
    } else if (Math.ceil(result) == 5 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Born on thursday,your akan name is " + boy[4]);
    } else if (Math.ceil(result) == 6 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Born on friday,your akan name is " + boy[5]);
    } else if (Math.ceil(result) == 0 && gender === 'male') {
        document.getElementById("outcome").innerHTML =
            ("Born on saturday,your akan name is " + boy[6]);
    } else if (Math.ceil(result) == 1 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Born on monday ,your akan name is " + girl[0]);
    } else if (Math.ceil(result) == 2 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Born on Tuesday,your akan name is " + girl[1]);
    } else if (Math.ceil(result) == 3 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Born on Wednesday,your akan name is " + girl[2]);
    } else if (Math.ceil(result) == 4 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Born on Thursday,your akan name is " + girl[3]);
    } else if (Math.ceil(result) == 5 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Born on Friday,your akan name is " + girl[4]);
    } else if (Math.ceil(result) == 6 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Born on Saturday,your akan name is " + girl[5]);
    } else if (Math.ceil(result) == 0 && gender === 'female') {
        document.getElementById("outcome").innerHTML =
            ("Born on Sunday,your akan name is " + girl[6]);
    }
}