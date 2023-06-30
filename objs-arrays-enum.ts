// const person:{
//     name:string;
//     age:number,
//     hobbise:string[],
//     role:[number,string]
// } = {
//   name: "Maxinmilian",
//   age: 30,
//   hobbise:['Sports','Cooking'],
//   role:[2,'author']
// };

// const ADMIN = 0;
// const RED_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN = 'ADMIN',READ_ONLY =100,AUTHOR="AUTHOR"};
const person = {
  name: "Maxinmilian",
  age: 30,
  hobbise:['Sports','Cooking'],
  role:Role.AUTHOR
};
// person.role.push('admin')
// person.role = [0,'author']
// person.role[1] = 10
let favoriteActivities :string []
favoriteActivities = ["Sports"]
// console.log(person.name);

for (const hobby of person.hobbise){
    console.log(hobby.toUpperCase());
    
}
if(person.role === Role.AUTHOR){
  console.log("IS admin");
  
}