// const capitaliseStr = str => {     const arr = str.split(' ');     return
// arr.map(str => {         return str[0].toUpperCase() + str.slice(1);
// }).join(' '); }

const capitaliseStr = (str) => {
    let res = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            res = res + str[i].toUpperCase();
        } else {
            res = res + str[i];
        }
    }
    return res;
};

module.exports = {
    capitaliseStr
}