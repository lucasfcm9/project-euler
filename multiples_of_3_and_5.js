function answer(limit) {

    let sum = 0;
    for(var i = 0; i < limit; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

let x = answer(1000)
console.log(x)