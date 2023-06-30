function combine(
  input1: number | string,
  input2: number | string,
  resuleConversion: 'as-number'|'as-text'
) {
  let resule;
  if (typeof input1 === "number" && typeof input2 === "number"|| resuleConversion === 'as-number') {
    resule = +input1 + +input2;
  } else {
    resule = input1.toString() + input2.toString();
  }
  return resule
//   if (resuleConversion === "as-number") {
//     return +resule;
//   } else {
//     return resule.toString();
//   }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAge = combine("30", "26", "as-number");
console.log(combinedStringAge);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
