// add whatever parameters you deem necessary
function constructNote(message, letters) {
    // coun frequncy of each letter in message and letters
    const messageFreq = {};
    const lettersFreq = {};

    // Function to count frequencies in a string
    const countFrequencies = (str, freq) => {
        for (let char of str) {
            freq[char] = (freq[char] || 0) + 1;
        }
    };

    countFrequencies(message, messageFreq);
    countFrequencies(letters, lettersFreq);

    // compare frequency
    for (let char in messageFreq) {
        if (!lettersFreq[char] || lettersFreq[char] < messageFreq[char]) {
            return false;
        }
    }

    // if all characters in message can be matched with available letters
    return true;
}
