/* 【題目】：輸入正確的暗號後，可以獲得折扣碼 */

var answer1 = "定期都是騙人的";
var discountCode1 = 5678;

var answer2 = "LP別再用純圖片啦";
var discountCode2 = 1234;

var input = prompt("請輸入暗號");

/* 【使用if】 */
if(input === answer1){
    alert("輸入正確！折扣碼為：" + discountCode1);
} else if(input === answer2) {
    alert("輸入正確！折扣碼為：" + discountCode2);
} else {
    alert("你輸入的暗號不存在喔");
}


/* 【使用switch】 */
// switch(input){
//     case answer1:
//         alert("輸入正確！折扣碼為：" + discountCode1);
//         break;

//     case answer2:
//         alert("輸入正確！折扣碼為：" + discountCode2);
//         break;

//     default:
//         alert("你輸入的暗號不存在喔");
// }