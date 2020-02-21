var form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    var input_full_name = $('#full_name').val();
    window.localStorage.setItem('full_name', input_full_name);
    window.location = 'home.html';

});


// function myfunc(){
//     console.log(this);
// }

// var car = {
//     color: 'black',
//     make: 'bmw',
//     model: '750',
//     start: function(){
//         console.log(this);
//     }
// }

// myfunc();

// car.start();


