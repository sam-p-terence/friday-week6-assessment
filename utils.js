function shuffleArray(array) {

    let arrCopy = [1, "test", true, 2]
    
    for (let i = arrCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    }
    return arrCopy
}

module.exports = {
    shuffleArray
}