console.log('#####################################################');
console.log('Week 2 - Day 2')
console.log('Tuwaiq Academy   JS')
console.log('#####################################################');




//The Homework & Activities
// 1st Point
// دالة تستقبل مصفوفة ورقم انديكس وتقوم بإرجاع العنصر الموجود في هذا المكان
console.log("### 1st Point ###")
// const favCities1 = ['Makkah', 'Medina', 'Jeddah']
// function returnElement(indexNum) {
//     return 'favorite city: ' + (indexNum[1])
// }
// console.log(returnElement(favCities1));
// Teacher Solution
const hw_1=[55, 8, 13, 5]
const hw_2=['Ahmad', 'Ali', 'Mohammad', 'Omar']

function elementIndex(arr,index){
  let output = arr[index]
  return output
  // return arr[index]
}
console.log(elementIndex(hw_1, 2))
console.log(elementIndex(hw_2, 2))
console.log(elementIndex(hw_1, 0))
console.log(elementIndex(hw_2, 0))

console.log("#############################################################")

// 2nd Point
// دالة تستقبل مصفوفة وتقوم بإرجاع العنصر الأول
console.log("### 2nd Point ###")
// const favCities2 = ['Makkah', 'Medina', 'Jeddah']
// function returnFirstElement(indexNum) {
//     return 'favorite city: ' + (indexNum[0])
// }
// console.log(returnFirstElement(favCities2));
// Teacher Solution
function firstElement1(arr) {
  let output = arr[0]
  return output
}
console.log(firstElement1(hw_1))
console.log(firstElement1(hw_2))

console.log("#############################################################")

// 3rd Point
// دالة تستقبل مصفوفة وتقوم بإرجاع طولها
console.log("### 3rd Point ###")
// const favCities3 = ['Makkah', 'Medina', 'Jeddah']
// function arrayLength(indexNum) {
//     return 'Best three cities of all time: ' + (indexNum.length)
// }
// console.log(arrayLength(favCities3));
// Teacher Solution
function arrayLength1(arr) {
  let output = arr.length
  return output
}
console.log(arrayLength1(hw_1))
console.log(arrayLength1(hw_2))

console.log("#############################################################")

// 4th Point
// دالة تستقبل مصفوفة وتقوم بطباعة جميع عناصرها
console.log("### 4th Point ###")
// const favCities4 = ['Makkah', 'Medina', 'Jeddah']
// function returnElements(indexNum) {
//     return 'Best three cities of all time: ' + (indexNum)
// }
// console.log(returnElements(favCities4));
// Teacher Solution
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray(['Homba', 'Gomba', 'Domba']);
printArray([45, 90, 47, 36]);

console.log("#############################################################")

// 5th Point
// دالة تستقبل مصفوفة تتكون من أرقام وتقوم بطباعة الأرقام التي أكبر من 15 فقط
console.log("### 5th Point ###")
// const arr1 = [67,12,14,16];
//   function rnumbers(arrs)
//   {
//     for (let i=0;i<arrs.length ;i++)
//     {
//       if (arrs[i] > 15) 
//       {
//         console.log(arrs[i])}
//       }
//   }
// rnumbers(arr)
// Teacher Solution
function printArrayBiggerThan15(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 15) {
      console.log(arr[i])
    }
  } 
}
printArrayBiggerThan15([-17, 45, 11, 78]);