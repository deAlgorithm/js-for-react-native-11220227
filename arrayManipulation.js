function processArray(myArray) {
    return myArray.map(
        number => number % 2 === 0 ? number ** 2 : number ** 3
    );


}
function formatArrayStrings (strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error('Strings and numbers must be the same length');
    }

    return strings.map((str, index) => 
        (numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase())
    );
};


