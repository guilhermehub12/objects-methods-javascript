// sort array 
let array = [2,5,3,7,9,1,4];

// sorting (bubble sort)
function sort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length;  j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(sort(array))

// the same answer, but better (native sort)

function sort2(array){
    return array.sort((a, b) => a - b);
}

console.log(sort(array));