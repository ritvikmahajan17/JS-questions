function isLeap(year){

    return ((year % 4 == 0) && (year % 100 != 0)) ||
    (year % 400 == 0)? true : false

}

console.log(isLeap(2001))

let checkLeap = (year) => ((year % 4 == 0) && (year % 100 != 0)) ||
(year % 400 == 0)? true : false

console.log(checkLeap(2008))
