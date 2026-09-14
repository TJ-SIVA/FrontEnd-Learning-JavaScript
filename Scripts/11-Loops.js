console.log("outputs from loop js are down")

for(let i = 0;i<=10;i+=2){

  console.log(i);
    
}

console.log("Decrement loop output");
for(let i=5; i>=0;i--){
    console.log(i);
    
}

// 1 to 10 using while

let i = 0
console.log("1 to 10 using while")
while(i <=10){

    console.log(i);
    i +=2;
}

//loops item incresed by 1
console.log('loops item incresed by 1')
function arrayIncrease(arr){
    
    for(i = 0;i < arr.length;i++){

        arr[i] = arr[i]+1;

    }

    console.log(arr)

}

arrayIncrease([1,2,3])
arrayIncrease([-2,-1,0,99])

// increase array by number
console.log("incrase array by num")
function increaseByNum(arr,num){

    for( let i = 0 ; i < arr.length;i++){

        arr[i] = arr[i]+num;
    }
    console.log(arr);
}

increaseByNum([1,2,3],2)
increaseByNum([1,2,3],3)
increaseByNum([-2,-1,0,99],2)

// increase array + array
console.log("arry + array")
function AddingArray(arr1,arr2){
    const arr = []
    for( let i = 0 ; i < arr1.length;i++){

        arr[i] = arr1[i]+arr2[i];
    }
    console.log(arr);
}

AddingArray([1,1,3],[1,1,3])
AddingArray([1,2,3],[4,5,6])

function countPositive(arr){
    let count = 0
    for( let i = 0;i< arr.length ; i++){

        if(arr[i] > 0){
            count++;

        }
    }

    console.log(`${arr} : ${count}`);
}

countPositive([1,-3,5])
countPositive([-2,3,-5,7,10])






