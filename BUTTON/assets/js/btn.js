function myMove2(Day2){
    const days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
    let i, l;
    for(i = 0, l = days.length; i < l; i++){
        if(days[i] != Day2){
            document.getElementById(days[i]).style.top = '-420px';
            document.getElementById(days[i]).style.bottom = '-420px';
            document.getElementById(days[i]).style.transition = 'all 0.8s';
        }
    }
}
let id = null;
function myMove(day) {

var elem = document.getElementById(day);   
myMove2(day);
let pos =-420;
clearInterval(id);
id = setInterval(frame, 5);
function frame() {
if (pos != 250) {
document.getElementById(day).style.transition = 'all 0.9s';
if(day == "Monday"){
document.getElementById("Monday").style.borderColor = "rgb(85, 8, 86)";
document.getElementById("Monday").style.backgroundColor = "rgb(85, 8, 86)";
}else if(day == "Tuesday"){
document.getElementById("Tuesday").style.borderColor = "rgb(132, 7, 61)";
document.getElementById("Tuesday").style.backgroundColor = "rgb(132, 7, 61)";
}else if(day == "Wednesday"){
document.getElementById("Wednesday").style.borderColor = "rgb(7, 61, 132)";
document.getElementById("Wednesday").style.backgroundColor = "rgb(7, 61, 132)";
}else if(day == "Thursday"){
document.getElementById("Thursday").style.borderColor = "rgb(5, 105, 7)";
document.getElementById("Thursday").style.backgroundColor = "rgb(5, 105, 7)";
}else if(day == "Friday"){
document.getElementById("Friday").style.borderColor = "rgb(227, 227, 9)";
document.getElementById("Friday").style.backgroundColor = "rgb(227, 227, 9)";
}else if(day == "Saturday"){
document.getElementById("Saturday").style.borderColor = "rgb(198, 97, 8)";
document.getElementById("Saturday").style.backgroundColor = "rgb(198, 97, 8)";
}else if(day == "Sunday"){
document.getElementById("Sunday").style.borderColor = "rgb(152, 4, 4)";
document.getElementById("Sunday").style.backgroundColor = "rgb(152, 4, 4)";
}

pos++;
pos++;
elem.style.top = pos + 'px'; 
elem.style.bottom = pos + 'px';
} else {
    document.getElementById(day).style.backgroundColor = "transparent";
    clearInterval(id);		  

}
}
}
