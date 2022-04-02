// 数组解法。用时超63%，内存超18%
// 下面是我自己的第一次尝试时的解法，没注意题目所说的数据格式ListNode，看到输入输出的样例后，直接选择了数组解法，导致结果错误，但通过类型转换强行用数组解了下来
// 因为这个类型弄了很久，搞的有些疲惫，之前一直用java打算法比赛，换了js多少有些不熟悉，明天再学习来学习大佬的解法
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var res = [];
    var n1 = [];
    var n2 = [];
    while (l1) {
		n1.push(l1.val);
		l1 = l1.next;
	}
	while (l2) {
		n2.push(l2.val);
		l2 = l2.next;
	}
    if(n2.length > n1.length){ // 确保n2数组比较短
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }
    var temp = 0;
    var tempB = 0;
    for(let i = 0;i<n2.length;i++){ // 计算对位数字
        temp = n1[i] + n2[i] + tempB;
        tempB = 0;
        if(temp>=10) {
            temp%=10;
            tempB=1; // 进位
        }
        res.push(temp);
    }
    for(let i = n2.length;i<n1.length;i++){ // 剩余长度进位tempB
        temp = n1[i] + tempB;
        tempB = 0;
        if(temp>=10) {
            temp%=10;
            tempB=1; // 进位
        }
        res.push(temp);
    }
    if(tempB == 1) res.push(1);
    return array2ListNode(res);
};
var array2ListNode = (arr)=>{
    let nodeArr = [new ListNode(arr[0])];
    if(arr.length != 1) {
        for(let i = 1;i<arr.length;i++){
            let temp = new ListNode(arr[i]);
            nodeArr[i-1].next = temp
            nodeArr[i] = temp;
        }
    }
    return nodeArr[0];
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))
console.log(addTwoNumbers([0],[0]))
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))