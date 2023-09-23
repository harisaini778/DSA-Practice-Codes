
const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(cleanStr);

    if (cleanStr.length <= 1) {
        return true;
    }

    let left = 0;
    let right = cleanStr.length - 1;

    while (left <= right) {
        if (cleanStr[left] != cleanStr[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;
}
const inputStr = "313"; //A man, a plan, a canal, Panama
console.log(isPalindrome(inputStr));