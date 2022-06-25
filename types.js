"use strict";
//const person: {
//    name: string;
//    age: number;
//} = {
const person = {
    name: 'Ginu',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
const ADMIN = 'ADMIN';
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person_two = {
    role: Role.ADMIN
};
if (person_two.role == Role.ADMIN) {
    console.log("Role is admin");
}
//person.role.push('admin');
//person.role[1] = 10;
person.role = [0, 'admin'];
let favouriteActivities;
favouriteActivities = ['Sports'];
// any type
let compositeArray;
compositeArray = ['string', 12];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
