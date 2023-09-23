
const isArmstrong = (number) => {

    if (number < 0 || !Number.isInteger(number)) {
        return false;
    }

    let temp = number;
    let N = temp.toString();
    let M = N.slice("");
    console.log(M);
    let l = M.length;
    let sum = 0;

    while (temp > 0) {
        
        let rem = temp % 10;
        sum = sum + Math.pow(rem,l);
        temp = Math.floor(temp / 10);
    }

    if (sum === number) {
        return true;
    } else {
        return false;
    }
    
}
console.log(isArmstrong(1634));