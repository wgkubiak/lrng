console.log('------\nNumber, string and boolean types\n------');

const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const res = n1 + n2;

    if(!showResult) return res;

    console.log(phrase + res);
}

const n1 = 5;
const n2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(n1, n2, printResult, resultPhrase);

console.log('------\nObject types\n------');

const person: {
    name: string,
    age: number
} = {
    name: 'Wojtek',
    age: 30
};

console.log(person.name);

console.log('------\nArray types\n------');

const hobbies = ['Sports', 'Cooking'];
let favouriteActivities: string[];

favouriteActivities = ['Sports'];

for(const hobby of hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // Error!
}

console.log('------\nTuple type - fixed length array\n------');

const user: {
    role: [number, string]
} = {
    role: [2, 'author']
};

// user.role.push('admin'); // Error not visible for TS
// person.role[1] = 10; // Error
// person.role = [0, 'admin', 'user']; // Length error

user.role.push(1, 'admin');

console.log(user.role);

console.log('------\nEnums\n------');

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR}; // 5 -> 6 -> 7

const worker = {
    role: Role.AUTHOR
};

if(worker.role === Role.AUTHOR) {
    console.log(worker.role);
}

console.log('------\nAny type\n------');

const values: any[] = [1, 'Wojtek', 15, false];

console.log(values);

console.log('------\nUnion types\n------');

const combine = (inp1: number | string, inp2: number | string) => {
    let res;
    if(typeof inp1 === 'number' && typeof inp2 === 'number') {
        res = inp1 + inp2;
    } else {
        res = inp1.toString() + inp2.toString();
    }
    return res;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Wojtek', 'Anna');
console.log(combinedNames);

console.log('------\nLiteral types\n------');

enum Conversions { AS_TEXT, AS_NUMBER};

const addValues = (inp1: number | string, inp2: number | string, resultConversion: Conversions.AS_TEXT | Conversions.AS_NUMBER) => {
    let res;
    if(typeof inp1 === 'number' && typeof inp2 === 'number' || resultConversion === Conversions.AS_NUMBER) {
        res = +inp1 + +inp2;
    } else {
        res = inp1.toString() + inp2.toString();
    }

    return res;

    // if(resultConversion === 'as-number') {
    //     return +res;
    // } else {
    //     return res.toString();
    // }
}

const addAges = addValues(30, 26, Conversions.AS_NUMBER);
const addStringAges = addValues('30', '26', Conversions.AS_NUMBER);
const addNames = addValues('Wojtek', 'Anna', Conversions.AS_TEXT);

console.log(addAges);
console.log(addStringAges);
console.log(addNames);

console.log('------\nType aliases / Custom types\n------');

type Combinable = number | string;

const sub = (inp1: Combinable, inp2: Combinable) => {
    let res;
    if(typeof inp1 === 'number' && typeof inp2 === 'number') {
        res = +inp1 - +inp2;
    } else {
        res = 'Can\'t subtract string!';
    }

    return res;
};

console.log(sub(4, 2));
console.log(sub('Wojtek', 'K'));