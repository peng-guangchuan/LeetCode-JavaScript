// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    var map = new Map()
    map.set(s[0], 1)
    for (let i = 1; i < s.length; i++) {
        let tempS = s[i]
        if (map.has(tempS)) {
            map.set(tempS, map.get(tempS) + 1)
        } else {
            map.set(tempS, 1)
        }
    }
    var charS = ''
    for (const item of map) {
        if (item[1] == 1) {
            charS = item[0]
            break
        }
    }
    if (charS == '') {
        return -1
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] == charS) return i
        }
    }
};

// use node test 
var s = "leetcode"
console.log(firstUniqChar(s)); // 0

var s = "loveleetcode"
console.log(firstUniqChar(s)); // 2

// 代码简洁、易懂、时间空间表现都不错。96ms, 41.2MB
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1
};

// 较常见的就是哈希表解法，与我自己写的类似（当然我的代码需要优化的地方很多）
// 还有includes方法、unicode编码中按位运算