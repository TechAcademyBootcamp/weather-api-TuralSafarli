function weatherdata(searched_city="Baku"){
    console.log("salam");
    console.log($('form'))
    $.ajax({

        url:"https://api.openweathermap.org/data/2.5/weather?q="+ searched_city +"&appid=04ce5f9821aeace9f14cc61df442d772",
        
        method: "GET",
        success: function(response){

            var temp= response.main.temp;
            var tempconverted= temp-273.15
            var humidity=response.main.humidity;
            var windspeed= response.wind.speed;

            console.log(temp);

           $('.temp').html(parseInt(tempconverted) + " &deg;");
           $('.rain').text(parseInt(humidity)+" %");
           $('.wind').text( parseInt(windspeed) + " mph");


        },
        error: function(Errorresult){

            alert("City not found!");
        
            
        
            },  



    });
    



}

weatherdata();

$("form").submit(function(e){
e.preventDefault();

var A = $('#search_city').val();

weatherdata(A);


  });













