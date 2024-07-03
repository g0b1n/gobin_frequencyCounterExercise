// add whatever parameters you deem necessary
function longestFall(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let maxFallLength = 1;
    let currentFallLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            currentFallLength++;
        } else {
            maxFallLength = Math.max(maxFallLength, currentFallLength);
            currentFallLength = 1;
        }
    }

    // Final check to update maxFallLength after loop
    maxFallLength = Math.max(maxFallLength, currentFallLength);

    return maxFallLength;
}
