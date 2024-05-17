function processArray(myArray) {
    return myArray.map(
        number => number % 2 === 0 ? number ** 2 : number ** 3
    );
}
function formatArrayStrings (strings, numbers) {

    return strings.map((str, index) => 
        (numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase())
    );
};

