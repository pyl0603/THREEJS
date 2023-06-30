function combine(input1, input2, resuleConversion) {
    var resule;
    if (typeof input1 === "number" && typeof input2 === "number" || resuleConversion === 'as-number') {
        resule = +input1 + +input2;
    }
    else {
        resule = input1.toString() + input2.toString();
    }
    return resule;
    //   if (resuleConversion === "as-number") {
    //     return +resule;
    //   } else {
    //     return resule.toString();
    //   }
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAge = combine("30", "26", "as-number");
console.log(combinedStringAge);
var combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
