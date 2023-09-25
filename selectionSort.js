
const selectionSort =  (arr) => {

    let newArr = arr;

    for (let i = 0; i < newArr.length; i++) {
       
        let minIndex = i;

        for (let j = i + 1; j < newArr.length; j++){
            
            if (newArr[j] < newArr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            let temp = newArr[minIndex];
            newArr[minIndex] = newArr[i];
            newArr[i] = temp;
        }
  
    }
    return newArr;
};

console.log(selectionSort([12, 11, 13, 5, 6]));