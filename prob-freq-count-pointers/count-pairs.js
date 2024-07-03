// add whatever parameters you deem necessary
function countPairs(array, target) {
    let pairs = {};
    let count = 0;

    for (let num of array) {
        let complement = target - num;
        
        // Check if complement exists in pairs
        if (pairs[complement]) {
            count += pairs[complement];
        }

        // Add current num to pairs or increment count
        pairs[num] = pairs[num] ? pairs[num] + 1 : 1;
    }

    return count;
}