
// call the function
autoUpdate();


function autoUpdate(){

// VARIABLES

    var today = new Date();
    let hoursToday    = today.getHours();
    let minutesToday  = today.getMinutes();
    let secondsToday  = today.getSeconds(); 
    let monthToday    = today.getMonth();
    let dayToday      = today.getDay();
    let dateToday     = today.getDate();
    let yearToday     = today.getFullYear();
    let ampm;
    

// TIME DISPLAY ---------------------------------------------------------

    // Leading Zero
    if (minutesToday < 10) {
        minutesToday = "0" + minutesToday;
    }  
    if (secondsToday < 10) {
        secondsToday = "0" + secondsToday;
    }
    
    // AM-PM
    if (hoursToday <= 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }

    // Correct format - hours - military    
    if (hoursToday === 00 || hoursToday === 0) {
        hoursToday = 12;
    } else if (hoursToday > 12) {
        hoursToday = hoursToday - 12;
    }      
    
    //display TIME in HTML 
    var timeDisplay = [`${hoursToday}:${minutesToday}:${secondsToday} ${ampm}`];
    document.getElementById("time").innerHTML   = timeDisplay;


// DATE DISPLAY ---------------------------------------------------------
    //day of the week - calculation for presentation
    switch (dayToday) {
            case 0:
                dayToday = "Sunday";
            break;
            case 1:
                dayToday = "Monday";
            break;
            case 2:
                dayToday = "Tuesday";
            break;
            case 3:
                dayToday = "Wednesday";
            break;
            case 4:
                dayToday = "Thursday";
            break;    
            case 5:
                dayToday = "Friday";
            break;
            case 6:
                dayToday = "Saturday";
            break;
    }    

    //month - calcualation for presentation
    switch (monthToday) {
            case 0:
                monthToday = "January";
            break;
            case 1:
                monthToday = "February";
            break;
            case 2:
                monthToday = "March";
            break;
            case 3:
                monthToday = "April";
            break;
            case 4:
                monthToday = "May";
            break;    
            case 5:
                monthToday = "June";
            break;
            case 6:
                monthToday = "July";
            break;
            case 7:
                monthToday = "August";
            break;
            case 8:
                monthToday = "September";
            break;
            case 9:
                monthToday = "october";
            break;
            case 10:
                monthToday = "November";
            break;
            case 11:
                monthToday = "December";
            break;    
            case 5:
                monthToday = "June";
            break;
            case 6:
                monthToday = "July";
            break;
            }    
  
    //Date endings (st,rd,th)
    if (dateToday === 01 || dateToday === 21 || dateToday === 31) {
                dateToday = dateToday +"st";
    }  else if (dateToday === 02|| dateToday === 22) {
                dateToday = dateToday +"nd";
    }  else if (dateToday === 03 || dateToday === 23) {
                dateToday = dateToday + "rd";
    }  else {
                dateToday= dateToday + "th";
    }
       
    //display DATE in HTML
    var dateDisplay = [`${dayToday}, ${monthToday} ${dateToday} ${yearToday}`];
    document.getElementById("date").innerHTML = (dateDisplay);


    // set auto re-fresh
    setInterval(autoUpdate,1000);

}


