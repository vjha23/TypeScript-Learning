export interface HasFormatter {
    format(): string
}

//interfaces
// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: isPerson = {
//     name: 'Vijay',
//     age: 21,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log(`I spent `, amount);
//         return amount;
//     }
// }

// console.log(me);
// const greetPerson = (person: isPerson) => {
//     console.log(`Hello`, person.name);

// }
// greetPerson(me)