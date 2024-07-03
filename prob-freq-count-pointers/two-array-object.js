// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};

    // Iterate through keys array
    for (let i = 0; i < keys.length; i++) {
        // Check if there's a corresponding value in values array
        // If not, assign null
        obj[keys[i]] = i < values.length ? values[i] : null;
    }

    return obj;
}
