function bruteForceTwoSum(arr, num){
    let pairs=[]
    arr.forEach(el => {
        arr.forEach( el2 => {
            if (el+el2==num){
                arr= arr.filter(num=> num != el || num!= el2)
                pairs.push([el,el2])
            }
        }

        )
    });
    let half= pairs.length/2
    return pairs.slice(0, half)
}


let binarySearchTwoSum = (array, sum) => {
    let sortedArray = array.sort()
	let nums = []
    let prevNums = []
    
    for (let i in sortedArray){
        let addend = binaryMatch(sortedArray, sum-sortedArray[i])
        if (addend && !prevNums.includes(array[i]) && !prevNums.includes(addend)){
            nums.push([sortedArray[i], sum-sortedArray[i]])
            prevNums.push(sum-sortedArray[i])
        }
    }
    return nums
}

function binaryMatch(array, target, start=0, end=array.length-1) {
        let midPoint = ~~(start + (end - start)/2)
    
        switch(true){
            case array[start] === target || array[midPoint] === target || array[end] === target:
                return true
            case end - start === 0:
                return false
            case array[midPoint] > target:
                return binaryMatch(array, target, start+1, midPoint-1)
            case array[midPoint] < target:
                return binaryMatch(array, target, midPoint+1, end-1)    
        }
        return false
}

function hashTwoSum(arr, num){
    let hashMap={}
    let pairs=[]
arr.forEach(element => {
    hashMap[element]=true
});

arr.forEach(element => {
    let target= num-element
    if (hashMap[target]){
        pairs.push([element,target])
        hashMap[target]=false
        hashMap[element]=false
    }
});
return pairs
}