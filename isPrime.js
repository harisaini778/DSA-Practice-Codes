const isPrime = (n) => {
    const num = parseInt(n);
    if (num === 1) {
        return false;
    } else {
        for (i = 2; i <= n; i++){
            if (num % i === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}
console.log(isPrime(23));