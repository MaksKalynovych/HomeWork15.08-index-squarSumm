let arrNum = [3, 6, 4, 7, 2, 1, 9];

alert ( arrNum.indexOf (4));
// Console.log (arrNum.indexOf(7));

// variant 2


let arrNummer = [3, 6, 4, 7, 2, 1, 9].forEach((item, index) => {
    alert(`Element ${item} has index ${index}`);
  });
// ---------------------------------------------------

let arr = [3, 6, 4, 7, 2, 1, 9];

let newArr = [];
for(let i = 0; i < arr.length; i++) {
  let sqr = arr[i] * arr[i];
  newArr.push(sqr); 
  let sum = newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log (sum);
}