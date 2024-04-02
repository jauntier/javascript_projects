function sum1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

const n = 20;
console.log(sum1(n));
