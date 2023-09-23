// For binary search the array should be sorted

const binarySearch = (arr,target) => {

    let left = 0;
    let right = arr.length - 1;
 

    while (left <= right) {
       let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else {
            if (target > arr[mid]) {
                left = mid + 1;
            } else {
                if (target < arr[mid]) {
                    right = mid - 1;
                }
            }
        }
    }
}
console.log(binarySearch([10, 20, 30, 40, 50, 60], 50));