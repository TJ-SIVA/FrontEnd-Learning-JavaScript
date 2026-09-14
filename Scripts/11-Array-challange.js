function minMax(arr){
   
    const num = {

        'min':arr[0] || null,
        'max':arr[0] || null
    };

    for(let i =0; i < arr.length;i++){

        if (arr[i] < num['min']){
            num['min'] = arr[i];
        }

        if (arr[i] > num['max'] ){

            num['max'] = arr[i];
        }

        
    }

    console.log(num);
}

minMax([1,-3,4,2])
minMax([3])
minMax([])