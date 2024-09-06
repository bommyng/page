const currentDate = new Date().toDateString();

let dateOff = "2022-03-25";

let datePassed = true
let dateNotPassed = false

function dateCheck () {
    if (dateOff < currentDate) {
        console.log(datePassed)
    }
    else if (dateOff = currentDate) {
        console.log(datePassed)
    }
    else if (dateOff > currentDate) {
     console.log(dateNotPassed);
    }
}

let reSult = dateCheck(dateOff)
return 

