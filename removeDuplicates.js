// given array must be already sorted

const removeDuplicates = (arr,n) => {
     
    if (n === 0 || n === 1) {
        return arr;
    }

    let newArr = arr;
    let uniqueIndex = 0;

    for (let i = 1; i < n; i++){
        
        if (newArr[i] != newArr[uniqueIndex]) {
            uniqueIndex++;
            newArr[uniqueIndex] = newArr[i];
        }
    }
    console.log(newArr);
    const uniqueArr = newArr.slice(0, uniqueIndex + 1);
    return uniqueArr;
}
console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 6], 11));
// output[1,2,3,4,5,6]