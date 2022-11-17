const sort=(array)=>{
    for(let i = 0; i< array.length-1; i++)
    {
        menor=undefined;
        for(let j = i; j < array.length; j++){
            if(menor === undefined || array[menor] > array[j])
            {
                menor = j; 
            }
        }

        aux = array[menor];
        array[menor] = array[i]
        array[i] = aux;
    }

    return array;
}

console.log(sort ([3,2,1]))