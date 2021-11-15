console.log('#####################################################');
console.log('Week 2 - Day 2')
console.log('Tuwaiq Academy   JS')
console.log('#####################################################');




//The Homework & Activities
const favCities = ['Makkah', 'Medina', 'Jeddah']
function returnElement(indexNum) {
    return 'favorite city: ' + (indexNum[1])
}
console.log(returnElement(favCities));

const favCities = ['Makkah', 'Medina', 'Jeddah']
function returnFirstElement(indexNum) {
    return 'favorite city: ' + (indexNum[0])
}
console.log(returnFirstElement(favCities));

const favCities = ['Makkah', 'Medina', 'Jeddah']
function arrayLength(indexNum) {
    return 'Best three cities of all time: ' + (indexNum.length)
}
console.log(arrayLength(favCities));

const favCities = ['Makkah', 'Medina', 'Jeddah']
function returnElements(indexNum) {
    return 'Best three cities of all time: ' + (indexNum)
}
console.log(returnElements(favCities));

const arr = [67,12,14,16];
  function rnumbers(arrs)
  {
    for (var i=0;i<arrs.length ;i++)
    {
      if (arrs[i] > 15) 
      {
        console.log(arrs[i])}
      }
  }
rnumbers(arr)