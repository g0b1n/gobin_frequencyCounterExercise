// add whatever parameters you deem necessary
function separatePositive(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        // move left pointer to find negative number
        while (array[left] > 0) {
            left++;
        }

        // move right pointer to find positive number
        while (array[right] < 0) {
            right--;
        }

        // swap elements if left < right
        if (left < right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }

    return array;
}