var answer = 7;
var min = 1;
var max = 10;
var chance = 3;

alert(`接下來你有${chance}次機會能猜一個數字，介於${min}~${max}之間`);

var guess = Number(prompt(`請猜一個數字，介於${min}到${max}之間`));

if(guess === answer){
    alert(`你猜對了!! 答案就是${answer}`);

} else {
    if(guess < answer){
        min = guess;
    } else if(guess > answer){
        max = guess;
    };
    chance = chance - 1;
    guess = Number(prompt(`可惜猜錯囉~\n還有${chance}次機會，介於${min}到${max}之間`));

    if(guess === answer){
        alert(`你猜對了!! 答案就是${answer}`);
    
    } else {
        if(guess < answer){
            min = guess;
        } else if(guess > answer){
            max = guess;
        };
        chance = chance - 1;
        guess = Number(prompt(`可惜猜錯囉~\n還有${chance}次機會，介於${min}到${max}之間`));
    
        
        if(guess === answer){
            alert(`你猜對了!! 答案就是${answer}`);        
        } else {
            alert(`可惜到最後都沒猜中，答案其實是${answer}`);
        }
    }
}