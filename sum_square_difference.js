let solve = (n) => {

    var sum = 0;
    for(var i = 1; i <= n; ++i) {
        sum += Math.pow(i, 2);
    }
    var s = 0;
    for(var i = 1; i <= n; i++) {
        s += i;
    }
    s = Math.pow(s, 2);

    console.log(Math.abs(s - sum));
}

solve(100); //25164150
