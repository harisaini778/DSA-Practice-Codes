
const insertionSort = (arr) => {
      
    let newArr = arr;

    let key, j;

    for (let i = 1; i < newArr.length; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return newArr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));