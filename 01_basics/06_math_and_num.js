const score =400
console.log(score);

const balance = new Number(190)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber =33.4455;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000

console.log(hundreds.toLocaleString( 'en-IN'));

// +++++++++++ Math ++++++++++++

//console.log(Math);
//console.log(Math.abs(-3));  // it gives positive number //
//console.log(Math.round(4.6)); 
//console.log(Math.ceil(4.5));
//console.log(Math.floor(4.1));
//console.log(Math.min(2,3,4,5));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()* 10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min +1)) + min)


