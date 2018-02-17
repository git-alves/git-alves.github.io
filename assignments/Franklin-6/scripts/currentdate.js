var d = new Date;
var day = d.getDate();
var year = d.getFullYear();
var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"];

document.getElementById("currentdate").innerHTML = "<b>" + week[d.getDay()] + ", " + day + " " + month[d.getMonth()] + " " + year + "</b>";



/* Monday, 6 April 2020  */
