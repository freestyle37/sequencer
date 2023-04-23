let arr = [
  {
    "departure_city": "Moscow",
    "entry_id": 1
  },
  {
    "departure_city": "Spb",
    "entry_id": 2
  },
  {
    "departure_city": "Minsk",
    "entry_id": 3
  },
  {
    "departure_city": "Spb",
    "entry_id": 4
  },
  {
    "departure_city": "Moscow",
    "entry_id": 5
  }
]

let arr1 = arr.reduce((res,item) => {   
  let index = res.findIndex(el=>el.name == item.departure_city);
  if (index != -1){
    res[index]?.entries.push({'entry_id':item.entry_id});
  } else res.push({'name':item.departure_city,'entries':[{'entry_id':item.entry_id}]})
  return res
},[])

console.log(arr1)