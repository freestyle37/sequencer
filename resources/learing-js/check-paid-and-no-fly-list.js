"use strict";

document.addEventListener("DOMContentLoaded", function() {
  let passengers = [
    {
      name: "Jane Dodloop",
      paid: true
    },
    {
      name: "Dr. Evil",
      paid: true
    },
    {
      name: "Sue Property",
      paid: false
    },
    {
      name: "John Funcall",
      paid: true
    }
  ];

  //let allCanFly = processPassengers(passengers, checkNoFlyList);
  //console.log(allCanFly);
  /*
  if (allCanFly.status === false) {
    console.log(allCanFly.name + "ne letit");
  }
  */

});

  let passengers2 = [
    {
      name: "Jane Dodloop",
      paid: true
    },
    {
      name: "Dr. Evil",
      paid: true
    },
    {
      name: "Sue Property",
      paid: false
    },
    {
      name: "John Funcall",
      paid: true
    }
  ];


//if processPassengers return true then airplane can fly
function processPassengers(arr, testFunction) {
  for (let i=0; i<arr.length; i++) {
    //console.log(testFunction(arr[i]));
    let testFuncRes = testFunction(arr[i]);
    if ( (typeof testFuncRes === 'object') && testFuncRes.status === true) {
      return {
        status: false,
        name: arr[i].name,
        check: testFuncRes.check
      }
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  if (passenger.name === "Dr. Evil") {
    return {
      status: true,
      name: passenger.name,
      check: "no fly list"
    }
  } else return false;
}

function checkNoPaid(passenger) {
  if (passenger.paid === false) {
    return {
      status: true,
      name: passenger.name,
      check: "no paid"
    }
  } else return false;
}


let res = processPassengers(passengers2, checkNoFlyList);
if ( (typeof res === 'object') && res.status === false ) {
  console.log("vot iz-za etogo mudaka: " + res.name + " vi nikuda ne letite =>" + res.check);
}
//console.log(res);
let res2 = processPassengers(passengers2, checkNoPaid);
if ( (typeof res2 === 'object') && res2.status === false ) {
  console.log("vot iz-za etogo mudaka: " + res2.name + " vi nikuda ne letite =>" + res2.check);
}