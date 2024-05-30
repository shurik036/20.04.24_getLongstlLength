const getLongestLength = (str) => {
    let sequence = '';
    let maxLength = 0;
    for (const char of str) {
        const index = sequence.indexOf(char);
        sequence += char;
        if (index !== -1) {
            sequence = sequence.slice(index + 1);
        }
        const sequenceLength = sequence.length;
        if (sequenceLength > maxLength) {
            maxLength = sequenceLength;
        }
    }
    return maxLength;
};

console.log(getLongestLength('abcdeef')); // 5
console.log(getLongestLength('jabjcdel')); // 7
console.log(getLongestLength('')); // 0