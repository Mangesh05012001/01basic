//  Dates

let myData = new Date()
 
console.log(myData.toString())
console.log(myData.toLocaleDateString())
console.log(myData.toLocaleTimeString())

// let myCreatedDate = new Date(2024,6,19)
// let myCreatedDate = new Date(2024,6,19 ,5,3)
// let myCreatedDate = new Date("2024-01-19")
let myCreatedDate = new Date("01-19-2024")



// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


// console.log(`${newDate.getDay()}and the time`);

newDate.toLocaleString('defult',{
    weekday:"long"
})