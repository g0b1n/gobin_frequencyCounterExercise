// add whatever parameters you deem necessary
function isSubsequence(sequence, target) {
    let i = 0;
    let j = 0;

    while (j < target.length) {
        if (sequence[i] === target[j]) {
            i++;
        }
        j++;

        // If all characters of sequence are found
        if (i === sequence.length) {
            return true;
        }
    }

    // If we finish iterating target and didn't find all characters of sequence
    return false;
}