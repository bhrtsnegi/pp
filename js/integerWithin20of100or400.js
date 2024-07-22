const testHundred = (x) => 
    (Math.abs(100-x)<=20) || (Math.abs(400-x)<=20);

console.log(testHundred(99));
console.log(testHundred(140));