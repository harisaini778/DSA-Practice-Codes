class Sort {
    InsertionSort(arr) {
        const n = arr.length;

        for (let i = 0; i < n; i++){
            let currElement = arr[i+1];
            let j = i - 1;

            while (j >= 0 && arr[j] > currElement) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j+1] = currElement;
        }
        console.log(arr);
 }
}
let obj = new Sort();
obj.InsertionSort([11,1,5,9,12,4])