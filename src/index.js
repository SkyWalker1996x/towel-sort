function towelSort(matrix) {
    if (!matrix) return []
    let newArray = [];

    const determineParity = (item, index) => {
        return index % 2 === 0 ? [...item] : [...item.reverse()]
    }

    matrix.forEach((item, index) => {
        newArray = [...newArray, ...determineParity(item, index)]
    })

    return newArray;
}

module.exports = towelSort;
