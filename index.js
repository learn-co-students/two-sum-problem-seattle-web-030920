function bruteForceTwoSum(array, sum) {
    const result = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                result.push([array[i], array[j]])
            }
        }
    }
    return result
}

function binarySearchTwoSum(array, sum) {
    const result = []
    array.sort((a, b) => a - b)
    for (let i = 0; i < array.length - 1; i++) {
        if (binaryMatch(array.slice(i + 1, array.length), sum - array[i])){
            result.push([array[i], sum - array[i]])
        }
    }
    return result
}

function binaryMatch(sortedArr, missingNum) {
    let int = Math.floor(sortedArr.length / 2)
    if (sortedArr.length < 2) {
        return sortedArr[0] === missingNum
    } else if (sortedArr[int] === missingNum) {
        return true
    } else if (sortedArr[int] > missingNum) {
        return binaryMatch(sortedArr.slice(0, int), missingNum)
    } else if (sortedArr[int] < missingNum) {
        return binaryMatch(sortedArr.slice(int + 1, sortedArr.length), missingNum)
    }
}

function hashTwoSum(array, sum) {
    const hash = {}
    const result = []
    array.forEach(element => hash[element] = true)
    for (let i = 0; i < array.length; i++) {
        if (hash[sum - array[i]]) {
            result.push([array[i], sum - array[i]])
            hash[array[i]] = false
        }
    }
    return result
}
