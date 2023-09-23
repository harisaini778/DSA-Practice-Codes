const OptBubbleSort = (arr) => {

    let n = arr.length;
    let swapped;

    for (let i = 0; i < n; i++){

        swapped = false;

        for (let j = 0; j <= n - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }     
        if (swapped === false) {
            break;
       }
    }
    
    return arr;
}
console.log(OptBubbleSort([30, 20, 10, 5, 1, 0]));