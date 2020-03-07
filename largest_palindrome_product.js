function isPalindrome(value) {

    var i, len;
    var j = 0;
    for(var i = 0, len = value.length - 1; i <= value.length && len >= 0; i++, len--) {
        if(value[i] == value[len])
            j += 1;
        else
            j -= 1;
    }
    if(j == value.length)
        return true;
    else
        return false;
}
var lst = [];
for(var i = 100; i <= 999; i++) {
    for(var j = 100; j <= 999; j++) {
        lst.push(String(i * j));
    }
}

var hi = 0;
for(var i = 0; i < lst.length; i++) {

    if(isPalindrome(lst[i])) {
        if(parseInt(lst[i]) > hi) {
            hi = parseInt(lst[i]);
        }
    }
}
console.log(hi);
