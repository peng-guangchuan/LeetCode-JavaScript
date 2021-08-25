// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31−1]，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。
 
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let xx = x + '';
    const a = xx.charAt(0);
    let flag = false;
    if (a.charCodeAt() < 48 || a.charCodeAt() > 57) {
        flag = true;
        xx = xx.substring(1, xx.length)
    }
    let res = '';
    for(let i = xx.length - 1;i>=0;i--){
        res += xx.charAt(i)
    }
    for(let i = 0;i<res.length;i++){
        if(res.charAt(0) != 0){
            break;
        }
        res = res.substring(1,res.length)
    }
    if(flag){
        res = a+res
    }
    const r = parseInt(res)
    if(r>2147483647 || r<-2147483648){
        res = 0
    }
    return res
};

// use node test 
var x = 123
console.log(reverse(x)) // 321

var x = -123
console.log(reverse(x)) // -321

var x = 120
console.log(reverse(x)) // 21

var x = 0
console.log(reverse(x)) // 0

// 字符串解法。转字符串-全部分割-数组反转-数组合并-转数字
let y = parseInt(x.toString().split("").reverse().join(""));
if (x < 0)
    y = - y;
return y > 2147483647 || y < -2147483648 ? 0 : y;

// 数字操作解法，简单易懂
let res = 0;
while(x){
    res = res * 10 + x % 10;
    // Math.pow(2, 31) - 1 替换成 2147483647 / Math.pow(-2, 31) 替换成 -2147483648，快很多
    if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
    // ~是按位取反运算，~~是取反两次,在这里~~的作用是去掉小数部分
    // 因为位运算的操作值要求是整数，其结果也是整数，所以经过位运算的都会自动变成整数
    // 与Math.floor()不同的是，它只是单纯的去掉小数部分，不论正负都不会改变整数部分:向下取整
    // x = (x / 10)|0更快一些，用 n >> 0 和 n << 0 很慢
    x = ~~(x / 10);
}
return res;

// 官解，原理同上数字操作解法
let rev = 0;
while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);
    rev = rev * 10 + digit;
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
        return 0;
    }
}
return rev;