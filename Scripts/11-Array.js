const nums = [10,20,30];
console.log(nums)
nums[nums.length-1] = 99;
console.log(nums)

function getLastValue(array){

    console.log(`Last Element is : ${array[array.length-1]}`)
}

getLastValue([23,76,2,5,7,0])
getLastValue(['hello','hi','good'])

function arraySwap(array){

    const arraySwap = [...array];
    arraySwap[0] = array[array.length-1]
    arraySwap[arraySwap.length-1] = array[0]
    console.log(`Before Swap : ${array}`);
    console.log(`After Swap : ${arraySwap}`);


}

arraySwap([1,20,22,24,5])
arraySwap(['hi','hello','good'])


