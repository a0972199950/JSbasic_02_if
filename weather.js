var search = document.getElementById("search");
var card = document.getElementById("card");
var input = document.getElementById("input");
var img = document.getElementById("img");
var title = document.getElementById("title");
var weather = document.getElementById("weather");

search.addEventListener("click", function(){
    var cityName = input.value;

    if(cityName === ""){
        alert("請輸入要查詢的地區");
    } else if(cityName !== "台北市" && cityName !== "桃園市"){
        alert("放棄吧，你只能查台北市和桃園市");
    } else {
        $.ajax({
            url: "weather.json",
            success: function(result){
                var cityData = result[cityName];

                img.setAttribute("src", cityData.img);
                title.innerText = cityData.name;
                weather.innerText = cityData.weather;

                card.setAttribute("style", "display: block");
            }
        })
    }
})
