module.exports = function reverse(n) {
    let str = n.toString();
    let result = Number(str.split('').reverse().join(''));
    console.log(result);
}

reverse(261);
