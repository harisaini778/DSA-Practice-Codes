class Sort {
    BubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++){
            for (let j = 0; j < n - i - 1; j++){
                if (arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.log(arr);
  }
}
const obj = new Sort();
obj.BubbleSort([11,1,5,9,12,4])