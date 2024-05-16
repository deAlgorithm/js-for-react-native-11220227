function processArray(myArray)  {
    return myArray.map(
        number => number % 2 == 0 ? number * 2 : number * 3
    );
    
}