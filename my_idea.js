
"use strict";

document.addEventListener("DOMContentLoaded", function() {
  let dpk = [];
  const cities = ["Moscow", "Spb", "Minsk"];
  const arr = [{
    "departure city": "Moscow",
    "entry_id": 1
  }, {
    "departure city": "Spb",
    "entry_id": 2
  }, {
    "departure city": "Minsk",
    "entry_id": 3
  }, {
    "departure city": "Spb",
    "entry_id": 4
  }, {
    "departure city": "Moscow",
    "entry_id": 5
  }];

  cities.forEach(function(element) {
    //console.log(element);
    let res = arr.filter(filterByCity(element));
    dpk.push(res);
  });

  console.log(dpk);

});

function filterByCity(city) {
  return function(item) {
    if (item["departure city"] === city) {
      return true;
    } else return false
  }
}
