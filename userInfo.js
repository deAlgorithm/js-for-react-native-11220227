function userInfo(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error('Names and modifiedNames must be the same length');
    }

    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

console.log(userInfo(['John', 'Paul', 'George', 'Ringo'], ['john', 'PAUL', 'george', 'RINGO']));
