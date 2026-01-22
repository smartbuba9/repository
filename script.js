var str = "text";
var num = 10;
var undef;

console.log(undef);
console.log(Boolean(0));
console.log(Boolean(1));
console.log(num / str);
console.log(typeof num);
console.log(typeof str);

var sum = Number(prompt("Enter the purchase amount:"));
var discount = 0;

if (sum >= 1000) discount = 15;
else if (sum >= 500) discount = 10;
else if (sum >= 100) discount = 5;

var result = sum - (sum * discount / 100);

console.log("sum:", sum);
console.log("discount:", discount + "%");
console.log("result", result);
