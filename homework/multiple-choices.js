/* 【題目】：用if製作選擇題 */



/* 【第一題】 */
var input = prompt("請問GA是什麼的簡稱？\n 1: Great Apple\n 2: (Samsung)Galaxy A70\n 3: Google Analytics\n 4: Gay Alien");

if(input){
    if(input === "3"){
        alert("這麼難的問題你都知道？");
    } else {
        alert("答錯啦...答案是「Google Analytics」");
    }
} else {
    alert("你沒答題...答案是「Google Analytics」");
};



/* 【第二題】 */
var input = prompt("請問「ろ」怎麼發音？\n 1: re\n 2: ro\n 3: ru\n 4: ra");

if(input){
    if(input === "2"){
        alert("玟ちゃん終於記住了！！誰快把今天訂成國定假日啊°(°ˊДˋ°) °");
    } else {
        alert("又答錯...ლಠ益ಠ)ლ\n是ro啦要說幾次，給我再唸20遍現在立馬！");
    }
} else {
    alert("你沒答題...答案是「ro」喔");
};



/* 【第三題】 */
var input = prompt("你家老闆的名字？\n 1: 阪根嘉苗\n 2: 板根嘉苗\n 3: 阪根香苗\n 4: 闆跟家貓");

if(input){
    if(input === "1"){
        alert("真強你居然知道......我整整寫錯1年");
    } else if(input === "4") {
        alert("有事嗎？我就知道你會選這個(눈_눈)");
    } else {
        alert("錯啦，自己老闆還不知道？");
    }
} else {
    alert("你沒答題...答案是「阪根嘉苗」喔");
};
