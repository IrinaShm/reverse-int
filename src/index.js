module.exports = function reverse(n) {
    let str = n.toString();

    if (n < 0) {
        return Number(str.split('').slice(1).reverse().join(''));
    }

    return Number(str.split('').reverse().join(''));
}
