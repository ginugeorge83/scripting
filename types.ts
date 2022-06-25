//const person: {
//    name: string;
//    age: number;
//} = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Ginu',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

const ADMIN = 'ADMIN';

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person_two = {
    role: Role.ADMIN
};

if (person_two.role == Role.ADMIN)
{
    console.log("Role is admin");
}

//person.role.push('admin');
//person.role[1] = 10;

person.role = [0, 'admin'];

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

// any type
let compositeArray: any[];
compositeArray = ['string', 12];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}