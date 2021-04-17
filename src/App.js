import "./styles.css";

/*Immutability*/
const ram = { father: "dasharat", age: 30 };
const laxman = { ...ram, age: ram.age - 10 };
console.log(ram);
console.log(laxman);

const color = ["pink", "blue", "white", "brown", "black"];
const moreColor = [...color, "green", "yellow"];
console.log(moreColor);
console.log(color);

/*Pure Functions*/
const birthday = (obj) => {
  return { ...obj, age: obj.age + 1 };
};
const person = { name: "shushma", age: 23 };
console.log(birthday(person));
console.log(person);

// Higher Order Functions
const arr = [1, 2, 50, 60, 11, 10];

const moreThanTen = (num) => num > 10;
console.log(arr.filter(moreThanTen));
console.log(arr);

const convertToObject = (num) => {
  return { number: num };
};
console.log(arr.map(convertToObject));
console.log(arr);

const sum = (num1, num2) => num1 + num2;
console.log(arr.reduce(sum, 0));
console.log(arr);

/*Own map using For Loop*/
const ownMap = (array, fun) => {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    newarr[i] = fun(array[i]);
  }
  return newarr;
};
let arr2 = [1, 2, 3, 4, 5];
console.log(ownMap(arr2, convertToObject));
console.log(arr2);

/*Own reduce using For Loop*/
const ownReduce = (array, fun, init) => {
  if (init === undefined) {
    init = 0;
  }
  let res = init;
  for (let i = 0; i < array.length; i++) {
    res = fun(res, array[i]);
  }
  return res;
};
console.log(ownReduce(arr2, sum));
console.log(arr2);
const prod = (num1, num2) => num1 * num2;
console.log(ownReduce(arr2, prod, 1));
console.log(arr2);

/*HomwWork Question*/
console.log("Homework 1a");
const intarr = [1, 2, 3, 4, 220, 5, 10];
const sumOfNum = (num1, num2) => num1 + num2;
const findOddNum = (num) => num % 2 !== 0;
console.log("Sum of Odd Number:" + intarr.filter(findOddNum).reduce(sumOfNum));

console.log("Homework 1b");
const oddIndex = (num) => intarr.indexOf(num) % 2 !== 0;
console.log("Sum of Odd Indices:" + intarr.filter(oddIndex).reduce(sumOfNum));

console.log("Homework 1c");
const max = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};
console.log("Biggest Number:" + intarr.reduce(max, 0));

console.log("Homework 1d");
const divByTen = (num) => num % 10 === 0;
console.log("Divisible by 10:" + intarr.filter(divByTen));

console.log("Homework 1e");
const incOrDec = (num) => (num % 2 === 0 ? num - 1 : num + 1);
console.log(intarr.map(incOrDec));

console.log("Homework 1f");
const sumOfEvenOdd = (total, value) => {
  value % 2 === 0
    ? (total["even"] = total["even"] + value)
    : (total["odd"] = total["odd"] + value);
  return total;
};
console.log(intarr.reduce(sumOfEvenOdd, { even: 0, odd: 0 }));

console.log("Homework 2a");
const strarr = ["apple", "sky", "try", "mango", "kiwi", "grapes", "orange"];
const length = (str) => str.length;
const count = (total, value) => {
  total[value] ? total[value]++ : (total[value] = 1);
  return total;
};
console.log(strarr.map(length).reduce(count, {}));

console.log("Homework 2b");
const findVowel = (str) => {
  return str.search("[aeiouAEIOU]") >= 0 ? true : false;
};
console.log(strarr.filter(findVowel));

console.log("Homework 2c");
const lengthofEachItem = (str) => {
  return { [str]: str.length };
};
console.log(strarr.map(lengthofEachItem));

/*Currying*/
const displayMsg = (name) => (text) => {
  return `${text} ${name}`;
};
const getDisp = displayMsg("Shushma");
console.log(getDisp("welcome"));

/*Composition*/
const userName = (name) => `I'm ${name}`;
const userId = (id) => `My id is ${id}`;
const disp = (username, userid) => {
  return console.log(userName(username), userId(userid));
};
disp("Shushma", "142");

/*The One Homework*/
const increment = (num) => num + 1;
const square = (num) => num * num;
const cube = (num) => num * num * num;
const compose = (...args) => (number) => {
  const somefunc = (acc, val) => {
    return val(acc);
  };
  console.log(args.reduce(somefunc, number));
};
const incrementAndSquare = compose(increment, square, cube);
incrementAndSquare(2);

export default function App() {
  return (
    <div className="App">
      <h1>Functional Programming Assignment</h1>
    </div>
  );
}
