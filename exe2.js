// function fibonacci_sequence(n){
//     for (y = 0; x<=n; y++){
//         let z = x.split();
//         let x = z.length;
//         z.length == n;
//         let y= z[x];
//         y= z[x-1] + z[x-2];
//         return y;
//     }
// }
// console.log(fibonacci_sequence(9));
function fibonacci_sequence(n) {
    if (n == 0) {
        return [];
    } else if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0, 1];
    } else {
        let sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
}


console.log(fibonacci_sequence(5)); 
