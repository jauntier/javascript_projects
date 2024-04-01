let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// console.log(letters[letters.length-10]);

// letters[letters.length-10] = 7;

// console.log(letters);

// letters.unshift(1);
// console.log(letters[0]);
// letters.push(19);
// console.log(letters[letters.length-1] +" " + letters[letters.length-2]);

// letters.shift();
// console.log(letters);

// letters.pop();
// console.log(letters);

// letters.splice(letters.length-3, letters.length-21);
// console.log(letters);

// for (i=0; i < letters.length; i+=1){
//     console.log(letters[i]);
// }

// let tennumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// let symbols = letters.concat(tennumbers);
// console.log(symbols);

// let x = "a,b,c,d,e,f,g,h";
// let x2 = x.split(',');
// console.log(x2[1]);

let colors = ["red", "green", "pink", "yellow", "purple", "blue"];
console.log(colors[1]);
colors.push("gray");

colors.shift();

colors.reverse();

colors.sort();
console.log(colors);
console.log(colors.length);

for (i=0; i < colors.length; i++){
    console.log(colors[i]);
}
colors.pop();
console.log(colors.toString());
// colors.sort();
// colors.reverse();
// console.log(colors);

const person ={
    name: "Marcus Montez",
    age:  26,
    bankbalance: {
        dollaraccount: 243000,
        kenyanaccount: 1000000
    }
};
console.log(person.bankbalance["kenyanaccount"]);
//or console.log(person.bankbalance);