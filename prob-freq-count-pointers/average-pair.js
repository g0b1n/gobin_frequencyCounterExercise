// add whatever parameters you deem necessary
function averagePair(array, target) {
    if (array.length === 0) {
        return false;
    }

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const average = (array[left] + array[right]) / 2;
        if (average === target) {
            return true;
        } else if (average < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}