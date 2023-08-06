function pageCount(n, p) {
    var book = [0.5]
    for (var i = 0; i < ((n - 1)/2); i++) {
        book.push(book[i] + 2)
    }

    if (p % 2 == 0) {
        p += 0.5 
    } else {
        p -= 0.5 
    }

    for (var i = 0; i < book.length; i ++) {
        if (p == book[i]) {
            p = i
        }
    }
    
    if ((p + 1) > (book.length / 2)) {
        p = (book.length - 1) - p
    } 

    return p
}

var n = 6
var p = 3
console.log(pageCount(n, p))