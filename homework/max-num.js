/* 【題目】：輸入多個數字，由電腦判斷誰最大 */


/* 【兩個數字】 */
// alert("接下來你可以輸入兩個數字，我會告訴你誰最大");

// var num1 = Number(prompt("請輸入第一個數字"));
// var num2 = Number(prompt("請輸入第二個數字"));

// if(num2 > num1){
//     alert("最大的數字是" + num2);
// } else if(num1 > num2){
//     alert("最大的數字是" + num1);
// } else {
//     alert("兩個數字一樣大");
// }



// /* 【超過兩個數字】 */
alert("接下來你可以輸入三個數字，我會告訴你誰最大");

var num1 = Number(prompt("請輸入第一個數字"));
var num2 = Number(prompt("請輸入第二個數字"));
var num3 = Number(prompt("請輸入第三個數字"));

var max = num1;
if(num2 > max){
    max = num2;
};

if(num3 > max){
    max = num3;
};

alert("最大的數字是" + max);
