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

function getCityEntries(array) {
  const result = [];
  const uniqueCities = getUniqueCities(array);

  uniqueCities.forEach(item => {
    result.push({
      name: item,
      entries: array.filter(city => city["departure city"] === item).map(city => ({
        'entry_id': city.entry_id
      }))
    })
  });


  return result;
}

function getUniqueCities(array) {
  return array.map(item => item["departure city"]).filter((v, i, a) => a.indexOf(v) === i);
}

console.log(getCityEntries(arr))