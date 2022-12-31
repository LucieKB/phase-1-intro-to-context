function createEmployeeRecord(array){
    const employee = {}
    employee.firstName = array[0];
    employee.familyName = array[1];
    employee.title = array[2];
    employee.payPerHour = array[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    

    return employee
}

// console.log(createEmployeeRecord(["Jill", "Lee", "CEO", 1000]))

function createEmployeeRecords(arrays){
 return arrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(employee, dateStamp){
 let [date, time] = dateStamp.split(" ")
 employee.timeInEvents.push({
    type : "TimeIn",
    hour : parseInt(time),
    date : date})

   
 
    return employee
}

function createTimeOutEvent(employee, dateStamp){
    let [date, time] = dateStamp.split(" ")
 employee.timeOutEvents.push({
    type : "TimeOut",
    hour : parseInt(time),
    date : date})

    return employee
 }

 function hoursWorkedOnDate(employee, someDate){
    

     const timeIn = employee.timeInEvents.find(object => object.date === someDate)
     const timeOut = employee.timeOutEvents.find(object => object.date === someDate)

 let hoursWorked = (timeOut.hour) - (timeIn.hour)

     return hoursWorked/100
 }

 function wagesEarnedOnDate(employee, someDate){
    const hourlyPay = employee.payPerHour
    console.log(hoursWorkedOnDate(employee, someDate)*hourlyPay)

    return hoursWorkedOnDate(employee, someDate)*hourlyPay
 }
 
 function allWagesFor(employee){
    let datesWorked = employee.timeInEvents.map(function(worker){
        console.log (worker.date)
        return (worker.date)
    })
       let wagesDue = datesWorked.reduce(function(accumulator, date){
        return accumulator + wagesEarnedOnDate(employee,date)
       },0) 

       console.log (wagesDue)
       return wagesDue
    }

function whoIsThatEmployee(array,familyName){
    return array.find(function(thatEmployee){
        return thatEmployee.familyName === familyName 
    })
}

function calculatePayroll(arrayOfEmployees){
        let payRoll = arrayOfEmployees.reduce(function(accumulator, thatEmployee){
            return accumulator + allWagesFor(thatEmployee)},0)
        
        return payRoll
    }

